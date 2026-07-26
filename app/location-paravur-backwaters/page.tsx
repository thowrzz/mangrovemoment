import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { MapPin, Clock, Compass, Navigation, Car, AlertTriangle, Calendar } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'

export const metadata: Metadata = {
  title: 'Paravur Backwaters near Varkala | Directions & Driving Map',
  description: 'How to reach Paravur Backwaters from Varkala Cliff (20 mins). Route details, driving directions, landmarks, parking, and best times to visit for mangrove kayaking.',
  keywords: ['Paravur Backwaters near Varkala', 'mangrove kayaking near Varkala', 'how to reach Paravur Lake', 'Varkala to Paravur distance', 'Varkala activities map'],
  alternates: {
    canonical: '/location-paravur-backwaters',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${siteUrl}/location-paravur-backwaters`,
    title: 'Paravur Backwaters near Varkala | Directions & Driving Map',
    description: 'Find detailed driving routes, travel times, landmarks, and parking info for Mangrove Moments Boatclub, located just 20 minutes from Varkala Cliff.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Mangrove Moments Paravur Backwaters Location Map' }],
  },
}

export default function LocationPage() {
  const PRIMARY_WA = '919744201662'

  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${siteUrl}/location-paravur-backwaters#place`,
    'name': 'Paravur Backwaters — Mangrove Moments',
    'description': 'Pristine backwater lake and mangrove forest channels situated 20 minutes north of Varkala, Kerala.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Nedungolam, Paravur Lake',
      'addressLocality': 'Paravur',
      'addressRegion': 'Kerala',
      'postalCode': '691334',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '9.0200',
      'longitude': '76.6200'
    },
    'hasMap': 'https://maps.google.com/?q=Paravur+Lake+Kerala'
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
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
            position: 'relative',
            color: '#fff',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: '16px',
              }}
            >
              Getting Here
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              Paravur Backwaters <br />
              <span style={{ fontStyle: 'italic', color: '#e8d49a' }}>near Varkala</span>
            </h1>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '1rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              We are located at Nedungolam, Paravur, Kerala — a scenic, traffic-free 20-minute drive north of Varkala Cliff.
            </p>
          </div>
        </section>

        {/* Map & Address Block */}
        <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '48px',
              alignItems: 'start',
            }}
            className="md-grid-1col"
          >
            {/* Map Frame */}
            <div>
              <div
                style={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  background: '#fff',
                  padding: '12px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.05)',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.3683973963884!2d76.68554047477834!3d8.845251391208922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e5000fd6b065%3A0x84b42186dc6f8f27!2sMangrove%20Moments%20Boatclub%20%E2%80%93%20Varkala%20Mangrove%20Kayaking!5e0!3m2!1sen!2sin!4v1780774002099!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0, filter: 'saturate(0.9) contrast(1.02)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Paravur Lake, Varkala"
                />
              </div>
            </div>

            {/* Address & Fast Info */}
            <div style={{ fontFamily: "'Jost', sans-serif" }}>
              <div style={{ marginBottom: '32px' }}>
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#c9a84c',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Exact Address
                </span>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: '#0d2415',
                    marginBottom: '14px',
                    lineHeight: 1.2,
                  }}
                >
                  Mangrove Moments Boatclub
                </h2>
                <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.6, fontWeight: 300 }}>
                  Nedungolam PO, Paravur,<br />
                  Kollam, Kerala — 691334, India
                </p>
                <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
                  <a
                    href="https://maps.google.com/?q=Paravur+Lake+Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#0d2415',
                      color: '#fff',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '12px 24px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      borderRadius: '2px',
                    }}
                  >
                    <Navigation size={13} color="#c9a84c" />
                    Open in Google Maps
                  </a>
                  <a
                    href={`https://wa.me/${PRIMARY_WA}?text=Hi!%20I'm%20on%20my%20way%20to%20Mangrove%20Moments.%20Please%20share%20location%20pin.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      border: '1px solid rgba(13,36,21,0.2)',
                      color: '#0d2415',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '12px 24px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      borderRadius: '2px',
                    }}
                  >
                    Share Live Pin
                  </a>
                </div>
              </div>

              {/* Fast stats */}
              <div
                style={{
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  paddingTop: '24px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '24px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '8px' }}>
                    <Clock size={16} color="#c9a84c" />
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}>Open Hours</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#444', fontWeight: 400 }}>5:30 AM – 6:00 PM</p>
                  <span style={{ fontSize: '0.72rem', color: '#999', fontWeight: 300 }}>Open daily (including Sundays)</span>
                </div>

                <div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '8px' }}>
                    <Car size={16} color="#c9a84c" />
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}>Parking</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#444', fontWeight: 400 }}>Free On-Site Parking</p>
                  <span style={{ fontSize: '0.72rem', color: '#999', fontWeight: 300 }}>Capacity for 15+ cars & coaches</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Times Section */}
        <section style={{ background: '#fff', padding: '80px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.68rem',
                  fontWeight: 500,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                  marginBottom: '12px',
                }}
              >
                Travel Times & Routes
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: 300,
                  color: '#0d2415',
                }}
              >
                How to Reach Us from Surrounding Areas
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                {
                  from: 'Varkala Cliff',
                  time: '20 Mins',
                  dist: '9.2 km',
                  route: 'Via Temple Road & Coastal Road. Cross the Paravur Lake bridge and take an immediate right towards Nedungolam.',
                  best: 'Scooter or Taxi auto'
                },
                {
                  from: 'Varkala Beach',
                  time: '18 Mins',
                  dist: '8.5 km',
                  route: 'Via Coastal Beach Road heading north. Easy drive with stunning sea views along the way.',
                  best: 'Scooter or Taxi'
                },
                {
                  from: 'Kollam Town',
                  time: '30 Mins',
                  dist: '18 km',
                  route: 'Head south via National Highway 66 (NH66) until Chathannoor, then turn right towards Nedungolam.',
                  best: 'Local bus or Taxi'
                },
                {
                  from: 'Trivandrum Airport',
                  time: '60 Mins',
                  dist: '50 km',
                  route: 'Head north on the NH66 bypass road. Scenic drive past backwater inlets and rural bridges.',
                  best: 'Prepaid airport taxi'
                }
              ].map((route, i) => (
                <div
                  key={i}
                  style={{
                    background: '#f7f5f0',
                    border: '1px solid rgba(0,0,0,0.05)',
                    padding: '28px 24px',
                    fontFamily: "'Jost', sans-serif",
                  }}
                >
                  <span style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c9a84c' }}>Route From</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 700, color: '#0d2415', margin: '4px 0 12px' }}>{route.from}</h3>
                  <div style={{ display: 'flex', gap: 12, marginBottom: '14px' }}>
                    <div style={{ background: '#0d2415', color: '#e8d49a', fontSize: '0.72rem', fontWeight: 600, padding: '2px 8px', borderRadius: '1px' }}>
                      {route.time}
                    </div>
                    <div style={{ border: '1px solid rgba(13,36,21,0.2)', color: '#0d2415', fontSize: '0.72rem', fontWeight: 500, padding: '2px 8px', borderRadius: '1px' }}>
                      {route.dist}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.6, fontWeight: 300, marginBottom: '14px' }}>
                    {route.route}
                  </p>
                  <div style={{ borderTop: '1px dashed rgba(0,0,0,0.1)', paddingTop: '12px', fontSize: '0.75rem', color: '#888' }}>
                    <strong>Best transport:</strong> {route.best}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Information & Landmarks */}
        <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto', fontFamily: "'Jost', sans-serif" }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
            }}
            className="md-grid-1col"
          >
            {/* Left: Landmarks */}
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: '#0d2415', marginBottom: '20px', fontWeight: 600 }}>
                Nearby Landmarks & Finding Us
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', padding: 0 }}>
                {[
                  { title: 'Nedungolam Government Hospital', desc: 'We are situated just 400 meters south of the Nedungolam hospital building.' },
                  { title: 'Paravur Lake Bridge', desc: 'Our launch station sits immediately adjacent to the northern shore of the lake bridge.' },
                  { title: 'Nedungolam Post Office', desc: 'Located 1 km from our facility, the post office marks the main entry junction.' }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#c9a84c', marginTop: 8, flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0d2415', marginBottom: 2 }}>{item.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: '#666', fontWeight: 300, lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Helpful Tips */}
            <div
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.15)',
                padding: '32px',
              }}
            >
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '14px' }}>
                <Compass size={18} color="#c9a84c" />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#0d2415', fontWeight: 600, margin: 0 }}>
                  Travel Tips & Best Times
                </h3>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6, fontWeight: 300, marginBottom: '14px' }}>
                For the best mangrove experience, we recommend arriving **before 6:00 AM** for sunrise slots. The morning air is misty and cool, and bird watching is at its peak.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6, fontWeight: 300, marginBottom: '14px' }}>
                Sunset slots (**4:30 PM**) are equally beautiful and cooler. During midday hours, we recommend wearing sun protection hats and sunglasses.
              </p>
              <div
                style={{
                  background: '#fff',
                  borderLeft: '3px solid #c9a84c',
                  padding: '12px 16px',
                  fontSize: '0.78rem',
                  color: '#444',
                  fontWeight: 300,
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                }}
              >
                <AlertTriangle size={14} color="#c9a84c" style={{ marginTop: 2, flexShrink: 0 }} />
                <span>
                  <strong>Driver Note:</strong> Some navigation maps may suggest rural paths. Always keep to the main coastal road or NH66 bypass for the smoothest tarmac.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Local 1-Day Itinerary */}
        <section style={{ background: '#fff', padding: '80px 24px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: "'Jost', sans-serif" }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                <Calendar size={18} color="#c9a84c" />
                <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c' }}>Make a day of it</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 600, color: '#0d2415' }}>
                Recommended 1-Day Backwater & Varkala Itinerary
              </h2>
            </div>

            <div style={{ position: 'relative', paddingLeft: '28px', borderLeft: '1px solid rgba(201,168,76,0.3)' }}>
              {[
                { time: '5:30 AM – 8:00 AM', title: 'Sunrise Mangrove Kayaking', desc: 'Arrive early at Mangrove Moments for the sunrise slot. Glide through narrow channels under the hanging root tunnels, spotting local kingfishers.' },
                { time: '8:30 AM – 9:30 AM', title: 'Traditional Local Breakfast', desc: 'Enjoy authentic Kerala breakfast (Puttu and Kadala curry or Appam) at a local homestay or nearby cafe in Paravur.' },
                { time: '10:00 AM – 2:00 PM', title: 'Explore Kappil Beach & Bridge', desc: 'Drive 10 minutes south to Kappil Beach, where the sea and backwaters run side-by-side separated only by the road. Great for photography.' },
                { time: '4:00 PM onwards', title: 'Sunset at Varkala Cliff', desc: 'Head back to Varkala Cliff to enjoy seaside restaurants, shopping, and catch a spectacular sunset over the Arabian Sea.' }
              ].map((item, idx) => (
                <div key={idx} style={{ marginBottom: '28px', position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: -34,
                      top: 4,
                      width: 11,
                      height: 11,
                      borderRadius: '50%',
                      background: '#c9a84c',
                      border: '2px solid #fff',
                    }}
                  />
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#c9a84c', letterSpacing: '0.05em' }}>{item.time}</span>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 700, color: '#0d2415', margin: '2px 0 6px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.5, fontWeight: 300 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <FloatingButtons />
      </main>

      <style>{`
        @media (max-width: 900px) {
          .md-grid-1col {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </>
  )
}
