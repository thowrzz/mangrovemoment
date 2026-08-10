import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { Users, Shield, Leaf, Clock, ArrowRight, MessageCircle } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'

export const metadata: Metadata = {
  title: 'About Mangrove Moments | Local Eco Adventure Guides Varkala',
  description: 'Meet the local guides behind Mangrove Moments. 4+ years of eco-tourism at Paravur Lake near Varkala. 580+ happy guests. Responsible, safe, community-driven backwater tours.',
  keywords: ['things to do near Varkala', 'mangrove moments guides', 'Varkala eco tourism', 'Kerala backwaters boatclub'],
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  const PRIMARY_WA = '919744201662'

  const values = [
    {
      icon: <Users size={20} color="#c9a84c" />,
      title: '100% Local Naturalist Guides',
      desc: 'Our guides were born and raised in the villages surrounding Paravur Lake. They know every narrow mangrove corridor, bird migration schedule, and local story.'
    },
    {
      icon: <Shield size={20} color="#c9a84c" />,
      title: 'Uncompromising Safety Standards',
      desc: 'We use high-buoyancy, certified life vests for all ages. Every tour is led by safety-certified crew, and standard equipment is checked daily before launch.'
    },
    {
      icon: <Leaf size={20} color="#c9a84c" />,
      title: 'Eco-Responsible Tourism',
      desc: 'We are committed to preserving Paravur Lake. We use non-motorized vessels inside the narrow mangrove channels to avoid soil erosion and protect nested wildlife.'
    }
  ]

  return (
    <>
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
              Our Story
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              About Mangrove Moments — Local Eco Adventure Guides at Paravur Lake
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
              Learn about Mangrove Moments Boatclub — our history, values, and dedication to offering the most authentic eco-tours in Varkala and Paravur.
            </p>
          </div>
        </section>

        {/* Brand Mission & Story */}
        <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'center',
            }}
            className="md-grid-1col"
          >
            {/* Story Text */}
            <div style={{ fontFamily: "'Jost', sans-serif" }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a84c' }}>Founded in Nedungolam</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 600, color: '#0d2415', margin: '8px 0 20px', lineHeight: 1.2 }}>
                Weaving Together Local Community & Eco-Adventure
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.8, fontWeight: 300, marginBottom: '16px' }}>
                Mangrove Moments Boatclub was founded on a simple belief: that the most memorable travel experiences are those guided by the people who call the destination home. Located just 20 minutes from Varkala, the pristine backwaters of Paravur Lake hold some of Kerala's most spectacular, ancient mangrove forest tunnels.
              </p>
              <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.8, fontWeight: 300, marginBottom: '16px' }}>
                Rather than building a high-impact, motorized amusement park, we chose to construct an eco-responsible landing system. By focusing on kayaking, stand-up paddleboarding, and traditional hand-rowed wooden country boats, we provide tourists with silent, non-intrusive access to nesting sites of kingfishers, herons, and egrets.
              </p>
              <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.8, fontWeight: 300 }}>
                Every slot booked directly supports local oarsmen, guides, and host families, keeping tourism revenues within our Nedungolam community.
              </p>
            </div>

            {/* Visual Accent Box */}
            <div
              style={{
                background: '#0d2415',
                padding: '48px',
                position: 'relative',
                overflow: 'hidden',
                color: '#fff',
                fontFamily: "'Jost', sans-serif",
              }}
            >
              <div style={{ position: 'absolute', top: 16, left: 16, width: 28, height: 28, borderTop: '1.5px solid rgba(201,168,76,0.5)', borderLeft: '1.5px solid rgba(201,168,76,0.5)' }} />
              <div style={{ position: 'absolute', bottom: 16, right: 16, width: 28, height: 28, borderBottom: '1.5px solid rgba(201,168,76,0.5)', borderRight: '1.5px solid rgba(201,168,76,0.5)' }} />

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: '#e8d49a', fontWeight: 400, marginBottom: '20px', lineHeight: 1.3 }}>
                Our Conservation Promise
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontWeight: 300, marginBottom: '20px' }}>
                Mangrove forests act as the green lung of coastal Kerala, stabilizing shorelines and providing critical breeding habitats for marine life.
              </p>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontWeight: 300, marginBottom: '20px' }}>
                We actively organize shoreline cleanups and maintain a strict **zero-waste** policy inside the channels. Plastic bottles and non-biodegradable waste are collected and recycled.
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={16} color="#c9a84c" />
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
                  Operating daily since 2022 with zero incident records.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section style={{ background: '#fff', padding: '80px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
                Our Core Values
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: 300,
                  color: '#0d2415',
                }}
              >
                The Foundations of Our Boatclub
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
              }}
            >
              {values.map((val, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#f7f5f0',
                    border: '1px solid rgba(0,0,0,0.05)',
                    padding: '36px 28px',
                    fontFamily: "'Jost', sans-serif",
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(201,168,76,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    {val.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#0d2415',
                      marginBottom: '12px',
                    }}
                  >
                    {val.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: '#666',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0d2415 0%, #1a3c2e 100%)',
            padding: '64px 24px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: "'Jost', sans-serif" }}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '2rem',
                fontWeight: 300,
                color: '#fff',
                marginBottom: '12px',
              }}
            >
              Experience Paravur with Locals
            </h3>
            <p
              style={{
                fontSize: '0.88rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '32px',
                lineHeight: 1.6,
              }}
            >
              Get in touch to check slot timings, request hotel pickup, or ask for custom family package quotes.
            </p>
            <a
              href={`https://wa.me/${PRIMARY_WA}?text=Hi!%20I'd%20like%20to%20learn%20more%20about%20your%20guided%20backwater%20tours.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25d366',
                color: '#fff',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '14px 36px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                borderRadius: '2px',
              }}
            >
              <MessageCircle size={15} />
              Book on WhatsApp
              <ArrowRight size={13} color="#fff" />
            </a>
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
