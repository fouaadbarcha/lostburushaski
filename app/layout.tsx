import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '../components/providers';
import Header from '../components/header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <header className="border-b bg-white">
              <Header />
            </header>
            <main className="flex-1 max-w-4xl w-full mx-auto p-4">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}