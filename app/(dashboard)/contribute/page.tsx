export default function ContributePage() {
  return (
    <div className="py-6 space-y-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">Contribute a Word</h1>
      <p className="text-slate-600">Submit a new word to the dictionary. It will be reviewed by moderators.</p>
      <div className="bg-white p-6 rounded-xl border shadow-sm space-y-4">
        {/* Placeholder form block */}
        <div>
          <label className="block text-sm font-medium mb-1">Burushaski Word</label>
          <input type="text" className="w-full border rounded-lg p-2" placeholder="e.g. Baph" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Dialect</label>
          <select className="w-full border rounded-lg p-2">
            <option>Hunza</option>
            <option>Nagar</option>
            <option>Yasin</option>
          </select>
        </div>
        <button className="w-full bg-blue-600 text-white font-medium rounded-lg py-2 hover:bg-blue-700">
          Submit for Review
        </button>
      </div>
    </div>
  );
}
