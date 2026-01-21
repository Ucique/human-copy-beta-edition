import React, { useMemo, useState } from "react";

export default function HumanCopyBetaLanding() {
  const [choice, setChoice] = useState("79");

  const priceLabel = useMemo(() => {
    if (choice === "0") return "0 € (nur wenn es passt)";
    return "79 € (empfohlen)";
  }, [choice]);

  const sections = [
    { id: "warum", label: "Warum" },
    { id: "leistung", label: "Was du bekommst" },
    { id: "optionen", label: "Optionen" },
    { id: "ablauf", label: "Ablauf" },
    { id: "anfrage", label: "Anfragen" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-200 selection:text-zinc-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-zinc-100/10 ring-1 ring-zinc-700/60" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">Human Copy</div>
              <div className="text-[11px] text-zinc-400">Beta Edition</div>
            </div>
          </div>

          <nav className="hidden items-center gap-4 text-sm text-zinc-300 md:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-xl px-2 py-1 hover:bg-zinc-100/10 hover:text-zinc-100"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <a
            href="#anfrage"
            className="rounded-2xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 shadow hover:bg-white"
          >
            Beta-Platz anfragen
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-zinc-100/10 blur-3xl" />
          <div className="absolute -bottom-40 right-[-6rem] h-72 w-72 rounded-full bg-zinc-100/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-200" />
                Nur 5 Plätze • 48–72h
              </div>

              <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                KI-Texte mit Wirkung.
                <span className="block text-zinc-300">Nicht Marketing.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">
                Ich überarbeite deinen KI-Text (Landingpage, About, Mail oder Post) und mache ihn glaubwürdig, klar und
                wirksam. Kein Marketing-Bullshit. Keine Detektor-Versprechen. Nur Wirkung.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#anfrage"
                  className="inline-flex items-center justify-center rounded-2xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-900 shadow hover:bg-white"
                >
                  Beta-Platz anfragen
                </a>
                <a
                  href="#optionen"
                  className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-100/10"
                >
                  Optionen ansehen
                </a>
              </div>

              <p className="mt-3 text-xs text-zinc-500">Kein Newsletter. Kein Spam. Nur dein Projekt.</p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <StatCard title="1 Text" desc="bis ca. 900–1.200 Wörter" />
                <StatCard title="1 Revision" desc="inklusive" />
                <StatCard title="SEO" desc="Ich respektiere bestehende SEO-Signale." />
              </div>
            </div>

            {/* Hero card */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">Human Copy — Beta Edition</div>
                  <div className="mt-1 text-sm text-zinc-400">Proof statt Theater. Fairer Deal.</div>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-xs text-zinc-300">
                  {priceLabel}
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-zinc-300">
                <Bullet>Fokus: Wirkung, Klarheit, Haltung</Bullet>
                <Bullet>Lieferung: 48–72 Stunden</Bullet>
                <Bullet>Kein Detektor-Service</Bullet>
                <Bullet>Kein SEO-Gefrickel / keine Keyword-Recherche</Bullet>
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
                <div className="text-xs font-semibold text-zinc-200">Mini-Demo</div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-3">
                    <div className="text-[11px] font-semibold text-zinc-400">Vorher</div>
                    <p className="mt-2 text-sm text-zinc-300">
                      We help businesses leverage AI to optimize workflows and enhance communication…
                    </p>
                  </div>
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-3">
                    <div className="text-[11px] font-semibold text-zinc-400">Nachher</div>
                    <p className="mt-2 text-sm text-zinc-100">
                      Dein Text klingt korrekt. Aber niemand fühlt sich gemeint. Ich baue dir eine Version, die sagt,
                      wofür du stehst — und warum man dir wirklich glauben sollte.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="#anfrage"
                  className="flex-1 rounded-2xl bg-zinc-100 px-4 py-3 text-center text-sm font-semibold text-zinc-900 hover:bg-white"
                >
                  Beta-Platz anfragen
                </a>
                <a
                  href="#warum"
                  className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-900/20 px-4 py-3 text-center text-sm font-semibold text-zinc-100 hover:bg-zinc-100/10"
                >
                  Warum lesen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum */}
      <section id="warum" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle kicker="Warum" title="Weil Proof besser ist als Behauptung." />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <p className="text-zinc-200">
              Human Copy ist ein neues Angebot. Nicht, weil ich neu bin — sondern weil ich es jetzt sauber als Produkt
              baue.
            </p>
            <p className="mt-4 text-zinc-300">
              Ich will Proof, der nicht nach Marketing riecht: echte Vorher/Nachher, echte Stimmen, echte Fälle.
            </p>
          </Card>
          <Card>
            <p className="text-zinc-300">
              Du bekommst einen fairen Beta-Deal. Ich bekomme Material, das ich anonym zeigen darf.
            </p>
            <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 text-sm text-zinc-300">
              <div className="font-semibold text-zinc-100">Meine Regel</div>
              <div className="mt-2">Urteil statt Rhetorik.</div>
            </div>
          </Card>
        </div>
      </section>

      {/* Leistung */}
      <section id="leistung" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle kicker="Leistung" title="Was du bekommst." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold">Überarbeitung</div>
            <p className="mt-2 text-sm text-zinc-300">1 Text bis ca. 900–1.200 Wörter. Fokus auf Wirkung, Klarheit, Haltung.</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Revision</div>
            <p className="mt-2 text-sm text-zinc-300">1 Revision inklusive. Kein endloses Hin-und-Her. Ergebnisorientiert.</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Rahmen</div>
            <p className="mt-2 text-sm text-zinc-300">Keine Detektor-Optimierung. Keine SEO-Strategie. Ich respektiere bestehende SEO-Signale.</p>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-zinc-100">Was ich mache</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• Ich lösche alles, was nichts sagt.</li>
              <li>• Ich baue ein, was fehlt.</li>
              <li>• Ich mache den Text lesbar und glaubwürdig.</li>
              <li>• Ich bringe Haltung rein — ohne Show.</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-zinc-100">Was ich nicht mache</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• Ich verspreche keine Detektor-Ergebnisse.</li>
              <li>• Ich mache keine Keyword-Recherche.</li>
              <li>• Ich baue keine SEO-Strategie.</li>
              <li>• Ich poliere nicht „ein bisschen hübscher“.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Optionen */}
      <section id="optionen" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle kicker="Optionen" title="Beta-Deal." />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-zinc-100">Option A — 79 € (empfohlen)</div>
                <div className="mt-1 text-sm text-zinc-400">Schnell, sauber, fair.</div>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-xs text-zinc-300">79 €</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Überarbeitung + 1 Revision</li>
              <li>• 48–72 Stunden</li>
              <li>• Ich darf anonymisiert 1 Vorher/Nachher-Ausschnitt zeigen</li>
              <li>• Ich darf 1 kurzes Feedback-Zitat verwenden</li>
            </ul>
          </Card>

          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-zinc-100">Option B — 0 € (nur wenn es passt)</div>
                <div className="mt-1 text-sm text-zinc-400">Ich entscheide nach Sichtung.</div>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-xs text-zinc-300">0 €</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Kostenlos, wenn dein Case gut passt</li>
              <li>• Ich darf den Case etwas ausführlicher zeigen (anonym)</li>
              <li>• Du gibst ehrliches Feedback (2–3 Sätze)</li>
              <li>• Keine Detektoren, kein SEO-Fokus</li>
            </ul>
          </Card>
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
          <div className="text-sm font-semibold text-zinc-100">Wichtig</div>
          <p className="mt-2 text-sm text-zinc-300">
            Wenn du einen Trick willst, um Tools auszutricksen: nicht hier. Wenn du Wirkung willst: hier.
          </p>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle kicker="Ablauf" title="So läuft es." />
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <StepCard n="1" title="Anfragen" desc="Du fragst einen Beta-Platz an." />
          <StepCard n="2" title="Rückmeldung" desc="Ich antworte innerhalb von 24h." />
          <StepCard n="3" title="Liefern" desc="48–72h. Ergebnisorientiert." />
          <StepCard n="4" title="Feedback" desc="2–3 Sätze. Anonym reicht." />
        </div>
      </section>

      {/* Anfrage */}
      <section id="anfrage" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle kicker="Anfrage" title="Beta-Platz anfragen." />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-zinc-100">Was ich von dir brauche</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Deinen aktuellen Text (KI oder Mischtext – egal)</li>
              <li>• Wofür er gedacht ist (verkaufen, erklären, Vertrauen, etc.)</li>
              <li>• Wer ihn lesen soll (Zielgruppe)</li>
              <li>• Was dich daran nervt</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
              <div className="text-xs font-semibold text-zinc-200">Einwilligung (kurz)</div>
              <p className="mt-2 text-sm text-zinc-300">
                Wenn du Beta buchst: Ich darf anonymisiert kurze Vorher/Nachher-Ausschnitte und 1 Feedback-Zitat verwenden.
                Keine Namen/Marken ohne Zustimmung. Kein voller Text.
              </p>
            </div>
          </Card>

          <Card>
            <form
              className="space-y-4"
              action="https://formspree.io/f/mpqqkadp"
              method="POST"
            >
              <input type="hidden" name="_redirect" value="/human-copy-beta-edition/thanks" />
              <div>
                <label className="text-xs font-semibold text-zinc-300">Name</label>
                <input
                  name="name"
                  className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-200/40"
                  placeholder="Dein Name"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-200/40"
                  placeholder="Deine E-Mail für die Rückmeldung"
                  required
                />
                <p className="mt-2 text-xs text-zinc-500">Nur für dieses Projekt. Kein Newsletter.</p>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300">Text oder Link</label>
                <textarea
                  name="text_or_link"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-200/40"
                  placeholder="Text einfügen oder Link senden"
                  required
                />
                <p className="mt-2 text-xs text-zinc-500">1 Text, ca. 900–1.200 Wörter.</p>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300">Ziel / Kontext</label>
                <textarea
                  name="context"
                  rows={3}
                  className="mt-2 w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-200/40"
                  placeholder="Wofür ist der Text? Wer liest ihn? Was soll passieren?"
                />
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
                <div className="text-xs font-semibold text-zinc-200">Option</div>
                <div className="mt-3 space-y-2 text-sm text-zinc-300">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="option"
                      value="79"
                      checked={choice === "79"}
                      onChange={() => setChoice("79")}
                      className="h-4 w-4 accent-zinc-100"
                    />
                    Option A — 79 € (empfohlen)
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="option"
                      value="0"
                      checked={choice === "0"}
                      onChange={() => setChoice("0")}
                      className="h-4 w-4 accent-zinc-100"
                    />
                    Option B — 0 € (nur wenn es passt)
                  </label>
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
                <input
                  type="checkbox"
                  name="detector_ack"
                  value="yes"
                  required
                  className="mt-0.5 h-4 w-4 accent-zinc-100"
                />
                <span className="text-sm text-zinc-300">Ich habe verstanden: keine Detektor-Optimierung.</span>
              </label>

              <button
                type="submit"
                className="w-full rounded-2xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-900 shadow hover:bg-white"
              >
                Beta-Platz anfragen
              </button>

              <p className="text-center text-xs text-zinc-500">Ich melde mich persönlich. Kein Funnel, kein Theater.</p>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/70 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-zinc-400">© {new Date().getFullYear()} Human Copy</div>
            <div className="flex flex-wrap gap-3 text-sm text-zinc-400">
              <a href="/human-copy-beta-edition/impressum" className="hover:text-zinc-200">Impressum</a>
              <a href="/human-copy-beta-edition/datenschutz" className="hover:text-zinc-200">Datenschutz</a>
              <a href="#" className="hover:text-zinc-200">Kontakt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card({ children }) {
  return <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 shadow">{children}</div>;
}

function SectionTitle({ kicker, title }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{kicker}</div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">{title}</h2>
    </div>
  );
}

function StatCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3">
      <div className="text-sm font-semibold text-zinc-100">{title}</div>
      <div className="mt-1 text-xs text-zinc-400">{desc}</div>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-200" />
      <span>{children}</span>
    </div>
  );
}

function StepCard({ n, title, desc }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5">
      <div className="text-xs font-semibold text-zinc-500">Step {n}</div>
      <div className="mt-3 text-sm font-semibold text-zinc-100">{title}</div>
      <div className="mt-2 text-sm text-zinc-300">{desc}</div>
    </div>
  );
}
