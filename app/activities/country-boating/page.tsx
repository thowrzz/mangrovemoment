import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { Clock, Users, MessageCircle, MapPin, Shield, Star, Sun, Info, CheckCircle } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'

export const metadata: Metadata = {
  title: 'Varkala Backwater Boat Ride | Country Boat Ride Paravur',
  description: 'Relax on a traditional wooden country boat ride through Paravur Backwaters near Varkala. ₹1,700 for 1–2 persons. Scenic, guided tours for families.',
  keywords: ['Varkala backwater boat ride', 'country boat ride Paravur', 'country boat ride Varkala', 'Paravur lake boating tours', 'things to do in Varkala with family'],
  alternates: {
    canonical: '/activities/country-boating',
  },
}

export default function CountryBoatingPage() {
  const PRIMARY_WA = '919744201662'
  const waMessage = encodeURIComponent(
    `Hi! I'd like to book a *Varkala Backwater Country Boat Ride* experience. Please share availability and slot details.`
  )

  const boatingFaqs = [
    {
      q: 'What is a traditional country boat?',
      a: 'It is a hand-crafted wooden vessel paddled by a skilled local oarsman. Unlike noisy motorized speedboats, it glides silently across the water, making it the perfect way to observe the peaceful ecosystem without disturbing the birds.'
    },
    {
      q: 'How many people can fit on the country boat?',
      a: 'Our standard wooden country boats can accommodate up to 6–8 adults comfortably. The base pricing is ₹1,700 for 1–2 passengers, and each extra person is charged at an additional ₹250.'
    },
    {
      q: 'Is this suitable for elderly people and toddlers?',
      a: 'Yes, absolutely. This is a fully passive, slow-paced ride. There is no physical paddling required by the guests. BOARDING is done with care at our low-profile ramp, and life vests are provided for all ages.'
    }
  ]

  const boatingReviews = [
    {
      name: 'Rajesh Kumar',
      text: 'We took my parents and two children on the wooden country boat. It was the most relaxing 75 minutes of our trip. Gliding under the giant mangrove roots was spectacular. Truly local and authentic.',
      rating: 5
    },
    {
      name: 'Shreya Patel',
      text: 'We booked the sunset slot. The golden hour reflections on the lake were breathtaking. Our guide pointed out different birds and told us local stories. A MUST do near Varkala!',
      rating: 5
    }
  ]

  const boatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/activities/country-boating#service`,
    'name': 'Traditional Country Boating Ride',
    'description': 'Slow-paced guided tour on a traditional wooden country boat through Paravur Backwaters near Varkala, Kerala.',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Mangrove Moments Boatclub'
    },
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'INR',
      'price': '1700',
      'availability': 'https://schema.org/InStock'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(boatingSchema) }}
      />
      <main className="min-h-screen bg-[#f7f5f0]">
        <Navbar />

        {/* Hero Banner */}
        <section style={{ position: 'relative', height: '65vh', minHeight: '440px', overflow: 'hidden', background: '#0d2415' }}>
          <Image
            src="/countryboating.webp"
            alt="Traditional wooden country boat tour at Paravur Backwaters Varkala Kerala"
            fill
            priority
            style={{ objectFit: 'cover', opacity: 0.8 }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(8,24,14,0.3) 0%, rgba(8,24,14,0.85) 100%)',
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 3,
              padding: '48px 24px',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.62rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#e8d49a',
                background: 'rgba(201,168,76,0.15)',
                padding: '4px 12px',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '2px',
                display: 'inline-block',
                marginBottom: '16px',
              }}
            >
              Scenic Boating
            </span>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
                fontWeight: 300,
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: '12px',
              }}
            >
              Varkala Backwater Boat Ride
            </h1>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '1.05rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.75)',
                maxWidth: '650px',
              }}
            >
              Step onto a traditional wooden country boat and drift through the silent mangrove channels of Paravur Lake. Ideal for families, couples, and photography.
            </p>
          </div>
        </section>

        {/* Stats Strip */}
        <section style={{ background: '#0d2415', color: '#fff', padding: '16px 24px' }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              fontFamily: "'Jost', sans-serif",
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Clock size={16} color="#c9a84c" />
              <div>
                <div style={{ fontSize: '0.58rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Duration</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e8d49a' }}>1 Hr 15 Mins</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Sun size={16} color="#c9a84c" />
              <div>
                <div style={{ fontSize: '0.58rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Best Time</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e8d49a' }}>Sunrise & Sunset</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Shield size={16} color="#c9a84c" />
              <div>
                <div style={{ fontSize: '0.58rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Safety</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e8d49a' }}>Vests Provided</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <MapPin size={16} color="#c9a84c" />
              <div>
                <div style={{ fontSize: '0.58rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Location</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e8d49a' }}>Paravur Lake</div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Layout */}
        <section style={{ padding: '64px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 340px',
              gap: '48px',
              alignItems: 'start',
            }}
            className="md-grid-1col"
          >
            {/* Left Column: Details */}
            <div>
              {/* What it is like */}
              <div style={{ marginBottom: '40px' }}>
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#c9a84c',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  The Experience
                </span>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: '#0d2415',
                    marginBottom: '16px',
                  }}
                >
                  What the Country Boat Cruise is Like
                </h2>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.92rem',
                    fontWeight: 300,
                    color: '#555',
                    lineHeight: 1.8,
                    marginBottom: '16px',
                  }}
                >
                  Step onto our hand-crafted, traditional wooden country boat, known locally as a "vallam". As our experienced local oarsman gently paddles away from the shore, the sounds of Varkala disappear, replaced by the quiet splash of water and the rustle of palms.
                </p>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.92rem',
                    fontWeight: 300,
                    color: '#555',
                    lineHeight: 1.8,
                    marginBottom: '16px',
                  }}
                >
                  You will glide past small island communities, coconut plantations, and traditional fishing nets. The boat drifts deep into the wider mangrove corridors, offering a comfortable, shaded, and slow-paced look at Kerala's backwater ecology. It is the perfect choice for families traveling with children or seniors, as well as couples seeking a peaceful, romantic cruise.
                </p>
              </div>

              {/* Inclusions */}
              <div style={{ marginBottom: '40px' }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#0d2415',
                    marginBottom: '16px',
                  }}
                >
                  What's Included in the Tour
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                    fontFamily: "'Jost', sans-serif",
                  }}
                >
                  {[
                    'Private wooden country boat',
                    'Experienced local oarsman/guide',
                    'High-buoyancy certified life vests',
                    'Mineral water bottle',
                    'Mangrove ecology orientation',
                    'Scenic photo stops'
                  ].map((inc, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: '0.85rem', color: '#444' }}>
                      <CheckCircle size={14} color="#c9a84c" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety */}
              <div
                style={{
                  background: 'rgba(13,36,21,0.03)',
                  borderLeft: '4px solid #c9a84c',
                  padding: '24px',
                  fontFamily: "'Jost', sans-serif",
                  marginBottom: '40px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#0d2415',
                    marginBottom: '8px',
                  }}
                >
                  Comfort & Safety Info
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, fontWeight: 300 }}>
                  Our wooden country boats are wide and extremely stable, making them highly secure for travelers of all ages. Guests sit on comfortable benches. Life jackets are provided on board and mandatory. Boarding and landing are fully assisted by our ground staff.
                </p>
              </div>

              {/* Reviews Snippets */}
              <div style={{ marginBottom: '40px' }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#0d2415',
                    marginBottom: '16px',
                  }}
                >
                  Guest Review Highlights
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {boatingReviews.map((rev, i) => (
                    <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.05)', padding: '20px' }}>
                      <div style={{ display: 'flex', gap: 3, marginBottom: 8 }}>
                        {Array.from({ length: rev.rating }).map((_, s) => (
                          <Star key={s} size={11} fill="#c9a84c" color="#c9a84c" />
                        ))}
                      </div>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', fontStyle: 'italic', color: '#444', marginBottom: '8px' }}>
                        "{rev.text}"
                      </p>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', color: '#999' }}>— {rev.name}, Verified Guest</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#0d2415',
                    marginBottom: '16px',
                  }}
                >
                  Boating FAQs
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {boatingFaqs.map((faq, i) => (
                    <div key={i}>
                      <h4 style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.88rem', fontWeight: 600, color: '#0d2415', marginBottom: 4 }}>
                        {faq.q}
                      </h4>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.82rem', color: '#666', lineHeight: 1.5, fontWeight: 300 }}>
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar Booking Card */}
            <div>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                  padding: '32px',
                  position: 'sticky',
                  top: '100px',
                  fontFamily: "'Jost', sans-serif",
                }}
              >
                <span style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '4px' }}>Starting Price</span>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.6rem', fontWeight: 600, color: '#0d2415', lineHeight: 1, marginBottom: '4px' }}>
                  ₹1,700
                </div>
                <span style={{ fontSize: '0.72rem', color: '#888', display: 'block', marginBottom: '20px' }}>For 1–2 Persons · +₹250/extra person</span>

                <div style={{ height: '1px', background: 'rgba(0,0,0,0.06)', margin: '16px 0' }} />

                <a
                  href={`https://wa.me/${PRIMARY_WA}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#25d366',
                    color: '#fff',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontSize: '0.78rem',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    textDecoration: 'none',
                    borderRadius: '2px',
                    marginBottom: '10px',
                  }}
                  id="boat-book-wa"
                >
                  <MessageCircle size={15} />
                  Book on WhatsApp
                </a>

                <a
                  href="tel:+919744201662"
                  style={{
                    border: '1px solid rgba(13,36,21,0.2)',
                    color: '#0d2415',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontSize: '0.78rem',
                    padding: '14px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    textDecoration: 'none',
                    borderRadius: '2px',
                  }}
                >
                  Call to Reserve
                </a>

                <div style={{ height: '1px', background: 'rgba(0,0,0,0.06)', margin: '20px 0' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', color: '#666' }}>
                    <CheckCircle size={12} color="#c9a84c" />
                    <span>No swimming skills required</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', color: '#666' }}>
                    <CheckCircle size={12} color="#c9a84c" />
                    <span>Wide, stable wooden boat</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', color: '#666' }}>
                    <CheckCircle size={12} color="#c9a84c" />
                    <span>Ideal for groups and senior travelers</span>
                  </div>
                </div>
              </div>
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
