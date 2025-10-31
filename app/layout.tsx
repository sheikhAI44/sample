import type { Metadata } from 'next';
import './tailwind.css';
import Header from './components/Header';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'FireGuard — AI Fire Prevention System',
  description: 'Protect your home and business with real-time AI fire detection and prevention.',
  openGraph: {
    title: 'FireGuard — AI Fire Prevention System',
    description: 'Protect your home and business with real-time AI fire detection and prevention.',
    url: 'https://localhost:3000',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FireGuard — AI Fire Prevention System',
    description: 'Protect your home and business with real-time AI fire detection and prevention.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
