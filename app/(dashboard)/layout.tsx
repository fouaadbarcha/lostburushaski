"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../lib/auth/auth-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="p-16 text-center text-ink-muted">Loading your dashboard...</div>;
  }

  if (!user) {
    return null; // Will redirect shortly
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 flex gap-10">
      <aside className="w-48 shrink-0 hidden md:flex flex-col gap-1">
        <a href="/profile" className="text-[13px] font-semibold text-ink-muted hover:text-accent hover:no-underline py-1.5">
          Profile
        </a>
        <a href="/dashboard/contribute" className="text-[13px] font-semibold text-ink-muted hover:text-accent hover:no-underline py-1.5">
          Contribute
        </a>
        {['moderator', 'admin'].includes(user.role) && (
          <a href="/dashboard/moderation" className="text-[13px] font-semibold text-ink-muted hover:text-accent hover:no-underline py-1.5">
            Moderation Queue
          </a>
        )}
        {user.role === 'admin' && (
          <a href="/dashboard/admin" className="text-[13px] font-semibold text-ink-muted hover:text-accent hover:no-underline py-1.5">
            Admin Panel
          </a>
        )}
      </aside>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
