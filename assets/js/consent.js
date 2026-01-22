(() => {
  const GA_ID = 'G-FTJEV0KEDP';
  const CONSENT_KEY = 'hc_consent_v1';
  const BANNER_ID = 'hc-consent-banner';
  let gaLoaded = false;

  const parseConsent = () => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      return null;
    }
    try {
      const parsed = JSON.parse(stored);
      if (typeof parsed.analytics === 'boolean') {
        return parsed;
      }
    } catch (error) {
      return null;
    }
    return null;
  };

  const saveConsent = (analytics) => {
    const payload = {
      analytics: Boolean(analytics),
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
    return payload;
  };

  const loadGA = () => {
    if (gaLoaded) {
      return;
    }
    gaLoaded = true;
    const existingScript = document.querySelector(
      `script[src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"]`
    );
    if (!existingScript) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);
    }
    window.dataLayer = window.dataLayer || [];
    const gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  };

  const setBannerVisible = (banner, isVisible) => {
    if (isVisible) {
      banner.removeAttribute('hidden');
    } else {
      banner.setAttribute('hidden', '');
    }
  };

  const setView = (banner, view) => {
    const mainView = banner.querySelector('[data-consent-view="main"]');
    const settingsView = banner.querySelector('[data-consent-view="settings"]');
    if (!mainView || !settingsView) {
      return;
    }
    if (view === 'settings') {
      mainView.setAttribute('hidden', '');
      settingsView.removeAttribute('hidden');
    } else {
      settingsView.setAttribute('hidden', '');
      mainView.removeAttribute('hidden');
    }
  };

  const updateToggle = (banner, consent) => {
    const toggle = banner.querySelector('[data-consent-analytics]');
    if (!toggle) {
      return;
    }
    toggle.checked = Boolean(consent && consent.analytics);
  };

  const createBanner = () => {
    if (document.getElementById(BANNER_ID)) {
      return document.getElementById(BANNER_ID);
    }

    const banner = document.createElement('div');
    banner.className = 'hc-consent';
    banner.id = BANNER_ID;
    banner.setAttribute('hidden', '');
    banner.innerHTML = `
      <div class="hc-consent__card" role="dialog" aria-live="polite" aria-label="Cookie-Einstellungen">
        <div data-consent-view="main">
          <div class="hc-consent__title">Cookie-Einstellungen</div>
          <p class="hc-consent__text">
            Wir nutzen Analytics, um die Website zu verbessern. Diese Cookies werden nur mit deiner Einwilligung gesetzt.
            <a class="hc-consent__link" href="/legal/datenschutz.html">Datenschutz</a>
          </p>
          <div class="hc-consent__actions">
            <button class="hc-consent__button" type="button" data-consent-accept>Akzeptieren</button>
            <button class="hc-consent__button hc-consent__button--secondary" type="button" data-consent-decline>
              Ablehnen
            </button>
            <button class="hc-consent__button hc-consent__button--ghost" type="button" data-consent-settings>
              Einstellungen
            </button>
          </div>
        </div>
        <div class="hc-consent__settings" data-consent-view="settings" hidden>
          <div class="hc-consent__title">Einstellungen</div>
          <label class="hc-consent__toggle">
            <input type="checkbox" data-consent-analytics />
            Analytics
          </label>
          <div class="hc-consent__actions">
            <button class="hc-consent__button" type="button" data-consent-save>Speichern</button>
            <button class="hc-consent__button hc-consent__button--ghost" type="button" data-consent-back>
              Zurück
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(banner);
    return banner;
  };

  const init = () => {
    const banner = createBanner();
    const consent = parseConsent();

    if (consent && consent.analytics) {
      loadGA();
    }

    if (!consent) {
      setView(banner, 'main');
      updateToggle(banner, consent);
      setBannerVisible(banner, true);
    }

    banner.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (target.matches('[data-consent-accept]')) {
        const updated = saveConsent(true);
        setBannerVisible(banner, false);
        loadGA();
        updateToggle(banner, updated);
      }

      if (target.matches('[data-consent-decline]')) {
        const updated = saveConsent(false);
        setBannerVisible(banner, false);
        updateToggle(banner, updated);
      }

      if (target.matches('[data-consent-settings]')) {
        const currentConsent = parseConsent();
        updateToggle(banner, currentConsent);
        setView(banner, 'settings');
      }

      if (target.matches('[data-consent-back]')) {
        setView(banner, 'main');
      }

      if (target.matches('[data-consent-save]')) {
        const analyticsToggle = banner.querySelector('[data-consent-analytics]');
        const updated = saveConsent(analyticsToggle && analyticsToggle.checked);
        if (updated.analytics) {
          loadGA();
        }
        setBannerVisible(banner, false);
        updateToggle(banner, updated);
      }
    });

    document.querySelectorAll('[data-consent-open]').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const currentConsent = parseConsent();
        updateToggle(banner, currentConsent);
        setView(banner, 'settings');
        setBannerVisible(banner, true);
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
