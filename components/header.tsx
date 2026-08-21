"use client";

import Link from "next/link";
import { useAuth } from "../lib/auth/auth-context";

export default function Header() {
  const { user, loading, logout } = useAuth();

  return (
    <div className="max-w-5xl mx-auto px-6 h-[66px] flex justify-between items-center">
      <Link
        href="/"
        className="font-serif italic font-semibold text-xl text-accent tracking-tight hover:text-accent hover:no-underline"
      >
        Lost Burushaski
      </Link>

      <nav className="flex gap-6 items-center">
        <Link
          href="/dictionary"
          className="text-[13px] font-semibold text-ink-muted hover:text-accent hover:no-underline"
        >
          Dictionary
        </Link>

        {!loading &&
          (user ? (
            <>
              <Link
                href="/dashboard/profile"
                className="text-[13px] font-semibold text-ink-muted hover:text-accent hover:no-underline"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/contribute"
                className="btn-primary !px-4 !py-2 !text-[13px]"
              >
                Contribute
              </Link>
              <button
                onClick={logout}
                className="text-[13px] font-medium text-ink-muted hover:text-accent"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-[13px] font-semibold text-ink-muted hover:text-accent hover:no-underline"
              >
                Login
              </Link>
              <Link href="/register" className="btn-primary !px-4 !py-2 !text-[13px]">
                Join as contributor
              </Link>
            </>
          ))}
      </nav>
    </div>
  );
}
