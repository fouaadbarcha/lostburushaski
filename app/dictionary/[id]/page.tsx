export default function WordDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="py-6 space-y-6 max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-xl border shadow-sm space-y-4">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-600 mb-1">Baph</h1>
          <div className="flex gap-2 text-sm text-slate-500">
            <span className="px-2 py-1 bg-slate-100 rounded">Hunza</span>
            <span className="px-2 py-1 bg-slate-100 rounded">Noun</span>
          </div>
        </div>
        
        <div className="pt-4 border-t space-y-4">
          <div>
            <h3 className="font-semibold text-slate-400 text-sm uppercase tracking-wider">English</h3>
            <p className="text-lg">Apple</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-400 text-sm uppercase tracking-wider">Urdu</h3>
            <p className="text-lg">سیب</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-400 text-sm uppercase tracking-wider">Pronunciation</h3>
            <p className="text-slate-800">/bɑf/</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-400 text-sm uppercase tracking-wider">Example Syntax</h3>
            <p className="text-slate-800 italic">Je baph shiyaba. (I am eating an apple.)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
