export default function ModerationQueue() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">Moderation Queue</h1>
      <p className="text-slate-600">Review pending entries (Moderators only).</p>
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <p className="text-sm text-slate-500">List of pending words goes here...</p>
      </div>
    </div>
  );
}
