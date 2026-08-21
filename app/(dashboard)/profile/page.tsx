export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="font-serif text-3xl font-semibold text-ink">My Profile</h1>
      <p className="text-ink-muted">View your contributions and account details.</p>
      <div className="card">
        <h2 className="font-serif text-lg font-semibold text-ink mb-2">My Submissions</h2>
        <p className="text-sm text-ink-muted">
          List of your pending, approved, and rejected words goes here...
        </p>
      </div>
    </div>
  );
}
