'use client'

import { MapPin, Car, Clock, Phone, ArrowRight, MessageCircle, CheckCircle, Navigation } from 'lucide-react'

const pickupLocations = [
  {
    id: 1,
    place: 'Varkala Cliff',
    distance: '20 min',
    icon: '🏖️',
    note: 'North Cliff & South Cliff hotels',
  },
  {
    id: 2,
    place: 'Varkala Beach',
    distance: '22 min',
    icon: '🌊',
    note: 'Papanasam Beach area',
  },
  {
    id: 3,
    place: 'Kollam Town',
    distance: '35 min',
    icon: '🏙️',
    note: 'KSRTC Bus Stand & surroundings',
  },
  {
    id: 4,
    place: 'Kottiyam / Karunagappally',
    distance: '30 min',
    icon: '🛣️',
    note: 'On request',
  },
]

const highlights = [
  { icon: <Car size={18} strokeWidth={1.5} />, text: 'Door-to-door pickup & drop' },
  { icon: <Clock size={18} strokeWidth={1.5} />, text: 'Flexible timing — 6 AM to 6 PM' },
  { icon: <CheckCircle size={18} strokeWidth={1.5} />, text: 'Comfortable, AC vehicle' },
  { icon: <MapPin size={18} strokeWidth={1.5} />, text: 'All Varkala hotels & resorts covered' },
]

