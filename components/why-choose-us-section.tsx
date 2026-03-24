'use client'

import { Users, Shield, MapPin, Gift, Leaf, Clock, Star, Phone } from 'lucide-react'

const features = [
  {
    icon: Users,
    number: '01',
    title: 'Expert Local Guides',
    description:
      'Born and raised in Paravur — our guides know every mangrove channel, every bird call, every hidden spot that no tourist map shows.',
  },
  {
    icon: Shield,
    number: '02',
    title: 'Safety First, Always',
    description:
      'Certified safety gear, life jackets, and trained crew on every trip. Your adventure is thrilling — and completely secure.',
  },
  {
    icon: MapPin,
    number: '03',
    title: '20 Min from Varkala',
    description:
      'The perfect add-on to your Varkala trip. Easy to reach, impossible to forget. We can arrange pickup on request.',
  },
  {
    icon: Gift,
    number: '04',
    title: 'Group Discounts',
    description:
      'Travelling with 10 or more? Schools, corporates and families get special pricing — plus homestay packages on request.',
  },
  {
    icon: Leaf,
    number: '05',
    title: 'Eco-Responsible',
    description:
      'We operate with deep respect for the Paravur ecosystem — low-impact activities, no motorised boats in mangroves, zero waste.',
  },
  {
    icon: Clock,
    number: '06',
    title: 'Flexible Timings',
    description:
      'Early morning mist tours, golden hour paddles, or custom slots — we work around your schedule, not ours.',
  },
]

// ★ CHANGED: "6 Experiences" → "100% Safety", "4yr" → "4yr" (visible), star rating added
const stats = [
  { value: '500+', label: 'Happy Guests' },
  { value: '4.9', label: 'Star Rating', isStars: true },
  { value: '100%', label: 'Safety Record' },
  { value: '4', label: 'Years Running', suffix: 'yr' },
]

// Star Rating Component — renders 5 stars with 4.9 fill
function StarRating({ score = 4.9 }: { score?: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', marginBottom: '6px' }}>
      {[1, 2, 3, 4, 5].map((s) => {
        const fill = Math.min(1, Math.max(0, score - (s - 1)))
        const id = `star-grad-${s}`
        return (
          <svg key={s} width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
                <stop offset={`${fill * 100}%`} stopColor="#c9a84c" />
                <stop offset={`${fill * 100}%`} stopColor="rgba(201,168,76,0.18)" />
              </linearGradient>
            </defs>
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={`url(#${id})`}
              stroke="#c9a84c"
              strokeWidth="1.2"
            />
          </svg>
        )
      })}
    </div>
  )
}

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      style={{
        background: 'linear-gradient(160deg, #06160d 0%, #0d2415 50%, #091c10 100%)',
        paddingTop: '100px',
        paddingBottom: '100px',
        fontFamily: "'Jost', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .why-bg-pattern::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(201,168,76,0.04) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .why-feature-card {
          position: relative;
          padding: 32px 28px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: rgba(255,255,255,0.02);
          cursor: default;
        }
        .why-feature-card:hover {
          border-color: rgba(201,168,76,0.25);
          background: rgba(201,168,76,0.04);
          transform: translateY(-4px);
        }
        .why-feature-card:hover .why-icon-wrap {
          border-color: rgba(201,168,76,0.5);
          background: rgba(201,168,76,0.1);
        }
        .why-feature-card:hover .why-number {
          color: rgba(201,168,76,0.35);
        }

        .why-icon-wrap {
          width: 48px; height: 48px;
          border: 1px solid rgba(201,168,76,0.2);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          transition: all 0.3s;
          background: rgba(201,168,76,0.05);
        }

        .why-number {
          position: absolute;
          top: 20px; right: 20px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 300;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          transition: color 0.3s;
          user-select: none;
        }

        .why-feat-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .why-feat-desc {
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
        }

        /* ★ Stats — made clearly visible */
        .stat-item {
          text-align: center;
          padding: 0 24px;
        }
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 400;
          color: #f0d97a;          /* brighter gold — was #e8d49a */
          line-height: 1;
          margin-bottom: 6px;
          text-shadow: 0 0 24px rgba(201,168,76,0.35);
        }
        .stat-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);  /* was 0.35 — now clearly visible */
        }
        .stat-sep {
          width: 1px;
          background: rgba(255,255,255,0.12);
          align-self: stretch;
        }

        /* CTA strip */
        .why-cta-strip {
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: 64px;
          padding-top: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        .cta-primary {
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #c9a84c, #e8c97a);
          color: #0d2415;
          border: none;
          padding: 13px 30px;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          text-decoration: none;
        }
        .cta-primary:hover {
          box-shadow: 0 8px 28px rgba(201,168,76,0.4);
          transform: translateY(-1px);
        }

        .cta-secondary {
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: transparent;
          color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 13px 28px;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          text-decoration: none;
        }
        .cta-secondary:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.05);
          transform: translateY(-1px);
        }

        .section-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #c9a84c;
        }
        .section-title1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.12;
        }
        .gold-line {
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a84c, transparent);
          width: 60px;
        }
      `}</style>

      <div className="why-bg-pattern" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{
        position: 'absolute', top: '-120px', right: '-120px',
        width: '500px', height: '500px', borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.06)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '320px', height: '320px', borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.05)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>

        {/* ── Header ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '64px', gap: '14px' }}>
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title1">
            The Mangrove Moments
            <br />
            <em style={{ fontStyle: 'italic', color: '#c9a84c' }}>Difference</em>
          </h2>
          <div className="gold-line" />
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '400px',
            lineHeight: 1.75,
          }}>
            Not just another boat ride — a thoughtfully crafted experience rooted in the culture and ecology of Paravur
          </p>
        </div>

        {/* ── Stats Row ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.03)',
          padding: '32px 0',
          marginBottom: '48px',
          flexWrap: 'wrap',
          gap: '0',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div className="stat-item">
                {/* ★ Star rating gets its own visual treatment */}
                {s.isStars ? (
                  <>
                    <StarRating score={4.9} />
                    <div className="stat-value" style={{ fontSize: '1.6rem', marginBottom: '4px' }}>
                      4.9 <span style={{ fontSize: '1rem', color: '#c9a84c' }}>/ 5</span>
                    </div>
                  </>
                ) : (
                  <div className="stat-value">
                    {s.value}
                    {s.suffix && <span style={{ fontSize: '1.4rem', color: '#c9a84c' }}>{s.suffix}</span>}
                  </div>
                )}
                <div className="stat-label">{s.label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="stat-sep" style={{ height: '48px', margin: '0 8px' }} />
              )}
            </div>
          ))}
        </div>

        {/* ── Features Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.05)',
        }}>
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="why-feature-card">
                <div className="why-number">{f.number}</div>
                <div className="why-icon-wrap">
                  <Icon size={20} color="#c9a84c" strokeWidth={1.5} />
                </div>
                <h3 className="why-feat-title">{f.title}</h3>
                <p className="why-feat-desc">{f.description}</p>
              </div>
            )
          })}
        </div>

        {/* ── CTA Strip ── */}
        <div className="why-cta-strip">
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.6rem',
              fontWeight: 300,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 6,
            }}>
              Ready to explore Paravur?
            </p>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.78rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.4)',
            }}>
              Book today — slots fill fast during peak season
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              className="cta-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
              <Star size={13} fill="#0d2415" color="#0d2415" />
            </button>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="cta-secondary">
              <Phone size={13} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}