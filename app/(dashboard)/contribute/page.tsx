export default function ContributePage() {
  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="font-serif text-3xl font-semibold text-ink">Contribute a Word</h1>
      <p className="text-ink-muted">
        Submit a new word to the dictionary. It will be reviewed by moderators
        before it appears publicly.
      </p>
      <div className="card space-y-4">
        <div>
          <label className="label">Burushaski Word</label>
          <input type="text" className="input" placeholder="e.g. Baph" />
        </div>
        <div>
          <label className="label">Dialect</label>
          <select className="input">
            <option>Hunza</option>
            <option>Nagar</option>
            <option>Yasin</option>
          </select>
        </div>
        <button className="btn-primary w-full">Submit for Review</button>
      </div>
    </div>
  );
}
