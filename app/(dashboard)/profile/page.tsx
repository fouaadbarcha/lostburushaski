export default function ProfilePage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold">My Profile</h1>
      <p className="text-slate-600">View your contributions and account details.</p>
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-xl font-semibold mb-2">My Submissions</h2>
        <p className="text-sm text-slate-500">List of your pending, approved, and rejected words goes here...</p>
      </div>
    </div>
  );
}
