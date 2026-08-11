import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'], variable: '--font-sans' })
const _geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

const siteUrl = 'https://www.mangrovemoments.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Mangrove Kayaking near Varkala Cliff | Mangrove Moments',
    template: '%s | Mangrove Moments Varkala',
  },
  description:
    'Guided mangrove kayaking, boat rides & SUP at Paravur Lake, 20 min from Varkala Cliff. 580+ 5-star reviews. Sunrise & sunset slots. Book on WhatsApp!',

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
    'speed boat Paravur',
    'kayaking near Varkala',
    'mangrove forest tour Kerala',
    'Kollam backwaters tour',
    'banana boat ride Kerala',
    'bumper ride Kerala',
    'water sports Paravur',
  ],

  authors: [{ name: 'Mangrove Moments', url: siteUrl }],
  creator: 'Mangrove Moments',
  publisher: 'Mangrove Moments',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Mangrove Moments',
    title: 'Mangrove Kayaking near Varkala Cliff | Mangrove Moments',
    description:
      'Guided mangrove kayaking, boat rides & SUP at Paravur Lake, 20 min from Varkala Cliff. 580+ 5-star reviews. Sunrise & sunset slots. Book on WhatsApp!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mangrove kayaking at Paravur Backwaters, Kerala — Mangrove Moments eco-adventure',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mangrove Kayaking near Varkala Cliff | Mangrove Moments',
    description:
      'Guided mangrove kayaking, boat rides & SUP at Paravur Lake, 20 min from Varkala Cliff. 580+ 5-star reviews. Book on WhatsApp!',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },

  verification: {
    google: 'OQ3uw_ciG0KHgD-9_mJXGQ9HTgl_a9nJ6pMrGxnzlSU',
  },

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

// ─── JSON-LD: Tourist Attraction ───────────────────────────────────────────
const touristAttractionLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Mangrove Moments - Paravur Lake Eco Adventures',
  description:
    'Guided mangrove kayaking, country boat rides, SUP, coracle rides and water sports at Paravur Lake, 20 minutes from Varkala Cliff.',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.jpg`,
  telephone: '+91-9744201662',
  alternateName: 'Mangrove Moments Paravur',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nedungolam, Paravur Lake',
    addressLocality: 'Paravur',
    addressRegion: 'Kerala',
    postalCode: '691334',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '8.8147',
    longitude: '76.6994',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday',
    ],
    opens: '05:30',
    closes: '18:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '580',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI',
  touristType: ['Nature lovers', 'Adventure seekers', 'Families', 'Students', 'Corporate groups'],
  hasMap: 'https://maps.google.com/?q=Paravur+Lake+Kerala',
  sameAs: [
    'https://www.instagram.com/varkala_mangrove_moments',
  ],
}

// ─── JSON-LD: Local Business ────────────────────────────────────────────────
const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#localbusiness`,
  name: 'Mangrove Moments',
  description:
    'Water sports and eco-adventure destination at Paravur Backwaters, 20 minutes from Varkala. Offering kayaking, country boating, coracle rides, ATV rides, speed boat, bumper ride, and banana boat.',
  url: siteUrl,
  telephone: '+91-9744201662',
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/logo.png`,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nedungolam, Paravur Lake',
    addressLocality: 'Paravur',
    addressRegion: 'Kerala',
    postalCode: '691334',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '8.8147',
    longitude: '76.6994',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday',
    ],
    opens: '05:30',
    closes: '18:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '580',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.instagram.com/varkala_mangrove_moments',
  ],
}

// ─── JSON-LD: FAQ Page ──────────────────────────────────────────────────────
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need experience for kayaking at Paravur Backwaters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No experience is needed. Our guides accompany you throughout the kayaking trip and provide full instructions before you start. Kayaking at Paravur is suitable for beginners and families.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Mangrove Moments from Varkala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mangrove Moments at Paravur Backwaters is approximately 20 minutes by road from Varkala Cliff. We also offer pickup and drop service from Varkala hotels and resorts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer pickup from Varkala hotels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer pickup and drop service from Varkala Cliff, Varkala Beach, and Kollam Town areas. Contact us on WhatsApp at +91 97442 01662 to arrange pickup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are group discounts available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer special discounts for groups of 10 or more. We also cater to school trips, corporate outings, and family events. Contact us for a custom group quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What activities are available at Mangrove Moments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer 8 experiences: Kayaking (₹700/person), Country Boating (₹1700 for 1–2 persons), Stand Up Paddle (₹1000/person), Coracle Ride (₹300/person), ATV Ride (₹300/person), Speed Boat (₹3500 for 1–5 persons), Bumper/Sofa Ride (₹500/person), and Banana Boat Ride (₹500/person). Open daily 5:30 AM to 6:00 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe for children and families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Mangrove Moments is family-friendly. Life jackets and safety gear are provided for all activities. Our guides are trained and experienced. Activities like the coracle ride, banana boat, and kayaking are popular with families and children.',
      },
    },
  ],
}

// ─── JSON-LD: Breadcrumb ────────────────────────────────────────────────────
const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-IN"
      style={
        {
          '--font-sans': _geist.variable,
          '--font-serif': _playfair.variable,
          '--font-mono': _geistMono.variable,
        } as React.CSSProperties
      }
    >
      <head>
        {/* JSON-LD: Tourist Attraction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionLd) }}
        />

        {/* JSON-LD: Local Business (Google Business Profile compatible) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />

        {/* JSON-LD: FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* JSON-LD: Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Geographic meta tags — Paravur Lake */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Paravur, Varkala, Kerala" />
        <meta name="geo.position" content="8.8147;76.6994" />
        <meta name="ICBM" content="8.8147, 76.6994" />

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
