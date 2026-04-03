// import type { Metadata } from 'next'
// import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import './globals.css'

// const _geist = Geist({ subsets: ['latin'], variable: '--font-sans' })
// const _geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })
// const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

// const siteUrl = 'https://mangrovemoments.in' // 🔁 replace with your actual domain

// export const metadata: Metadata = {
//   metadataBase: new URL(siteUrl),

//   title: {
//     default: 'Mangrove Moments | Eco-Adventure at Paravur Backwaters, Kerala',
//     template: '%s | Mangrove Moments',
//   },
//   description:
//     'Explore Paravur Backwaters near Varkala with guided kayaking, country boating, coracle rides, ATV adventures & more. Book your Kerala eco-adventure today.',

//   keywords: [
//     'Paravur backwaters',
//     'Varkala activities',
//     'Kerala kayaking',
//     'mangrove kayaking Kerala',
//     'country boat Paravur',
//     'coracle ride Kerala',
//     'ATV ride Varkala',
//     'eco adventure Kerala',
//     'backwater tour near Varkala',
//     'things to do in Varkala',
//     'Paravur tourism',
//     'stand up paddle Kerala',
//   ],

//   authors: [{ name: 'Mangrove Moments', url: siteUrl }],
//   creator: 'Mangrove Moments',
//   publisher: 'Mangrove Moments',

//   // Canonical & alternates
//   alternates: {
//     canonical: '/',
//   },

//   // Open Graph (Facebook, WhatsApp, LinkedIn previews)
//   openGraph: {
//     type: 'website',
//     locale: 'en_IN',
//     url: siteUrl,
//     siteName: 'Mangrove Moments',
//     title: 'Mangrove Moments | Eco-Adventure at Paravur Backwaters, Kerala',
//     description:
//       'Kayaking, country boating, coracle rides & ATV adventures at Paravur Backwaters — just 20 minutes from Varkala. Book online today.',
//     images: [
//       {
//         url: '/og-image.jpg', // 🔁 create a 1200×630px hero image for social sharing
//         width: 1200,
//         height: 630,
//         alt: 'Mangrove kayaking at Paravur Backwaters, Kerala',
//       },
//     ],
//   },

//   // Twitter / X card
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Mangrove Moments | Eco-Adventure at Paravur Backwaters',
//     description:
//       'Kayaking, country boating, coracle rides & ATV at Paravur Backwaters near Varkala, Kerala.',
//     images: ['/og-image.jpg'],
//   },

//   // Icons
//  icons: {
//   icon: './logo.png',
//   apple: './logo.png',
//   shortcut: './logo.png',
// },

//   // Robots
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
// }

// // JSON-LD structured data — helps Google show rich results
// const jsonLd = {
//   '@context': 'https://schema.org',
//   '@type': 'TouristAttraction',
//   name: 'Mangrove Moments',
//   description:
//     'Eco-adventure destination at Paravur Backwaters offering kayaking, country boating, coracle rides, ATV rides, stand-up paddleboarding, and more.',
//   url: siteUrl,
//   logo: `${siteUrl}/logo.png`,
//   image: `${siteUrl}/og-image.jpg`,
//   telephone: '+91-XXXXXXXXXX', // 🔁 add your phone number
//   address: {
//     '@type': 'PostalAddress',
//     addressLocality: 'Paravur',
//     addressRegion: 'Kerala',
//     addressCountry: 'IN',
//   },
//   geo: {
//     '@type': 'GeoCoordinates',
//     latitude: '8.8012',   // 🔁 update with exact coordinates
//     longitude: '76.6441',
//   },
//   openingHoursSpecification: {
//     '@type': 'OpeningHoursSpecification',
//     dayOfWeek: [
//       'Monday', 'Tuesday', 'Wednesday', 'Thursday',
//       'Friday', 'Saturday', 'Sunday',
//     ],
//     opens: '07:00',
//     closes: '18:00',
//   },
//   touristType: ['Nature lovers', 'Adventure seekers', 'Families', 'Students'],
//   hasMap: `https://maps.google.com/?q=Paravur+Backwaters+Kerala`,
//   sameAs: [
//     // 🔁 add your social media URLs here
//     // 'https://www.instagram.com/mangrovemoments',
//     // 'https://www.facebook.com/mangrovemoments',
//   ],
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html
//       lang="en"
//       style={
//         {
//           '--font-sans': _geist.variable,
//           '--font-serif': _playfair.variable,
//           '--font-mono': _geistMono.variable,
//         } as React.CSSProperties
//       }
//     >
//       <head>
//         {/* JSON-LD Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//         />

