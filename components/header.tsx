"use client";

import Link from "next/link";
import { useAuth } from "../lib/auth/auth-context";

export default function Header() {
  const { user, loading, logout } = useAuth();

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        Lost Burushaski
      </Link>

      <nav className="flex gap-4 items-center">
        <Link href="/dictionary" className="text-sm font-medium hover:text-blue-600">
          Dictionary
        </Link>

        {!loading &&
          (user ? (
            <>
              <Link href="/dashboard/profile" className="text-sm font-medium hover:text-blue-600">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-sm font-medium text-slate-500 hover:text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="text-sm font-medium hover:text-blue-600">
              Login
            </Link>
          ))}
      </nav>
    </div>
  );
}