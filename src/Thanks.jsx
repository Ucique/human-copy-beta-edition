import React from "react";

export default function Thanks() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-200 selection:text-zinc-900">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-4 py-16">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 shadow">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Anfrage erhalten.</h1>
          <div className="mt-6 space-y-4 text-sm text-zinc-300">
            <p>Ich melde mich innerhalb von 24 Stunden persönlich bei dir.</p>
            <p>
              Nächster Schritt:
              <br />
              Ich schaue mir deinen Text an und bestätige Option A (79 €) oder ob Option B (0 €) passt.
            </p>
            <p>
              Erinnerung:
              <br />
              Keine Detektor-Optimierung. Ich mache Wirkung.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/human-copy-beta-edition/"
              className="inline-flex items-center justify-center rounded-2xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-900 shadow hover:bg-white"
            >
              Zurück zur Beta-Seite
            </a>
            <span className="text-xs text-zinc-500">Kein Funnel. Kein Theater.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
