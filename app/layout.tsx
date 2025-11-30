import type { Metadata } from 'next';
import './tailwind.css';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

const siteUrl = 'https://acceleryn.agency';

export const metadata: Metadata = {
  title: 'Acceleryn Agency — Scale Your Creator Income',
  description: 'You create. We engineer the backend. Custom-built systems for creators to generate consistent, predictable income—funnels, analytics, automation, and delivery.',
  openGraph: {
    title: 'Acceleryn Agency — Scale Your Creator Income',
    description: 'You create. We engineer the backend. Custom-built systems for creators to generate consistent, predictable income.',
    url: siteUrl,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acceleryn Agency — Scale Your Creator Income',
    description: 'You create. We engineer the backend. Custom-built systems for creators to generate consistent, predictable income.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} bg-navy-900 text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
