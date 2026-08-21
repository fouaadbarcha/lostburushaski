import { Inter, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import Providers from '../components/providers';
import Header from '../components/header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
});

export const metadata = {
  title: 'Lost Burushaski',
  description:
    'A community-driven platform preserving the Burushaski language across the Hunza, Nagar, and Yasin dialects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="font-sans">
        <Providers>
          <div className="min-h-screen flex flex-col bg-bg">
            <header className="sticky top-0 z-20 border-b border-line bg-surface">
              <Header />
            </header>
            <main className="flex-1 w-full">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