//         {/* Preconnect to Google Fonts for performance */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

//         {/* Geographic meta tags */}
//         <meta name="geo.region" content="IN-KL" />
//         <meta name="geo.placename" content="Paravur, Varkala, Kerala" />
//         <meta name="geo.position" content="8.8012;76.6441" />
//         <meta name="ICBM" content="8.8012, 76.6441" />

//         {/* Language & locale */}
//         <meta httpEquiv="content-language" content="en-IN" />
//       </head>
//       <body className="font-sans antialiased">
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }
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
    default: 'Mangrove Moments | Kayaking, Boating & Eco-Adventure at Paravur Backwaters, Kerala',
    template: '%s | Mangrove Moments',
  },
  description:
    'Explore Paravur Backwaters near Varkala with guided kayaking, country boating, coracle rides, ATV adventures & speed boat rides. Just 20 min from Varkala. Book via WhatsApp today.',

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
  ],

  authors: [{ name: 'Mangrove Moments', url: siteUrl }],
  creator: 'Mangrove Moments',
  publisher: 'Mangrove Moments',

  alternates: {
  canonical: siteUrl,
},

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Mangrove Moments',
    title: 'Mangrove Moments | Eco-Adventure at Paravur Backwaters, Kerala',
    description:
      'Kayaking, country boating, coracle rides & ATV adventures at Paravur Backwaters — just 20 minutes from Varkala. Book on WhatsApp today.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mangrove kayaking at Paravur Backwaters, Kerala',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mangrove Moments | Eco-Adventure at Paravur Backwaters',
    description:
      'Kayaking, country boating, coracle rides & ATV at Paravur Backwaters near Varkala, Kerala.',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: './logo.png',
    apple: './logo.png',
    shortcut: './logo.png',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Mangrove Moments',
  description:
    'Eco-adventure destination at Paravur Backwaters offering kayaking, country boating, coracle rides, ATV rides, stand-up paddleboarding, speed boat rides and more. Just 20 minutes from Varkala, Kerala.',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.jpg`,
  telephone: '+91-9744201662',         // PRIMARY number
  alternateName: 'Mangrove Moments Paravur',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Paravur Lake',
    addressLocality: 'Paravur',
    addressRegion: 'Kerala',
    postalCode: '691334',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '9.0200',
    longitude: '76.6200',
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
  priceRange: '₹300 – ₹3500',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI',
  touristType: ['Nature lovers', 'Adventure seekers', 'Families', 'Students', 'Corporate groups'],
  hasMap: 'https://maps.google.com/?q=Paravur+Lake+Kerala',
  sameAs: [
    'https://www.instagram.com/varkala_mangrove_moments',
  ],
}

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
        text: 'We offer 6 experiences: Kayaking (₹700/person), Country Boating (₹1700 for 1–2 persons), Stand Up Paddle (₹1000/person), Coracle Ride (₹300/person), ATV Ride (₹300/person), and Speed Boat (₹3500 for 1–5 persons). Open daily 6 AM to 6 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe for children and families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Mangrove Moments is family-friendly. Life jackets and safety gear are provided for all activities. Our guides are trained and experienced. Activities like the coracle ride and kayaking are popular with families and children.',
      },
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
        {/* JSON-LD: Tourist Attraction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* JSON-LD: FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Geographic meta tags — corrected to Paravur Lake */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Paravur, Varkala, Kerala" />
        <meta name="geo.position" content="9.0200;76.6200" />
        <meta name="ICBM" content="9.0200, 76.6200" />

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