import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { MapPin, Clock, Star, MessageCircle, ArrowRight, Shield, CheckCircle, Calendar, ChevronRight } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'
const PRIMARY_WA = '919744201662'

export const metadata: Metadata = {
  title: 'Things to Do in Varkala 2026 | Top Activities Beyond the Cliff',
  description: 'Discover the best things to do in Varkala beyond the beach. Mangrove kayaking, backwater boat rides, water sports & more at Paravur Lake — 20 min from Varkala Cliff. Local guide.',
  keywords: [
    'things to do in Varkala',
    'Varkala activities',
    'what to do in Varkala',
    'mangrove kayaking Varkala',
    'Paravur backwaters',
    'Varkala itinerary',
    'Varkala places to visit',
    'country boat ride Varkala',
    'Kappil beach Varkala'
  ],
  alternates: {
    canonical: '/things-to-do-in-varkala',
  },
  openGraph: {
    type: 'article',
    locale: 'en_IN',
    url: `${siteUrl}/things-to-do-in-varkala`,
    title: 'Things to Do in Varkala 2026 | Top Activities Beyond the Cliff',
    description: 'Discover the best things to do in Varkala beyond the beach. Mangrove kayaking, backwater boat rides, water sports & more at Paravur Lake — 20 min from Varkala Cliff.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Things to do in Varkala — Paravur Mangrove Kayaking' }],
  },
}

