export default function DictionaryPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Dictionary</h1>
        <input 
          type="text" 
          placeholder="Search words..." 
          className="border rounded-lg p-2 w-full md:w-64 shadow-sm"
        />
      </div>
      <p className="text-slate-600">Browse approved Burushaski vocabulary.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder word cards */}
        <a href="/dictionary/123" className="bg-white p-4 rounded-xl border shadow-sm hover:shadow-md transition block">
          <h3 className="text-xl font-bold text-blue-600">Baph</h3>
          <p className="text-sm text-slate-500 mb-2">Dialect: Hunza • Noun</p>
          <p className="text-slate-800">Apple</p>
        </a>
      </div>
    </div>
  );
}
