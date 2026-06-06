import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { Clock, Users, MessageCircle, MapPin, Shield, Star, Sun, Info, CheckCircle } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'

export const metadata: Metadata = {
  title: 'Stand Up Paddle Varkala | Paravur Lake Paddle Boarding',
  description: 'Try Stand Up Paddle boarding (SUP) on the calm, flat waters of Paravur Lake near Varkala. ₹1,000/person, beginner lessons & premium gear included.',
  keywords: ['stand up paddle Varkala', 'Paravur Lake paddle boarding', 'SUP Varkala', 'paddle boarding near Varkala', 'water sports in Varkala'],
  alternates: {
    canonical: '/activities/stand-up-paddle',
  },
}

export default function StandUpPaddlePage() {
  const PRIMARY_WA = '919744201662'
  const waMessage = encodeURIComponent(
    `Hi! I'd like to book a *Varkala Stand Up Paddle (SUP)* experience. Please share availability and slot details.`
  )

  const supFaqs = [
    {
      q: 'Do I need prior paddleboarding experience?',
      a: 'No experience is required. The lake\'s glassy surface makes it one of the absolute best places in Kerala to learn. Our guides provide a 15-minute shore lesson, and most beginners are standing and paddling within 20 minutes.'
    },
    {
      q: 'What equipment do you provide?',
      a: 'We provide high-stability stand-up paddleboards, adjustable lightweight paddles, safety ankle leashes, and certified high-buoyancy life vests.'
    },
    {
      q: 'Do I need to know swimming for SUP?',
      a: 'While knowing swimming is helpful for confidence, it is not strictly necessary as you are securely attached to the floating board by an ankle leash and wear a mandatory life jacket that keeps you fully buoyant.'
    }
  ]

  const supReviews = [
    {
      name: 'David Miller',
      text: 'First time trying SUP. The lake was completely mirror-flat and the guide stayed with me until I found my balance. Highly satisfying core workout in a stunning setting.',
      rating: 5
    },
    {
      name: 'Anjali Menon',
      text: 'Sunrise paddle boarding was magical. Standing on the water with the morning mist and coconut groves in the distance was peaceful. Best thing to do near Varkala!',
      rating: 5
    }
  ]

  const supSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/activities/stand-up-paddle#service`,
    'name': 'Stand Up Paddle boarding',
    'description': 'Guided stand-up paddleboarding (SUP) lessons and tours on Paravur Lake near Varkala, Kerala.',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Mangrove Moments Boatclub'
    },
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'INR',
      'price': '1000',
      'availability': 'https://schema.org/InStock'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(supSchema) }}
      />
      <main className="min-h-screen bg-[#f7f5f0]">
        <Navbar />

        {/* Hero Banner */}
        <section style={{ position: 'relative', height: '65vh', minHeight: '440px', overflow: 'hidden', background: '#0d2415' }}>
          <Image
            src="/standup.png"
            alt="Stand Up Paddle boarding SUP at Paravur Lake Varkala Kerala"
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
              Water Sport
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
              Stand Up Paddle Varkala
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
              Find your balance on the glassy, mirror-like waters of Paravur Lake. Guided paddleboarding (SUP) lessons for beginners, just 20 minutes from Varkala.
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
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e8d49a' }}>Sunrise (Flat Water)</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Shield size={16} color="#c9a84c" />
              <div>
                <div style={{ fontSize: '0.58rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Instruction</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e8d49a' }}>Lessons Included</div>
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
                  What Stand Up Paddle boarding is Like
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
                  Stand-up paddleboarding (SUP) on the calm, flat expanse of Paravur Lake is an active meditation. Your experience begins on the shore with our certified instructors, who will teach you correct paddle placement, self-rescue techniques, and how to stand up with balance.
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
                  Once on the water, you will start on your knees, finding your balance on the wide, stable board. Within minutes, you will rise to your feet, paddling smoothly across the glassy lake surface. Enjoy panoramic views of the Western Ghats in the distance, and the green coconut groves reflecting in the quiet water.
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
                    'Premium high-stability SUP board',
                    'Adjustable lightweight paddle',
                    'Safety ankle leash',
                    'Certified life vest (PFD)',
                    '15-minute shore lesson',
                    'Accompanying safety guide'
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
                  SUP Safety & Prerequisites
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, fontWeight: 300 }}>
                  We prioritize safety with mandatory ankle leashes that keep you connected to your board at all times. Guests must wear flotation vests. We monitor wind speeds constantly, rescheduling or pausing sessions if wind speeds exceed 15 km/h to maintain flat water conditions.
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
                  {supReviews.map((rev, i) => (
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
                  Paddle boarding FAQs
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {supFaqs.map((faq, i) => (
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
                  ₹1,000
                </div>
                <span style={{ fontSize: '0.72rem', color: '#888', display: 'block', marginBottom: '20px' }}>Per Person · gear & lesson included</span>

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
                  id="sup-book-wa"
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
                    <span>Includes 15-min shore lesson</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', color: '#666' }}>
                    <CheckCircle size={12} color="#c9a84c" />
                    <span>Flat water, mirror-flat lake surface</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', color: '#666' }}>
                    <CheckCircle size={12} color="#c9a84c" />
                    <span>Ankle safety leash & life vest included</span>
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