export default function ThingsToDoVarkalaPage() {
  const waMessage = encodeURIComponent(
    `Hi! I'm planning a trip to Varkala and would like to book a backwater experience at Mangrove Moments.`
  )

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': "Things to Do in Varkala: A Local's Guide to Activities Beyond the Cliff",
    'description': 'Comprehensive 2026 travel guide to top activities in Varkala, featuring mangrove kayaking, country boating, beach highlights, and 3-day itinerary.',
    'url': `${siteUrl}/things-to-do-in-varkala`,
    'image': `${siteUrl}/Kayaking.png`,
    'author': {
      '@type': 'Organization',
      'name': 'Mangrove Moments',
      'url': siteUrl
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Mangrove Moments',
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteUrl}/logo.png`
      }
    },
    'datePublished': '2026-08-10',
    'dateModified': '2026-08-10'
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What are the top things to do in Varkala beyond the cliff?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The top activities beyond Varkala Cliff include guided mangrove kayaking at Paravur Lake (20 min away), traditional country boat rides, stand-up paddleboarding, visiting Janardanaswamy Temple, exploring Kappil Beach road, and surfing at Black Sand Beach.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How many days are needed to explore Varkala?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A 3-day itinerary is ideal for Varkala. Day 1: Varkala Cliff, cafes, and sunset. Day 2: Early morning sunrise mangrove kayaking at Paravur Lake, followed by Kappil Beach. Day 3: Cultural sights, temples, and surfing.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do I need to know how to swim for mangrove kayaking in Varkala?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Certified high-buoyancy life vests are mandatory and provided for all guests. The waters inside the Paravur mangrove channels are calm, flat, and shallow with no currents or waves.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How far is Paravur Lake from Varkala Cliff?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Paravur Lake is located 9.2 km north of Varkala Cliff, which takes approximately 20 minutes by scooter, auto, or taxi. Free parking and pickup services are available.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-[#f7f5f0]">
        <Navbar />

        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0d2415 0%, #06160d 100%)',
            paddingTop: '160px',
            paddingBottom: '80px',
            textAlign: 'center',
            color: '#fff',
            position: 'relative',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: '16px',
                display: 'inline-block',
              }}
            >
              Ultimate Kerala Travel Guide 2026
            </span>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                fontWeight: 300,
                lineHeight: 1.12,
                marginBottom: '20px',
              }}
            >
              Things to Do in Varkala: A Local's Guide to Activities Beyond the Cliff
            </h1>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '1.05rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                maxWidth: '720px',
                margin: '0 auto',
              }}
            >
              Varkala is world-famous for its red sandstone cliffs overlooking the Arabian Sea, but Kerala's true hidden magical eco-adventures lie just 20 minutes away in the calm mangrove canals of Paravur Lake.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article style={{ padding: '80px 24px', maxWidth: '1000px', margin: '0 auto', fontFamily: "'Jost', sans-serif", color: '#444' }}>
          
          {/* Intro Section */}
          <div style={{ marginBottom: '48px', lineHeight: 1.85, fontSize: '0.98rem', fontWeight: 300 }}>
            <p style={{ marginBottom: '20px' }}>
              While most travelers visit Varkala to relax on Papanasam Beach, sip fresh juices at cliffside cafes, and watch dramatic ocean sunsets, there is a whole world of lush nature waiting just beyond the main tourist strip. Tucked away just 9.2 kilometers north of Varkala Cliff lies <strong>Paravur Backwaters</strong> — an untouched estuarine network where dense mangrove forests meet peaceful mirror-flat lakes.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Whether you are looking for peaceful sunrise birdwatching, thrilling high-speed water sports, traditional Kerala culture, or serene backwater paddling, this comprehensive guide covers the top things to do in Varkala in 2026.
            </p>
          </div>

          <div style={{ height: '1px', background: 'rgba(0,0,0,0.08)', margin: '40px 0' }} />

          {/* Activity 1: Mangrove Kayaking */}
          <section style={{ marginBottom: '56px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', display: 'block', marginBottom: '8px' }}>
              #1 Must-Do Activity
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 600, color: '#0d2415', marginBottom: '16px' }}>
              1. Guided Mangrove Kayaking at Paravur Lake
            </h2>
            <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '4px', overflow: 'hidden', marginBottom: '24px' }}>
              <Image
                src="/Kayaking.png"
                alt="Guided Mangrove Kayaking at Paravur Lake near Varkala Cliff"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p style={{ lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300, marginBottom: '16px' }}>
              If you do only one activity outside Varkala Town, make it <strong>mangrove kayaking at Paravur Backwaters</strong>. Gliding quietly through narrow, canopy-covered mangrove channels is an unforgettable experience. As you maneuver your sit-on-top kayak underneath low-hanging stilt roots, you will feel completely immersed in pristine Kerala nature.
            </p>
            <p style={{ lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300, marginBottom: '20px' }}>
              Our expert local naturalist guides lead every trip, ensuring safety while pointing out native flora, blue kingfishers, egrets, and mudskippers. <strong>No prior kayaking experience or swimming skills are required</strong>, as the mangrove channels are shallow and sheltered from wind or waves.
            </p>
            <div style={{ background: '#0d2415', color: '#fff', padding: '24px', borderRadius: '3px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: '#e8d49a', fontWeight: 600 }}>
                  Mangrove Kayaking — ₹700 / person
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontWeight: 300, marginTop: '2px' }}>
                  2 Hours · Certified Life Jackets · Naturalist Guide Included
                </div>
              </div>
              <Link
                href="/activities/kayaking"
                style={{
                  background: 'linear-gradient(135deg,#c9a84c 0%,#e8c97a 50%,#c9a84c 100%)',
                  color: '#0d2415',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '12px 24px',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                View Kayaking Details <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* Activity 2: Country Boating */}
          <section style={{ marginBottom: '56px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', display: 'block', marginBottom: '8px' }}>
              Traditional Kerala Experience
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 600, color: '#0d2415', marginBottom: '16px' }}>
              2. Traditional Country Boat Ride
            </h2>
            <p style={{ lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300, marginBottom: '16px' }}>
              For families, couples, elderly travelers, or anyone wanting a relaxed, effortless ride, a traditional wooden <strong>country boat tour</strong> is ideal. Accommodating up to 6 guests, these wooden vessels are rowed by experienced boatmen through wide lake stretches and secluded backwater inlets.
            </p>
            <p style={{ lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300, marginBottom: '20px' }}>
              It offers unmatched opportunities for landscape photography and birdwatching, particularly during early morning sunrise slots (5:30 AM) when mist rises from the water surface.
            </p>
            <Link
              href="/activities/country-boating"
              style={{ color: '#c9a84c', fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              Explore Country Boating →
            </Link>
          </section>

          {/* Activity 3: Stand Up Paddleboarding */}
          <section style={{ marginBottom: '56px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', display: 'block', marginBottom: '8px' }}>
              Balance & Mindfulness
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 600, color: '#0d2415', marginBottom: '16px' }}>
              3. Stand Up Paddleboarding (SUP)
            </h2>
            <p style={{ lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300, marginBottom: '16px' }}>
              If you want a core workout combined with serene water views, try <strong>stand-up paddleboarding (SUP)</strong> on glassy Paravur Lake. Because backwater channels are completely protected from ocean waves, beginners easily learn to balance on the wide SUP boards within 10 minutes.
            </p>
            <Link
              href="/activities/stand-up-paddle"
              style={{ color: '#c9a84c', fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              Explore SUP Details →
            </Link>
          </section>

          {/* Activity 4: Coracle Ride */}
          <section style={{ marginBottom: '56px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', display: 'block', marginBottom: '8px' }}>
              Heritage Craft
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 600, color: '#0d2415', marginBottom: '16px' }}>
              4. Authentic Coracle Ride
            </h2>
            <p style={{ lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300, marginBottom: '16px' }}>
              Step into a centuries-old round basket boat known as a <strong>Coracle</strong>. Used historically across South India for fishing, these circular boats gently spin and drift on the water, navigated by skilled oarsmen. It is an enjoyable, photogenic experience that kids and adults love.
            </p>
            <Link
              href="/activities/coracle-ride"
              style={{ color: '#c9a84c', fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              Explore Coracle Rides →
            </Link>
          </section>

          {/* Activity 5: Water Sports */}
          <section style={{ marginBottom: '56px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', display: 'block', marginBottom: '8px' }}>
              Adrenaline & Thrills
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 600, color: '#0d2415', marginBottom: '16px' }}>
              5. Water Sports: Speed Boat, Banana & Bumper Rides
            </h2>
            <p style={{ lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300, marginBottom: '16px' }}>
              For thrill-seekers visiting Varkala, Paravur Lake offers high-octane <strong>speed boat rides, inflatable banana rides, and bumper sofa rides</strong>. Hold on tight as our powerful boats tow your group across the open water at thrilling speeds, surrounded by safety-certified crew.
            </p>
            <Link
              href="/activities/water-sports"
              style={{ color: '#c9a84c', fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              Explore Water Sports Packages →
            </Link>
          </section>

          {/* Additional Highlights */}
          <section style={{ marginBottom: '56px', background: '#fff', border: '1px solid rgba(0,0,0,0.06)', padding: '36px' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 600, color: '#0d2415', marginBottom: '24px' }}>
              Other Highlights Around Varkala
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0d2415', marginBottom: '4px' }}>6. Varkala Cliff & Papanasam Beach</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 300, lineHeight: 1.6 }}>
                  Walk along the red cliff edge lined with global cafes, handicraft shops, and yoga studios. Descend the stairs to Papanasam Beach, believed locally to wash away sins in its holy waters.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0d2415', marginBottom: '4px' }}>7. Janardanaswamy Temple</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 300, lineHeight: 1.6 }}>
                  Visit this 2,000-year-old temple dedicated to Lord Vishnu, located near the beach. Admire traditional Kerala temple architecture and ancient banyan trees.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0d2415', marginBottom: '4px' }}>8. Kappil Lake & Estuary Drive</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 300, lineHeight: 1.6 }}>
                  Drive 5 km north along the coastal road to Kappil Bridge, where the Arabian Sea and backwater lake flow parallel to each other — one of Kerala's most scenic driving routes.
                </p>
              </div>
            </div>
          </section>

          {/* 3-Day Itinerary */}
          <section style={{ marginBottom: '56px', background: '#0d2415', color: '#fff', padding: '40px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', display: 'block', marginBottom: '8px' }}>
              Recommended Itinerary
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 600, color: '#fff', marginBottom: '24px' }}>
              The Perfect 3-Day Varkala Itinerary
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.7 }}>
              <div>
                <strong style={{ color: '#e8d49a' }}>Day 1: Arrival & Cliff Vibes</strong> — Arrive in Varkala, check in to your stay near the Cliff, explore North Cliff shops, and watch sunset from a cliff cafe.
              </div>
              <div>
                <strong style={{ color: '#e8d49a' }}>Day 2: Mangrove Kayaking & Coastal Drive</strong> — Wake up early for the 5:30 AM sunrise kayaking tour at Mangrove Moments (Paravur Lake). Have breakfast nearby, visit Kappil Beach, and try an evening coracle ride.
              </div>
              <div>
                <strong style={{ color: '#e8d49a' }}>Day 3: Culture & Relaxation</strong> — Visit Janardanaswamy Temple, try an Ayurvedic massage, take a surf lesson at Black Sand Beach, and enjoy dinner on the Cliff.
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 600, color: '#0d2415', marginBottom: '24px' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  q: 'What is the best month to visit Varkala?',
                  a: 'October to March is the best season with pleasant weather, cool breezes, and calm waters ideal for kayaking and swimming.'
                },
                {
                  q: 'How do I reach Mangrove Moments from Varkala Cliff?',
                  a: 'It is a quick 20-minute drive (9.2 km) north via scooter, auto, or taxi. We also offer pickup and drop-off services on request.'
                },
                {
                  q: 'Is kayaking safe for kids and non-swimmers?',
                  a: 'Yes! Certified life vests are mandatory and provided for all ages. Our guides accompany every trip in calm, shallow backwater channels.'
                }
              ].map((faq, idx) => (
                <div key={idx} style={{ background: '#fff', padding: '20px', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0d2415', marginBottom: '6px' }}>{faq.q}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#666', fontWeight: 300, lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', padding: '40px 24px', borderRadius: '3px' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 600, color: '#0d2415', marginBottom: '12px' }}>
              Ready to Explore Varkala's Mangroves?
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 300, marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
              Book your sunrise or sunset kayaking slot directly on WhatsApp. Instant confirmation & local support.
            </p>
            <a
              href={`https://wa.me/${PRIMARY_WA}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25d366',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.78rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '16px 36px',
                textDecoration: 'none',
                borderRadius: '2px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <MessageCircle size={16} />
              Book Mangrove Kayaking on WhatsApp
            </a>
          </div>

        </article>

        <Footer />
        <FloatingButtons />
      </main>
    </>
  )
}
