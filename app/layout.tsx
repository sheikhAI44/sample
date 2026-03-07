import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter, Playfair_Display, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-playfair' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-dm-sans' });

const siteUrl = 'https://glowcush.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: 'GlowCush — Masculine Identity Engineering System',
  description: 'Transform your identity through 5 structured ebooks. Psychology, aesthetics, presence, and discipline. Status is engineered, not hoped for.',
  keywords: ['masculine transformation', 'identity engineering', 'structured self-development', 'masculine aesthetics', 'presence engineering', 'discipline framework', 'masculine psychology', 'status optimization', 'masculine identity'],
  authors: [{ name: 'GlowCush' }],
  creator: 'GlowCush',
  publisher: 'GlowCush',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'GlowCush — Masculine Identity Engineering System',
    description: 'Transform your identity through 5 structured ebooks. Psychology, aesthetics, presence, and discipline. Status is engineered, not hoped for.',
    siteName: 'GlowCush',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'GlowCush - Men\'s Self-Improvement Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlowCush — Masculine Identity Engineering System',
    description: 'Transform your identity through 5 structured ebooks. Status is engineered, not hoped for.',
    images: [`${siteUrl}/og-image.jpg`],
    creator: '@glowcush',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'GlowCush',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.png`,
        },
        sameAs: [
          'https://instagram.com/glowcush',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Community Support',
          email: 'hello@glowcush.com',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'GlowCush',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
      {
        '@type': 'MembershipProgram',
        '@id': `${siteUrl}/#membership`,
        name: 'The Glow Code',
        provider: {
          '@id': `${siteUrl}/#organization`,
        },
        offers: {
          '@type': 'Offer',
          price: '9.99',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        benefits: [
          'Mindset Training Programs',
          'Life Optimization Frameworks',
          'Fitness & Health Guidance',
          'Community Support & Accountability',
          'Daily Motivational Content',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: 'GlowCush — Become the Best Version of Yourself',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#organization`,
        },
        description: 'Join The Glow Code - A 2.9K member community for men focused on mindset training, life optimization, and fitness transformation.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': `${siteUrl}/#howto`,
        name: 'How to Join The Glow Code Community',
        description: 'Step-by-step process to join GlowCush and start your transformation journey',
        totalTime: 'PT10M',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Explore The Benefits',
            text: 'Learn about mindset training, life optimization, and fitness transformation offered in The Glow Code community.',
            position: 1,
            itemListElement: [
              {
                '@type': 'HowToDirection',
                text: 'Visit @glowcush on Instagram to see real results from our 2.9K members and understand what makes The Glow Code different.',
              },
            ],
          },
          {
            '@type': 'HowToStep',
            name: 'Subscribe to The Glow Code',
            text: 'Join The Glow Code with a simple $9.99/month subscription. Cancel anytime, no contracts.',
            position: 2,
            itemListElement: [
              {
                '@type': 'HowToDirection',
                text: 'Sign up for $9.99/month and get instant access to all community resources, training programs, and daily content.',
              },
            ],
          },
          {
            '@type': 'HowToStep',
            name: 'Start Your Transformation',
            text: 'Access training programs, community channels, and daily content. Start building the life you want today.',
            position: 3,
            itemListElement: [
              {
                '@type': 'HowToDirection',
                text: 'Begin your journey with immediate access to mindset training, life optimization frameworks, and a supportive community of 2.9K men.',
              },
            ],
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does GlowCush membership cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '$9.99/month for unlimited access to The Glow Code community, including mindset training programs, life optimization frameworks, fitness guidance, daily content, and community support from 2.9K members.',
            },
          },
          {
            '@type': 'Question',
            name: 'What\'s included in The Glow Code membership?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Glow Code membership includes: mindset mastery training, life optimization systems, fitness and health guidance, exclusive community access to 2.9K motivated men, daily motivational content and challenges, and results-driven accountability.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who is GlowCush for?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GlowCush is designed for men aged 18-35 who want to improve their mindset, fitness, lifestyle, and overall life quality. Whether you\'re focused on building confidence, developing better habits, or achieving peak performance, The Glow Code provides the frameworks and community support you need.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I cancel my membership anytime?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, you can cancel your GlowCush membership anytime. There are no long-term contracts or commitments. Stay as long as you\'re getting value, cancel whenever you need to.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I connect with the community?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Follow @glowcush on Instagram to stay connected with daily content and updates. Once you join The Glow Code membership, you\'ll get access to our exclusive member platform where you can connect with 2.9K members, participate in discussions, and get accountability support.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${dmSans.variable} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
