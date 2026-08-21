export default function DictionaryPage() {
  // TODO: replace with a real Firestore query (status == 'approved') once
  // the dictionary read path is wired up in lib/firebase. Kept as a single
  // placeholder card — matching the prior scaffold — rather than inventing
  // additional Burushaski vocabulary.
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
        <h1 className="font-serif text-3xl font-semibold text-ink">Dictionary</h1>
        <input type="text" placeholder="Search words..." className="input md:w-72" />
      </div>
      <p className="text-[15px] text-ink-muted mb-8 max-w-2xl">
        Approved Burushaski vocabulary, contributed and reviewed by the
        community. Each entry shows its dialect, part of speech, and who
        added it.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <a href="/dictionary/123" className="card hover:shadow-md transition block">
          <div className="flex items-baseline gap-2 flex-wrap mb-1">
            <h3 className="font-serif text-xl font-bold text-ink">Baph</h3>
            <span className="pill-neutral">Hunza</span>
          </div>
          <p className="text-xs text-ink-muted mb-2">Noun</p>
          <p className="text-ink-soft">Apple</p>
        </a>
      </div>
    </div>
  );
}
