import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'], variable: '--font-sans' })
const _geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

const siteUrl = 'https://mangrovemoments.in' // 🔁 replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Mangrove Moments | Eco-Adventure at Paravur Backwaters, Kerala',
    template: '%s | Mangrove Moments',
  },
  description:
    'Explore Paravur Backwaters near Varkala with guided kayaking, country boating, coracle rides, ATV adventures & more. Book your Kerala eco-adventure today.',

  keywords: [
    'Paravur backwaters',
    'Varkala activities',
    'Kerala kayaking',
    'mangrove kayaking Kerala',
    'country boat Paravur',
    'coracle ride Kerala',
    'ATV ride Varkala',
    'eco adventure Kerala',
    'backwater tour near Varkala',
    'things to do in Varkala',
    'Paravur tourism',
    'stand up paddle Kerala',
  ],

  authors: [{ name: 'Mangrove Moments', url: siteUrl }],
  creator: 'Mangrove Moments',
  publisher: 'Mangrove Moments',

  // Canonical & alternates
  alternates: {
    canonical: '/',
  },

  // Open Graph (Facebook, WhatsApp, LinkedIn previews)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Mangrove Moments',
    title: 'Mangrove Moments | Eco-Adventure at Paravur Backwaters, Kerala',
    description:
      'Kayaking, country boating, coracle rides & ATV adventures at Paravur Backwaters — just 20 minutes from Varkala. Book online today.',
    images: [
      {
        url: '/og-image.jpg', // 🔁 create a 1200×630px hero image for social sharing
        width: 1200,
        height: 630,
        alt: 'Mangrove kayaking at Paravur Backwaters, Kerala',
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Mangrove Moments | Eco-Adventure at Paravur Backwaters',
    description:
      'Kayaking, country boating, coracle rides & ATV at Paravur Backwaters near Varkala, Kerala.',
    images: ['/og-image.jpg'],
  },

  // Icons
 icons: {
  icon: './logo.png',
  apple: './logo.png',
  shortcut: './logo.png',
},

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// JSON-LD structured data — helps Google show rich results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Mangrove Moments',
  description:
    'Eco-adventure destination at Paravur Backwaters offering kayaking, country boating, coracle rides, ATV rides, stand-up paddleboarding, and more.',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.jpg`,
  telephone: '+91-XXXXXXXXXX', // 🔁 add your phone number
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paravur',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '8.8012',   // 🔁 update with exact coordinates
    longitude: '76.6441',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday',
    ],
    opens: '07:00',
    closes: '18:00',
  },
  touristType: ['Nature lovers', 'Adventure seekers', 'Families', 'Students'],
  hasMap: `https://maps.google.com/?q=Paravur+Backwaters+Kerala`,
  sameAs: [
    // 🔁 add your social media URLs here
    // 'https://www.instagram.com/mangrovemoments',
    // 'https://www.facebook.com/mangrovemoments',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      style={
        {
          '--font-sans': _geist.variable,
          '--font-serif': _playfair.variable,
          '--font-mono': _geistMono.variable,
        } as React.CSSProperties
      }
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Geographic meta tags */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Paravur, Varkala, Kerala" />
        <meta name="geo.position" content="8.8012;76.6441" />
        <meta name="ICBM" content="8.8012, 76.6441" />

        {/* Language & locale */}
        <meta httpEquiv="content-language" content="en-IN" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}