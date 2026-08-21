export default function WordDetailPage({ params }: { params: { id: string } }) {
  // TODO: fetch the real Word document (by params.id) from Firestore once
  // the read path exists. Placeholder content kept identical to the prior
  // scaffold, restyled only.
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="card !p-8 space-y-6">
        <div>
          <h1 className="font-serif text-4xl font-bold text-ink mb-2">Baph</h1>
          <div className="flex gap-2">
            <span className="pill-neutral">Hunza</span>
            <span className="pill-neutral">Noun</span>
          </div>
        </div>

        <div className="pt-5 border-t border-line space-y-5">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1">
              English
            </h3>
            <p className="text-lg text-ink">Apple</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1">
              Urdu
            </h3>
            <p className="text-lg text-ink">سیب</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1">
              Pronunciation
            </h3>
            <p className="text-ink-soft italic">/bɑf/</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1">
              Example
            </h3>
            <p className="text-ink-soft italic">Je baph shiyaba. (I am eating an apple.)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
