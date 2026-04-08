export default function HomePage() {
  return (
    <div className="py-12 space-y-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">
        Preserve the <span className="text-blue-600">Burushaski</span> Language
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl">
        A community-driven platform to document, learn, and standardize Burushaski across Hunza, Nagar, and Yasin dialects.
      </p>
      <div className="flex gap-4 pt-4">
        <a href="/dictionary" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
          Browse Dictionary
        </a>
        <a href="/login" className="px-6 py-3 bg-white text-blue-600 border border-blue-200 font-medium rounded-lg hover:bg-blue-50 transition">
          Contribute
        </a>
      </div>
    </div>
  );
}