export function PickupDropSection() {
  const openWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/919744201662?text=${encoded}`, '_blank')
  }

  return (
    <section
      id="pickup"
      style={{
        background: '#fff',
        fontFamily: "'Jost', sans-serif",
        paddingTop: '96px',
        paddingBottom: '96px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        /* ── Route line animation ── */
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        .route-dot {
          animation: floatDot 2.8s ease-in-out infinite;
        }
        .route-dot:nth-child(2) { animation-delay: 0.4s; }
        .route-dot:nth-child(3) { animation-delay: 0.8s; }

        /* ── Location card ── */
        .loc-card {
          background: #f7f5f0;
          border: 1px solid rgba(0,0,0,0.06);
          padding: 20px 22px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.35s cubic-bezier(.25,.46,.45,.94);
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .loc-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #c9a84c, #e8c97a);
          transform: scaleY(0);
          transition: transform 0.35s ease;
          transform-origin: bottom;
        }
        .loc-card:hover {
          background: #fff;
          border-color: rgba(201,168,76,0.35);
          transform: translateX(6px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.07);
        }
        .loc-card:hover::before { transform: scaleY(1); }

        /* ── Highlight pill ── */
        .highlight-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(13,36,21,0.04);
          border: 1px solid rgba(13,36,21,0.08);
          padding: 12px 18px;
          transition: all 0.3s;
        }
        .highlight-pill:hover {
          background: rgba(201,168,76,0.08);
          border-color: rgba(201,168,76,0.3);
        }

        /* ── CTA Buttons ── */
        .pickup-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: #25d366;
          color: #ffffff;
          border: none;
          padding: 15px 32px;
          cursor: pointer;
          border-radius: 3px;
          transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
          box-shadow: 0 4px 16px rgba(37,211,102,0.30);
        }
        .pickup-wa-btn:hover {
          background: #1ebe5a;
          box-shadow: 0 8px 28px rgba(37,211,102,0.45);
          transform: translateY(-2px);
        }

        .pickup-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: #0d2415;
          color: #ffffff;
          border: none;
          padding: 15px 32px;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          text-decoration: none;
        }
        .pickup-call-btn:hover {
          background: #c9a84c;
          color: #0d2415;
          box-shadow: 0 8px 28px rgba(201,168,76,0.35);
          transform: translateY(-2px);
        }

        /* ── Section divider ── */
        .gold-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a84c, transparent);
          width: 60px;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .pickup-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .pickup-visual { display: none !important; }
        }
        @media (max-width: 600px) {
          .loc-cards-grid { grid-template-columns: 1fr !important; }
          .pickup-cta-row { flex-direction: column !important; align-items: stretch !important; }
          .pickup-cta-row button, .pickup-cta-row a { text-align: center; justify-content: center; }
        }
      `}</style>

      {/* ── Subtle background texture ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.025'%3E%3Cpath d='M40 0v80M0 40h80'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontSize: '0.68rem', fontWeight: 500,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '14px',
          }}>
            Hassle-Free Travel
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 300, color: '#0d2415', lineHeight: 1.12, marginBottom: '16px',
          }}>
            Pickup &amp; Drop
            <br />
            <em style={{ fontStyle: 'italic', color: '#c9a84c', fontWeight: 400 }}>Available from Varkala</em>
          </h2>
          <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
          <p style={{
            fontFamily: "'Jost', sans-serif", fontSize: '0.9rem', fontWeight: 300,
            color: '#666', maxWidth: '460px', margin: '0 auto', lineHeight: 1.75,
          }}>
            Don't worry about navigation — we'll pick you up from your hotel or resort and bring you back, so you can relax from start to finish.
          </p>
        </div>

        {/* ── Main Grid ── */}
        <div
          className="pickup-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '64px' }}
        >

          {/* ── Left: Locations ── */}
          <div>
            <p style={{
              fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '20px',
            }}>
              We Pickup From
            </p>

            <div className="loc-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '36px' }}>
              {pickupLocations.map((loc) => (
                <div key={loc.id} className="loc-card">
                  <div style={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0 }}>{loc.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem',
                      fontWeight: 600, color: '#0d2415', lineHeight: 1.2,
                    }}>
                      {loc.place}
                    </div>
                    <div style={{
                      fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', color: '#999',
                      marginTop: '3px', lineHeight: 1.4,
                    }}>
                      {loc.note}
                    </div>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: '6px',
                      background: 'rgba(201,168,76,0.12)', padding: '2px 8px', borderRadius: '2px',
                    }}>
                      <Navigation size={9} color="#c9a84c" />
                      <span style={{
                        fontFamily: "'Jost', sans-serif", fontSize: '0.6rem',
                        fontWeight: 600, color: '#c9a84c', letterSpacing: '0.08em',
                      }}>
                        ~{loc.distance}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '36px' }}>
              {highlights.map((h, i) => (
                <div key={i} className="highlight-pill">
                  <span style={{ color: '#c9a84c', flexShrink: 0 }}>{h.icon}</span>
                  <span style={{
                    fontFamily: "'Jost', sans-serif", fontSize: '0.82rem', fontWeight: 400, color: '#333',
                  }}>
                    {h.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pickup-cta-row" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                className="pickup-wa-btn"
                onClick={() => openWhatsApp("Hi! I'd like to arrange a *Pickup & Drop* from Varkala. Please share the details and pricing.")}
              >
                <MessageCircle size={15} />
                Book Pickup via WhatsApp
              </button>
              <a href="tel:+919895023973" className="pickup-call-btn">
                <Phone size={14} />
                Call Us
              </a>
            </div>
          </div>

          {/* ── Right: Visual ── */}
          <div className="pickup-visual" style={{ position: 'relative' }}>

            {/* Map-like card */}
            <div style={{
              background: '#0d2415',
              padding: '40px 36px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Corner accents */}
              <div style={{ position: 'absolute', top: 16, left: 16, width: 28, height: 28, borderTop: '1.5px solid rgba(201,168,76,0.5)', borderLeft: '1.5px solid rgba(201,168,76,0.5)' }} />
              <div style={{ position: 'absolute', bottom: 16, right: 16, width: 28, height: 28, borderBottom: '1.5px solid rgba(201,168,76,0.5)', borderRight: '1.5px solid rgba(201,168,76,0.5)' }} />

              {/* Route diagram */}
              <div style={{ position: 'relative', padding: '8px 0 8px 24px' }}>

                {/* Vertical route line */}
                <svg width="2" height="100%" style={{ position: 'absolute', left: 0, top: 0, height: '100%' }}>
                  <line x1="1" y1="0" x2="1" y2="100%"
                    stroke="rgba(201,168,76,0.25)" strokeWidth="2"
                    strokeDasharray="6 4" />
                </svg>

                {/* Stop: Your Hotel */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: '28px' }}>
                  <div className="route-dot" style={{
                    position: 'absolute', left: -8,
                    width: 18, height: 18, borderRadius: '50%',
                    background: '#25d366', border: '3px solid #0d2415',
                    boxShadow: '0 0 0 2px #25d366',
                  }} />
                  <div style={{ paddingLeft: '8px' }}>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>
                      Pickup Point
                    </div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontWeight: 400, color: '#fff' }}>
                      Your Hotel / Resort
                    </div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                      Varkala Cliff · Beach · Town
                    </div>
                  </div>
                </div>

                {/* Midpoint: En Route */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: '28px' }}>
                  <div className="route-dot" style={{
                    position: 'absolute', left: -5,
                    width: 12, height: 12, borderRadius: '50%',
                    background: 'rgba(201,168,76,0.3)', border: '2px solid #c9a84c',
                  }} />
                  <div style={{ paddingLeft: '8px' }}>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
                      Scenic 20-minute drive through Kerala countryside…
                    </div>
                  </div>
                </div>

                {/* Stop: Destination */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div className="route-dot" style={{
                    position: 'absolute', left: -8,
                    width: 18, height: 18, borderRadius: '50%',
                    background: '#c9a84c', border: '3px solid #0d2415',
                    boxShadow: '0 0 0 2px #c9a84c',
                  }} />
                  <div style={{ paddingLeft: '8px' }}>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>
                      Destination
                    </div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontWeight: 400, color: '#e8d49a' }}>
                      Mangrove Moments
                    </div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                      Paravur Backwaters · Kerala
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', margin: '32px 0 24px' }} />

              {/* Pricing note */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>
                    Pickup Fare
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 600, color: '#e8d49a', lineHeight: 1 }}>
                      ₹400
                    </span>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>
                      /trip (one-way)
                    </span>
                  </div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>
                    Round-trip available · Call for group fares
                  </div>
                </div>
                <button
                  className="pickup-wa-btn"
                  style={{ fontSize: '0.65rem', padding: '11px 20px' }}
                  onClick={() => openWhatsApp("Hi! I'd like to arrange a Pickup & Drop from Varkala. Please share the details.")}
                >
                  <ArrowRight size={13} />
                  Arrange Now
                </button>
              </div>
            </div>

            {/* Below card — quick note */}
            <div style={{
              background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)',
              padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, marginTop: '0',
              borderTop: 'none',
            }}>
              <Clock size={14} color="#c9a84c" strokeWidth={1.5} style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', fontWeight: 300, color: '#666', lineHeight: 1.6 }}>
                Book your activity + pickup together on WhatsApp for a seamless experience. We'll coordinate timing once your slot is confirmed.
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA Banner ── */}
        <div style={{
          background: 'linear-gradient(135deg, #0d2415 0%, #1a3c2e 100%)',
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* BG pattern */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontFamily: "'Jost', sans-serif", fontSize: '0.62rem', fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '8px',
            }}>
              Staying in Varkala?
            </div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
              fontWeight: 300, color: '#fff', lineHeight: 1.25,
            }}>
              We come to you — just share your hotel &amp;{' '}
              <em style={{ fontStyle: 'italic', color: '#f4e5a8' }}>we handle the rest</em>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <button
              className="pickup-wa-btn"
              onClick={() => openWhatsApp("Hi! I'm staying in Varkala and would like to arrange a pickup to Mangrove Moments. Please help me with details.")}
            >
              <MessageCircle size={15} />
              WhatsApp for Pickup
            </button>
            <a href="tel:+919895023973" className="pickup-call-btn" style={{ color: '#fff' }}>
              <Phone size={14} />
              +91 98950 23973
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}