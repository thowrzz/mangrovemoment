import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { Clock, Users, MessageCircle, MapPin, Shield, Star, Sun, Info, CheckCircle } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'

export const metadata: Metadata = {
  title: 'Varkala Mangrove Kayaking | Paravur Backwaters Tour',
  description: 'Bookguided mangrove kayaking in Varkala and Paravur Backwaters. ₹700/person, 2 hours, no swimming required. Guided sunrise & sunset tours daily.',
  keywords: ['Varkala mangrove kayaking', 'Paravur backwaters kayaking', 'mangrove kayaking near Varkala', 'guided kayaking Kerala backwaters', 'things to do in Varkala'],
  alternates: {
    canonical: '/activities/kayaking',
  },
}

export default function KayakingPage() {
  const PRIMARY_WA = '919744201662'
  const waMessage = encodeURIComponent(
    `Hi! I'd like to book a *Varkala Mangrove Kayaking* experience. Please share availability and slot details.`
  )

  const kayakingFaqs = [
    {
      q: 'Do I need to know how to swim for kayaking?',
      a: 'No, swimming skills are not required. We provide high-buoyancy certified life vests for all guests, and wearing them is mandatory throughout the tour. Our guides stay right next to you on the water.'
    },
    {
      q: 'Is it safe for absolute beginners?',
      a: 'Yes, 95% of our guests are first-timers. The water inside the mangrove channels is shallow, flat, and completely calm with no tides or waves, making paddling extremely easy.'
    },
    {
      q: 'What is the best time for kayaking?',
      a: 'Sunrise (5:30 AM) is the most recommended slot because the water is mirror-flat, temperatures are cool, and birds are active. Sunset (4:30 PM) is another excellent slot offering golden hour photography.'
    }
  ]

  const kayakingReviews = [
    {
      name: 'Priya Sharma',
      text: 'The sunrise kayaking through the mangrove tunnels was an absolute dream. The silence, the reflections on flat water, and the guides made it so beautiful. Highlight of Varkala!',
      rating: 5
    },
    {
      name: 'David Miller',
      text: 'I do not swim, but the guide was so encouraging and the equipment was top-notch. Gliding under the mangrove roots was stunning. Highly recommend this local operator.',
      rating: 5
    }
  ]

  const kayakingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/activities/kayaking#service`,
    'name': 'Varkala Mangrove Kayaking',
    'description': 'Guided eco-kayaking tour through narrow mangrove channels of Paravur Backwaters near Varkala, Kerala.',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Mangrove Moments Boatclub'
    },
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'INR',
      'price': '700',
      'availability': 'https://schema.org/InStock'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kayakingSchema) }}
      />
      <main className="min-h-screen bg-[#f7f5f0]">
        <Navbar />

        {/* Hero Banner */}
        <section style={{ position: 'relative', height: '65vh', minHeight: '440px', overflow: 'hidden', background: '#0d2415' }}>
          <Image
            src="/Kayaking.png"
            alt="Guided Varkala Mangrove Kayaking at Paravur Backwaters Kerala"
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
              Eco-Adventure
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
              Varkala Mangrove Kayaking
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
              Paddle silently through narrow mangrove tunnels in Paravur Backwaters — Kerala's most immersive water experience, just 20 minutes from Varkala Cliff.
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
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e8d49a' }}>2 Hours</div>
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
                <div style={{ fontSize: '0.58rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Difficulty</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e8d49a' }}>Beginner Friendly</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <MapPin size={16} color="#c9a84c" />
              <div>
                <div style={{ fontSize: '0.58rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Location</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e8d49a' }}>Paravur Backwaters</div>
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
                  The Adventure
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
                  What the Experience is Like
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
                  Your kayaking adventure starts at our private launch ramp at Paravur Lake. After a brief safety orientation and paddling lesson, you will slide into the water. Accompanied by a local guide, you will paddle across flat, glassy lake waters before entering the narrow mangrove forest canals.
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
                  Here, branches wrap overhead to form a natural green canopy. You will navigate tight bends, gliding silently between giant mangrove root walls that motorized boats cannot access. Look out for nesting herons, kingfishers diving for small fish, and the local fishermen cast-netting in the channels.
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
                    'Premium single or double kayak',
                    'Lightweight sport paddle',
                    'Certified high-buoyancy life vest',
                    'Trained local naturalist guide',
                    'Waterproof drybag for phone/keys',
                    'On-site changing room access'
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
                  Safety Protocol & Fit
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, fontWeight: 300 }}>
                  Safety is our number one priority. Our double and single sit-on-top kayaks are designed for extreme stability, making it practically impossible to tip over under normal backwater conditions. Wearing life jackets is mandatory for all guests (including children). A guide leads every session and holds emergency towing lines.
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
                  Review Highlights
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {kayakingReviews.map((rev, i) => (
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
                  Activity FAQs
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {kayakingFaqs.map((faq, i) => (
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
                  ₹700
                </div>
                <span style={{ fontSize: '0.72rem', color: '#888', display: 'block', marginBottom: '20px' }}>Per Person · guided tour</span>

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
                  id="kayak-book-wa"
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
                    <span>Double & single sit-on-top stable kayaks</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', color: '#666' }}>
                    <CheckCircle size={12} color="#c9a84c" />
                    <span>Safe guided mangrove channel access</span>
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
