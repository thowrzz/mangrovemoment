import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, MessageCircle, ArrowLeft, MapPin, Star, Shield, Phone } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'

// ─── Activity Data ────────────────────────────────────────────────────────────
const activities = {
  'kayaking': {
    slug: 'kayaking',
    name: 'Kayaking',
    tagline: 'Paddle silently through ancient mangrove tunnels',
    duration: '2 hrs',
    price: '₹700',
    priceNote: 'Per person · guided experience',
    minPersons: 1,
    tag: 'Best Value',
    tagColor: '#4caf82',
    icon: '🛶',
    image: '/Kayaking.png',
    description: 'Glide silently through narrow mangrove tunnels with an experienced local guide leading the way. Kayaking at Paravur Backwaters is the most immersive way to explore Kerala\'s hidden waterways — weaving between ancient mangrove roots, spotting kingfishers and herons, and feeling the stillness of the backwater ecosystem.',
    highlights: [
      'Guided by trained local naturalists',
      'Suitable for all ages — no experience needed',
      'Life jackets & safety gear provided',
      'Best at sunrise for bird-watching',
      'Small group sizes for a personal experience',
    ],
    metaTitle: 'Mangrove Forest Kayaking Varkala | Paravur Lake Guided Tours — Mangrove Moments',
    metaDesc: 'Paddle through mangrove tunnels at Paravur Lake. Guided sunrise & sunset kayaking 20 min from Varkala Cliff. Safe for beginners. Life jackets & local guides included. From ₹700. Book now.',
    keywords: ['Varkala mangrove kayaking', 'Paravur lake kayaking', 'mangrove forest kayaking Varkala', 'guided kayaking Kerala backwaters', 'Paravur backwater kayaking'],
    schemaPrice: '700',
    schemaCurrency: 'INR',
  },
  'country-boating': {
    slug: 'country-boating',
    name: 'Country Boating',
    tagline: 'A traditional wooden boat through ancient mangrove channels',
    duration: '1 hr 15 min',
    price: '₹1,700',
    priceNote: '1–2 persons · +₹250/extra person · Pre-booking required',
    minPersons: 1,
    tag: 'Most Popular',
    tagColor: '#c9a84c',
    icon: '⛵',
    image: '/countryboating.webp',
    description: 'Step aboard a traditional Kerala wooden country boat and glide through the ancient channels of Paravur Backwaters. This is the most iconic and immersive experience we offer — a slow, beautiful journey through mangrove forests, across open lake stretches, with a knowledgeable guide sharing stories of the ecosystem and local culture.',
    highlights: [
      'Traditional hand-crafted wooden boat',
      'Covers the widest stretch of the backwaters',
      'Ideal for couples, families & photography',
      'Pre-booking strongly recommended',
      'Available from 5:30 AM — perfect for golden hour',
    ],
    metaTitle: 'Country Boat Ride Paravur Backwaters | Traditional Varkala Backwater Tour',
    metaDesc: 'Experience a peaceful country boat ride through Paravur backwaters near Varkala. Traditional boat, local guide, bird watching. 20 min from Varkala Cliff. Daily departures. Book on WhatsApp.',
    keywords: ['country boating Kerala', 'Paravur country boat', 'traditional boat Kerala backwaters', 'country boat tour Varkala', 'wooden boat Paravur'],
    schemaPrice: '1700',
    schemaCurrency: 'INR',
  },
  'stand-up-paddle': {
    slug: 'stand-up-paddle',
    name: 'Stand Up Paddle',
    tagline: 'Balance on glassy backwaters and soak in the silence',
    duration: '2 hrs',
    price: '₹1,000',
    priceNote: 'Per person',
    minPersons: 1,
    tag: 'Fun & Easy',
    tagColor: '#4c8ec9',
    icon: '🏄',
    image: '/standup.png',
    description: 'Stand-up paddleboarding on the calm, glassy waters of Paravur Lake is both a workout and a meditation. Balance on the board as you glide across the open water, with the Western Ghats in the distance and the mangroves reflecting in the stillness around you. No experience required — our guides will have you standing and paddling within minutes.',
    highlights: [
      'No experience needed — full instruction provided',
      'Core workout disguised as pure fun',
      'Stunning open-lake views',
      'Perfect for solo travellers & groups',
      'Life jackets provided',
    ],
    metaTitle: 'Stand Up Paddleboarding Varkala | SUP Paravur Lake near Cliff',
    metaDesc: 'Try stand-up paddleboarding on calm Paravur Lake waters. Great for beginners. Sunset slots available. 20 min from Varkala Cliff. Local guides & safety gear included. Book now.',
    keywords: ['stand up paddle Kerala', 'SUP Paravur Lake', 'paddleboarding Varkala', 'stand up paddle backwaters', 'SUP Kerala'],
    schemaPrice: '1000',
    schemaCurrency: 'INR',
  },
  'coracle-ride': {
    slug: 'coracle-ride',
    name: 'Coracle Ride',
    tagline: 'A centuries-old Kerala tradition — spin and drift on the backwaters',
    duration: '15 min',
    price: '₹300',
    priceNote: 'Per person · minimum 2 persons',
    minPersons: 2,
    tag: 'Unique to Kerala',
    tagColor: '#c97a4c',
    icon: '🪵',
    image: '/coracleRide.jpg',
    description: 'A coracle is a traditional round basket boat used by Kerala\'s fishing communities for centuries. Step into one of these remarkable circular vessels and experience the unique sensation of spinning and drifting as our skilled guide navigates using a single paddle. Pure joy, pure Kerala — a favourite with families and children.',
    highlights: [
      'Centuries-old Kerala fishing tradition',
      'Unique circular basket boat construction',
      'Extremely stable — suitable for all ages',
      'Highly photogenic experience',
      'Minimum 2 persons required',
    ],
    metaTitle: 'Coracle Ride Varkala | Traditional Round Boat Paravur Lake',
    metaDesc: 'Unique coracle boat ride on Paravur Lake near Varkala. Traditional round boat experience with local guides. Safe, photogenic & beginner-friendly. 20 min from Varkala Cliff.',
    keywords: ['coracle ride Kerala', 'coracle boat Paravur', 'traditional coracle Kerala', 'round boat ride Kerala backwaters', 'coracle Varkala'],
    schemaPrice: '300',
    schemaCurrency: 'INR',
  },
  'atv-ride': {
    slug: 'atv-ride',
    name: 'ATV Off-Road Adventure near Varkala at Paravur Lake',
    tagline: 'Off-road adrenaline beside the backwaters',
    duration: '1 round',
    price: '₹300',
    priceNote: 'Per person',
    minPersons: 1,
    tag: 'Adrenaline',
    tagColor: '#c94c4c',
    icon: '🏍️',
    image: '/avtride.webp',
    description: 'Get your blood pumping with a high-octane ATV quad bike ride on the rugged terrain beside Paravur Lake. Feel the roar of the engine as you tear across uneven ground, with stunning backwater views alongside you. A short but intensely satisfying off-road adventure — perfect as a complement to your water activities.',
    highlights: [
      'No driving experience required',
      'Safety briefing & gear provided',
      'Scenic terrain beside the backwaters',
      'Great for thrill-seekers & groups',
      'Quick, high-energy experience',
    ],
    metaTitle: 'ATV Ride Varkala | Off-Road Adventure Paravur Lake',
    metaDesc: 'Quad bike adventure trails near Varkala at Paravur Lake. ATV off-road experience for all skill levels. 20 min from Varkala Cliff. Combine with kayaking for a full day.',
    keywords: ['ATV ride Varkala', 'ATV Paravur backwaters', 'quad bike Kerala', 'off-road Varkala', 'ATV ride Kerala backwaters'],
    schemaPrice: '300',
    schemaCurrency: 'INR',
  },
  'atv': {
    slug: 'atv',
    name: 'ATV Off-Road Adventure near Varkala at Paravur Lake',
    tagline: 'Off-road adrenaline beside the backwaters',
    duration: '1 round',
    price: '₹300',
    priceNote: 'Per person',
    minPersons: 1,
    tag: 'Adrenaline',
    tagColor: '#c94c4c',
    icon: '🏍️',
    image: '/avtride.webp',
    description: 'Get your blood pumping with a high-octane ATV quad bike ride on the rugged terrain beside Paravur Lake. Feel the roar of the engine as you tear across uneven ground, with stunning backwater views alongside you. A short but intensely satisfying off-road adventure — perfect as a complement to your water activities.',
    highlights: [
      'No driving experience required',
      'Safety briefing & gear provided',
      'Scenic terrain beside the backwaters',
      'Great for thrill-seekers & groups',
      'Quick, high-energy experience',
    ],
    metaTitle: 'ATV Ride Varkala | Off-Road Adventure Paravur Lake',
    metaDesc: 'Quad bike adventure trails near Varkala at Paravur Lake. ATV off-road experience for all skill levels. 20 min from Varkala Cliff. Combine with kayaking for a full day.',
    keywords: ['ATV ride Varkala', 'ATV Paravur backwaters', 'quad bike Kerala', 'off-road Varkala', 'ATV ride Kerala backwaters'],
    schemaPrice: '300',
    schemaCurrency: 'INR',
  },
  'speed-boat': {
    slug: 'speed-boat',
    name: 'Speed Boat',
    tagline: 'Full-throttle across Paravur Lake',
    duration: '30 min',
    price: '₹3,500',
    priceNote: '1–5 persons per ride',
    minPersons: 1,
    tag: 'Premium',
    tagColor: '#8e4cc9',
    icon: '🚤',
    image: '/boat.png',
    description: 'For those who want the ultimate water rush — the speed boat experience on Paravur Lake is breathtaking. Strap in as your captain opens up the throttle and you tear across the open lake at full speed, wind in your face, water spraying, and the mangroves a blur on the horizon. Fits up to 5 persons, making it excellent value for groups.',
    highlights: [
      'Up to 5 persons per booking',
      'Full 30-minute experience on open water',
      'Safety equipment provided',
      'Best when combined with a leisurely coracle or kayak',
      'Available throughout the day',
    ],
    metaTitle: 'Speed Boat Ride Paravur Lake | High-Speed Varkala Backwaters',
    metaDesc: 'Speed boat ride on Paravur Lake near Varkala Cliff. ₹3,500 for up to 5 persons. High-speed backwater tour with experienced captain. Book on WhatsApp.',
    keywords: ['speed boat Paravur', 'speed boat ride Varkala', 'speed boat Kerala backwaters', 'Paravur Lake speed boat', 'boat ride Varkala'],
    schemaPrice: '3500',
    schemaCurrency: 'INR',
  },
  'bumper-ride': {
    slug: 'bumper-ride',
    name: 'Bumper / Sofa Ride',
    tagline: 'Hold on tight — a high-speed water bumper adventure',
    duration: '1 round',
    price: '₹500',
    priceNote: 'Per person · safety gear provided',
    minPersons: 1,
    tag: 'Thrilling',
    tagColor: '#ff6b4c',
    icon: '🛟',
    image: '/sofa.jpg',
    description: 'Climb aboard the inflatable bumper or sofa tube and get towed at high speed by our boat across the backwaters. As the boat accelerates, you\'ll twist, bounce and bounce again — holding on for dear life while laughing uncontrollably. An absolute crowd-pleaser for groups, families, and anyone who loves a bit of chaos.',
    highlights: [
      'Extreme fun for all ages',
      'Safety gear provided',
      'Popular with groups & corporate outings',
      'Multiple rounds available',
      'Combines well with banana boat for full water sports session',
    ],
    metaTitle: 'Water Sports near Varkala Cliff | Speed Boat, Banana & Bumper Rides',
    metaDesc: 'Thrilling speed boat, banana ride & bumper rides at Paravur Lake. Best water sports near Varkala Cliff. Group bookings welcome. Local guides & safety equipment. Book now.',
    keywords: ['bumper ride Kerala', 'sofa ride Kerala backwaters', 'water bumper Paravur', 'inflatable tube ride Varkala', 'water sports Paravur'],
    schemaPrice: '500',
    schemaCurrency: 'INR',
  },
  'banana-ride': {
    slug: 'banana-ride',
    name: 'Banana Ride',
    tagline: 'Inflatable fun for the whole group',
    duration: '1 round',
    price: '₹500',
    priceNote: 'Per person · best for groups · safety gear provided',
    minPersons: 2,
    tag: 'Group Fun',
    tagColor: '#f4c542',
    icon: '🍌',
    image: '/banana.jpg',
    description: 'Jump onto the iconic inflatable banana boat and hold on tight as our speedboat pulls you across the sparkling backwaters. The banana boat bounces, twists, and spins — sometimes tipping everyone off into the water for maximum hilarity. Absolutely perfect for groups of friends, family trips, and anyone who believes that falling into the water is the best part.',
    highlights: [
      'Multiple riders per banana boat',
      'Life jackets provided for all riders',
      'Guaranteed laughter & memories',
      'Best experience for groups of 4+',
      'Professional boat operators',
    ],
    metaTitle: 'Water Sports near Varkala Cliff | Speed Boat, Banana & Bumper Rides',
    metaDesc: 'Thrilling speed boat, banana ride & bumper rides at Paravur Lake. Best water sports near Varkala Cliff. Group bookings welcome. Local guides & safety equipment. Book now.',
    keywords: ['banana boat ride Kerala', 'banana ride Paravur', 'banana boat Varkala', 'group water sports Kerala', 'inflatable banana boat Kerala backwaters'],
    schemaPrice: '500',
    schemaCurrency: 'INR',
  },
}

