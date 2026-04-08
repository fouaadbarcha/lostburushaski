"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase/config';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard/profile');
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-12 bg-white p-6 rounded-xl border shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <p className="text-sm text-slate-500 mb-6">Welcome back to Lost Burushaski.</p>
      
      <form onSubmit={handleLogin} className="space-y-4">
        {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            required
            className="w-full border rounded-lg p-2" 
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input 
            type="password" 
            required
            className="w-full border rounded-lg p-2" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-medium rounded-lg py-2 hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      <div className="mt-4 text-center text-sm text-slate-500">
        Don&apos;t have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
      </div>
    </div>
  );
}
