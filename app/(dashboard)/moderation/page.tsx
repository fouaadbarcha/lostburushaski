export default function ModerationQueue() {
  return (
    <div className="space-y-6">
      <h1 className="font-serif text-3xl font-semibold text-ink">Moderation Queue</h1>
      <p className="text-ink-muted">Review pending entries (Moderators only).</p>
      <div className="card">
        <p className="text-sm text-ink-muted">List of pending words goes here...</p>
      </div>
    </div>
  );
}