type ActivitySlug = keyof typeof activities

// ─── generateStaticParams ─────────────────────────────────────────────────────
export function generateStaticParams() {
  return Object.keys(activities).map((slug) => ({ slug }))
}

// ─── generateMetadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const activity = activities[slug as ActivitySlug]
  if (!activity) return {}

  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: activity.metaTitle },
    description: activity.metaDesc,
    keywords: activity.keywords,
    alternates: {
      canonical: `/activities/${slug}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: `${siteUrl}/activities/${slug}`,
      siteName: 'Mangrove Moments',
      title: activity.metaTitle,
      description: activity.metaDesc,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${activity.name} at Paravur Backwaters, Kerala — Mangrove Moments`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: activity.metaTitle,
      description: activity.metaDesc,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const activity = activities[slug as ActivitySlug]
  if (!activity) notFound()

  const wa_number = '919744201662'
  const waMessage = encodeURIComponent(
    `Hi! I'd like to book the *${activity.name}* experience at Mangrove Moments, Paravur. Please share availability and details.`
  )

  // JSON-LD for this activity
  const activityLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: `${activity.name} — Mangrove Moments`,
    description: activity.description,
    url: `${siteUrl}/activities/${slug}`,
    image: `${siteUrl}${activity.image}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Paravur Lake',
      addressLocality: 'Paravur',
      addressRegion: 'Kerala',
      postalCode: '691334',
      addressCountry: 'IN',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: activity.schemaCurrency,
      price: activity.schemaPrice,
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}/activities/${slug}`,
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Mangrove Moments',
      url: siteUrl,
      telephone: '+91-9744201662',
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Activities', item: `${siteUrl}/activities` },
      { '@type': 'ListItem', position: 3, name: activity.name, item: `${siteUrl}/activities/${slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(activityLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <style>{`

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .act-detail-page {
          min-height: 100vh;
          background: #f7f5f0;
          font-family: 'Jost', sans-serif;
        }

        /* ── Navbar bar ── */
        .act-topbar {
          background: #0d2415;
          padding: 16px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(201,168,76,0.15);
        }

        .act-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s;
        }
        .act-back-link:hover { color: #e8d49a; }

        .act-topbar-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
        }
        .act-topbar-brand span { color: #c9a84c; }

        /* ── Hero ── */
        .act-hero {
          position: relative;
          height: 70vh;
          min-height: 480px;
          overflow: hidden;
        }
        .act-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(8,24,14,0.3) 0%,
            rgba(8,24,14,0.15) 40%,
            rgba(8,24,14,0.8) 100%
          );
          z-index: 2;
        }
        .act-hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 3;
          padding: 48px 48px 56px;
          max-width: 900px;
        }
        .act-hero-tag {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #fff;
          padding: 5px 12px;
          border-radius: 2px;
          margin-bottom: 20px;
        }
        .act-hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 6vw, 4.8rem);
          font-weight: 300;
          color: #ffffff;
          line-height: 1.05;
          margin-bottom: 14px;
        }
        .act-hero-tagline {
          font-family: 'Jost', sans-serif;
          font-size: 1rem;
          font-weight: 300;
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.04em;
        }

        /* ── Meta bar ── */
        .act-meta-bar {
          background: #0d2415;
          display: flex;
          align-items: center;
          gap: 0;
          flex-wrap: wrap;
          padding: 0 48px;
        }
        .act-meta-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 20px 28px 20px 0;
          margin-right: 28px;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .act-meta-item:last-child { border-right: none; }
        .act-meta-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 2px;
        }
        .act-meta-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #e8d49a;
          line-height: 1;
        }

        /* ── Main content ── */
        .act-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 48px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 56px;
          align-items: start;
        }

        .act-section-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 14px;
        }
        .act-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 300;
          color: #0d2415;
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .act-description {
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: #555;
          line-height: 1.85;
          margin-bottom: 40px;
        }

        .act-highlights-title {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0d2415;
          margin-bottom: 16px;
        }
        .act-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          font-family: 'Jost', sans-serif;
          font-size: 0.83rem;
          font-weight: 300;
          color: #444;
          line-height: 1.5;
        }
        .act-highlight-item:last-child { border-bottom: none; }
        .act-highlight-dot {
          width: 6px;
          height: 6px;
          background: #c9a84c;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }

        /* ── Booking card ── */
        .act-book-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          padding: 32px;
          position: sticky;
          top: 80px;
        }
        .act-book-price-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 4px;
        }
        .act-book-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 600;
          color: #0d2415;
          line-height: 1;
          margin-bottom: 4px;
        }
        .act-book-price-note {
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          font-weight: 300;
          color: #999;
          margin-bottom: 28px;
        }

        .act-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a84c, transparent);
          margin: 24px 0;
        }

        .act-wa-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background: #25d366;
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: none;
          padding: 16px 24px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s;
          border-radius: 2px;
          margin-bottom: 10px;
        }
        .act-wa-btn:hover { background: #1ebe5a; transform: translateY(-1px); }

        .act-call-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background: transparent;
          color: #0d2415;
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: 1px solid rgba(13,36,21,0.2);
          padding: 14px 24px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s;
          border-radius: 2px;
        }
        .act-call-btn:hover {
          background: rgba(13,36,21,0.04);
          border-color: #0d2415;
        }

        .act-trust-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
        }
        .act-trust-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          font-weight: 400;
          color: #888;
        }

        /* ── Location section ── */
        .act-location {
          background: #0d2415;
          margin-top: 80px;
          padding: 56px 48px;
          text-align: center;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .act-body {
            grid-template-columns: 1fr;
            padding: 40px 24px;
            gap: 40px;
          }
          .act-book-card { position: static; }
          .act-hero-content { padding: 32px 24px 40px; }
          .act-meta-bar { padding: 0 24px; }
          .act-meta-item { padding: 16px 20px 16px 0; margin-right: 20px; }
        }
        @media (max-width: 600px) {
          .act-topbar { padding: 14px 20px; }
          .act-meta-item { padding: 14px 14px 14px 0; margin-right: 14px; }
          .act-meta-value { font-size: 1rem; }
          .act-location { padding: 40px 24px; }
        }
      `}</style>

      <main className="act-detail-page">
        {/* ── Top nav bar ── */}
        <nav className="act-topbar">
          <Link href="/#activities" className="act-back-link">
            <ArrowLeft size={13} />
            All Activities
          </Link>
          <Link href="/" className="act-topbar-brand">
            Mangrove <span>Moments</span>
          </Link>
          <a
            href={`https://wa.me/${wa_number}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: '#25d366',
              color: '#fff',
              padding: '8px 18px',
              borderRadius: '2px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <MessageCircle size={13} />
            Book Now
          </a>
        </nav>

        {/* ── Hero image ── */}
        <div className="act-hero">
          <Image
            src={activity.image}
            alt={`${activity.name} at Paravur Backwaters, Varkala, Kerala — Mangrove Moments`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="act-hero-overlay" />
          <div className="act-hero-content">
            <div
              className="act-hero-tag"
              style={{ background: activity.tagColor }}
            >
              {activity.tag}
            </div>
            <h1 className="act-hero-name">
              {activity.icon} {activity.name}
            </h1>
            <p className="act-hero-tagline">{activity.tagline}</p>
          </div>
        </div>

        {/* ── Meta bar ── */}
        <div className="act-meta-bar">
          <div className="act-meta-item">
            <Clock size={16} color="rgba(201,168,76,0.6)" />
            <div>
              <div className="act-meta-label">Duration</div>
              <div className="act-meta-value">{activity.duration}</div>
            </div>
          </div>
          <div className="act-meta-item">
            <Star size={16} fill="#c9a84c" color="#c9a84c" style={{ opacity: 0.8 }} />
            <div>
              <div className="act-meta-label">Rating</div>
              <div className="act-meta-value">5.0 ★</div>
            </div>
          </div>
          <div className="act-meta-item">
            <Users size={16} color="rgba(201,168,76,0.6)" />
            <div>
              <div className="act-meta-label">Min. Group</div>
              <div className="act-meta-value">{activity.minPersons} person{activity.minPersons > 1 ? 's' : ''}</div>
            </div>
          </div>
          <div className="act-meta-item">
            <MapPin size={16} color="rgba(201,168,76,0.6)" />
            <div>
              <div className="act-meta-label">Location</div>
              <div className="act-meta-value" style={{ fontSize: '0.95rem' }}>Paravur Backwaters</div>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="act-body">
          {/* Left column — description */}
          <div>
            <p className="act-section-label">About This Experience</p>
            <h2 className="act-section-title">
              {activity.name} at<br />
              <em style={{ fontStyle: 'italic', color: '#c9a84c', fontWeight: 300 }}>Paravur Backwaters</em>
            </h2>
            <p className="act-description">{activity.description}</p>

            <p className="act-highlights-title">What's Included</p>
            {activity.highlights.map((h, i) => (
              <div key={i} className="act-highlight-item">
                <div className="act-highlight-dot" />
                <span>{h}</span>
              </div>
            ))}

            {/* Safety note */}
            <div style={{
              marginTop: 40,
              padding: '20px 24px',
              background: 'rgba(13,36,21,0.04)',
              border: '1px solid rgba(13,36,21,0.08)',
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
            }}>
              <Shield size={18} color="#0d2415" style={{ marginTop: 2, flexShrink: 0, opacity: 0.6 }} />
              <div>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#0d2415',
                  marginBottom: 6,
                }}>Safety First</div>
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  color: '#666',
                  lineHeight: 1.7,
                }}>
                  All activities are conducted with trained guides and full safety equipment. Life jackets are provided for all water activities. We prioritise your safety above all else.
                </p>
              </div>
            </div>

            {/* How to Reach Box */}
            <div
              style={{
                marginTop: 24,
                padding: '24px',
                background: '#fff',
                border: '1px solid rgba(201,168,76,0.3)',
                fontFamily: "'Jost', sans-serif",
              }}
            >
              <div style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: 10,
              }}>
                📍 How to Reach Our Launch Ramp
              </div>
              <div style={{ fontSize: '0.82rem', color: '#555', lineHeight: 1.8, fontWeight: 300 }}>
                <p>📍 <strong>Location:</strong> Nedungolam, Paravur Lake — 20 min from Varkala Cliff</p>
                <p>🚗 <strong>From Varkala Railway Station:</strong> 18 min</p>
                <p>🚗 <strong>From Kollam:</strong> 35 min</p>
                <p>🚗 <strong>From Trivandrum Airport:</strong> 75 min</p>
                <p>🅿️ <strong>Free parking available</strong></p>
                <p>📱 <strong>Book:</strong> WhatsApp +91 97442 01662</p>
              </div>
            </div>
          </div>

          {/* Right column — booking card */}
          <div>
            <div className="act-book-card">
              <p className="act-book-price-label">Starting from</p>
              <div className="act-book-price">{activity.price}</div>
              <p className="act-book-price-note">{activity.priceNote}</p>

              <div className="act-divider" />

              <a
                href={`https://wa.me/${wa_number}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="act-wa-btn"
                id={`whatsapp-book-${slug}`}
              >
                <MessageCircle size={16} />
                Book on WhatsApp
              </a>

              <a
                href="tel:+91-9744201662"
                className="act-call-btn"
                id={`call-book-${slug}`}
              >
                <Phone size={14} />
                Call to Book
              </a>

              <div className="act-trust-row">
                <div className="act-trust-item">
                  <Shield size={11} />
                  Safe & Guided
                </div>
                <div style={{ width: 1, height: 14, background: '#ddd' }} />
                <div className="act-trust-item">
                  <Star size={11} fill="#c9a84c" color="#c9a84c" />
                  500+ Reviews
                </div>
                <div style={{ width: 1, height: 14, background: '#ddd' }} />
                <div className="act-trust-item">
                  Open Daily
                </div>
              </div>

              <div className="act-divider" />

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={14} color="#c9a84c" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#0d2415',
                    marginBottom: 4,
                  }}>Location</div>
                  <div style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 300,
                    color: '#666',
                    lineHeight: 1.6,
                  }}>
                    Paravur Lake, Varkala<br />
                    Kerala – 691334, India<br />
                    <em style={{ color: '#999', fontSize: '0.72rem' }}>20 min from Varkala Cliff</em>
                  </div>
                </div>
              </div>
            </div>

            {/* Other activities */}
            <div style={{ marginTop: 24 }}>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.62rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: 14,
              }}>More Experiences</p>
              {Object.values(activities)
                .filter((a) => a.slug !== slug)
                .slice(0, 4)
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/activities/${a.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(0,0,0,0.06)',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#0d2415',
                    }}>
                      {a.icon} {a.name}
                    </span>
                    <span style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 300,
                      color: '#999',
                    }}>
                      {a.price}
                    </span>
                  </Link>
                ))}
              <Link
                href="/#activities"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  marginTop: 14,
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                  textDecoration: 'none',
                }}
              >
                View All →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Footer CTA ── */}
        <div className="act-location">
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '0.65rem',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: 16,
          }}>
            Mangrove Moments · Paravur Backwaters
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 300,
            color: '#fff',
            marginBottom: 12,
            lineHeight: 1.2,
          }}>
            Ready to experience{' '}
            <em style={{ fontStyle: 'italic', color: '#e8d49a' }}>{activity.name}?</em>
          </h2>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: 32,
          }}>
            Book in seconds via WhatsApp — no forms, no waiting.
          </p>
          <a
            href={`https://wa.me/${wa_number}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#25d366',
              color: '#fff',
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '16px 36px',
              borderRadius: '3px',
              textDecoration: 'none',
              transition: 'background 0.25s',
            }}
          >
            <MessageCircle size={16} />
            Book {activity.name} Now
          </a>
        </div>
      </main>
    </>
  )
}
