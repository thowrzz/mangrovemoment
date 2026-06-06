import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { Clock, Users, MessageCircle, MapPin, Shield, Star, Sun, Info, CheckCircle, Zap } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'

export const metadata: Metadata = {
  title: 'Water Sports near Varkala | Paravur Lake Boating & rides',
  description: 'Experience thrilling water sports near Varkala on Paravur Lake. Book speed boat tours, ATV tracks, sofa rides, and banana boats. Best group rates.',
  keywords: ['water sports near Varkala', 'Paravur Lake water sports', 'Varkala speed boat ride', 'banana boat ride Kerala', 'ATV ride Varkala'],
  alternates: {
    canonical: '/activities/water-sports',
  },
}

export default function WaterSportsPage() {
  const PRIMARY_WA = '919744201662'
  const waMessage = encodeURIComponent(
    `Hi! I'd like to book a *Varkala Water Sports / Speedboat / ATV* package. Please share package options and availability.`
  )

  const sports = [
    {
      name: 'Speed Boat Ride',
      price: '₹3,500',
      duration: '30 Mins',
      capacity: '1–5 Persons',
      image: '/boat.png',
      desc: 'Feel the rush as our professional captain opens up the throttle across the open lake. High-speed sweeps, turns, and waves. Priced per boat, offering excellent group value.'
    },
    {
      name: 'ATV Quad Bike',
      price: '₹300',
      duration: '1 Round',
      capacity: '1 Person',
      image: '/avtride.webp',
      desc: 'Tear through mud, sand, and gravel tracks on our shoreline off-road course right next to the water. Safe quad bikes with full safety gear (helmet/guards) and instruction.'
    },
    {
      name: 'Bumper / Sofa Ride',
      price: '₹500',
      duration: '1 Round',
      capacity: 'Per Person',
      image: '/sofa.jpg',
      desc: 'Climb onto our inflatable towable tube sofa. Hold on tight as you are pulled at high speeds, twisting, bouncing, and splashing over wake waves. A group favorite!'
    },
    {
      name: 'Banana Boat Ride',
      price: '₹500',
      duration: '1 Round',
      capacity: 'Min. 2 Persons',
      image: '/banana.jpg',
      desc: 'The classic group challenge. Balance on our yellow inflatable banana boat pulled by a speedboat. Try not to fall into the water when the boat makes sharp sweeps!'
    }
  ]

  const sportsFaqs = [
    {
      q: 'Do you offer combined water sports packages?',
      a: 'Yes! We offer customized packages if you want to book multiple activities (e.g. Speedboat + Bumper + ATV). Contact us on WhatsApp for custom group pricing.'
    },
    {
      q: 'What safety gear is provided?',
      a: 'We provide heavy-duty impact flotation jackets for all water rides, and full motor-cross helmets, knee pads, and gloves for the ATV quad bike track.'
    },
    {
      q: 'Are pregnant women or guests with back issues allowed?',
      a: 'For safety reasons, speed boat high-speed runs, bumper sofa rides, and ATV off-roading are not permitted for pregnant guests or those with spinal conditions.'
    }
  ]

  return (
    <>
      <main className="min-h-screen bg-[#f7f5f0]">
        <Navbar />

        {/* Hero Banner */}
        <section style={{ position: 'relative', height: '65vh', minHeight: '440px', overflow: 'hidden', background: '#0d2415' }}>
          <Image
            src="/boat.png"
            alt="Thrilling Water Sports near Varkala at Paravur Lake Kerala"
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
              Adrenaline Sports
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
              Water Sports near Varkala
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
              Get your blood pumping with high-speed speedboat cruises, ATV off-road tracks, and bumpy sofa rides on Paravur Lake, just minutes from Varkala.
            </p>
          </div>
        </section>

        {/* Global Warning Note */}
        <section style={{ background: '#fff', padding: '40px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.25)',
              padding: '20px 24px',
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
              fontFamily: "'Jost', sans-serif",
            }}
          >
            <Shield size={20} color="#c9a84c" style={{ marginTop: 2, flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0d2415', marginBottom: 4 }}>Professional Safety Standards</h4>
              <p style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.5, fontWeight: 300 }}>
                All high-speed motorized activities are conducted in dedicated zones of Paravur Lake, away from the quiet mangrove kayaking channels. Life vests are checked before launch, and all boats are driven by safety-certified, licensed operators.
              </p>
            </div>
          </div>
        </section>

        {/* Activities list */}
        <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {sports.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1.1fr 1fr' : '1fr 1.1fr',
                  gap: '48px',
                  alignItems: 'center',
                }}
                className="md-grid-1col"
              >
                {/* Image */}
                <div style={{ order: idx % 2 === 0 ? 0 : 1 }} className="order-none">
                  <div
                    style={{
                      position: 'relative',
                      height: '320px',
                      border: '1px solid rgba(0,0,0,0.08)',
                      padding: '8px',
                      background: '#fff',
                    }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div style={{ fontFamily: "'Jost', sans-serif" }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a84c' }}>Activity</span>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 600, color: '#0d2415', margin: '4px 0 16px' }}>{item.name}</h2>
                  <div style={{ display: 'flex', gap: 12, marginBottom: '20px' }}>
                    <div style={{ background: '#0d2415', color: '#e8d49a', fontSize: '0.75rem', fontWeight: 600, padding: '3px 10px', borderRadius: '1px' }}>
                      {item.price}
                    </div>
                    <div style={{ border: '1px solid rgba(13,36,21,0.2)', color: '#0d2415', fontSize: '0.75rem', fontWeight: 500, padding: '3px 10px', borderRadius: '1px' }}>
                      {item.duration}
                    </div>
                    <div style={{ border: '1px solid rgba(13,36,21,0.2)', color: '#0d2415', fontSize: '0.75rem', fontWeight: 500, padding: '3px 10px', borderRadius: '1px' }}>
                      {item.capacity}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7, fontWeight: 300, marginBottom: '24px' }}>
                    {item.desc}
                  </p>
                  <a
                    href={`https://wa.me/${PRIMARY_WA}?text=Hi!%20I'd%20like%20to%20book%20the%20*${encodeURIComponent(item.name)}*%20activity.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#25d366',
                      color: '#fff',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '12px 28px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      borderRadius: '2px',
                    }}
                    id={`book-sports-${idx}`}
                  >
                    <MessageCircle size={14} />
                    Book on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section style={{ background: '#fff', padding: '80px 24px' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', fontFamily: "'Jost', sans-serif" }}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#0d2415',
                marginBottom: '24px',
                textAlign: 'center',
              }}
            >
              Water Sports FAQs
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {sportsFaqs.map((faq, i) => (
                <div key={i}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0d2415', marginBottom: 4 }}>
                    {faq.q}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.5, fontWeight: 300 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global CTA */}
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
              Ready for an adrenaline rush?
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
              Chat on WhatsApp to customize packages, request group rates, or schedule timings.
            </p>
            <a
              href={`https://wa.me/${PRIMARY_WA}?text=${waMessage}`}
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
              Book Package Now
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
          .order-none { order: 0 !important; }
        }
      `}</style>
    </>
  )
}
