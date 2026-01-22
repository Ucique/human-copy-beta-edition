const priceLabel = document.querySelector('[data-price-label]');
const optionRadios = document.querySelectorAll('input[name="option"]');
const form = document.querySelector('#beta-form');
const modal = document.querySelector('#modal');
const closeButtons = document.querySelectorAll('[data-modal-close]');
const yearEl = document.querySelector('#year');

let lastFocusedElement = null;

const updatePriceLabel = () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!priceLabel || !selected) return;
  priceLabel.textContent = selected.value === '0' ? '0 € (nur wenn es passt)' : '79 € (empfohlen)';
};

const openModal = () => {
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  const closeButton = modal.querySelector('[data-modal-close]');
  if (closeButton) {
    closeButton.focus();
  }
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
};

const handleTrapFocus = (event) => {
  if (!modal || !modal.classList.contains('is-open')) return;
  if (event.key !== 'Tab') return;

  const focusableSelectors = [
    'button',
    '[href]',
    'input',
    'textarea',
    'select',
    '[tabindex]:not([tabindex="-1"])',
  ];
  const focusables = modal.querySelectorAll(focusableSelectors.join(','));
  if (!focusables.length) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
};

optionRadios.forEach((radio) => {
  radio.addEventListener('change', updatePriceLabel);
});

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    openModal();
  });
}

closeButtons.forEach((button) => {
  button.addEventListener('click', closeModal);
});

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target.matches('[data-modal-close]')) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
  handleTrapFocus(event);
});

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

updatePriceLabel();
