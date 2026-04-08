"use client";

import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider, useAuth } from '../lib/auth/auth-context';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

function HeaderContent() {
  const { user, loading, logout } = useAuth();
  return (
    <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">Lost Burushaski</Link>
      <nav className="flex gap-4 items-center">
         <Link href="/dictionary" className="text-sm font-medium hover:text-blue-600">Dictionary</Link>
         {!loading && (
           user ? (
             <>
               <Link href="/dashboard/profile" className="text-sm font-medium hover:text-blue-600">Dashboard</Link>
               <button onClick={logout} className="text-sm font-medium text-slate-500 hover:text-red-600">Logout</button>
             </>
           ) : (
             <Link href="/login" className="text-sm font-medium hover:text-blue-600">Login</Link>
           )
         )}
      </nav>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <header className="border-b bg-white">
              <HeaderContent />
            </header>
            <main className="flex-1 max-w-4xl w-full mx-auto p-4">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
