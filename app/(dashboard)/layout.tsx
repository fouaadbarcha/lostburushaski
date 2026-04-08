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
    return <div className="p-8 text-center text-slate-500">Loading your dashboard...</div>;
  }

  if (!user) {
    return null; // Will redirect shortly
  }

  return (
    <div className="flex gap-6">
      {/* Basic Sidebar/Navigation for Dashboard can go here in the future */}
      <aside className="w-48 shrink-0 hidden md:flex flex-col gap-2 pt-6 border-r pr-6">
        <a href="/profile" className="text-sm font-medium hover:text-blue-600 block py-1">Profile</a>
        <a href="/dashboard/contribute" className="text-sm font-medium hover:text-blue-600 block py-1">Contribute</a>
        {['moderator', 'admin'].includes(user.role) && (
          <a href="/dashboard/moderation" className="text-sm font-medium hover:text-blue-600 block py-1">Moderation Queue</a>
        )}
        {user.role === 'admin' && (
          <a href="/dashboard/admin" className="text-sm font-medium hover:text-blue-600 block py-1">Admin Panel</a>
        )}
      </aside>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
