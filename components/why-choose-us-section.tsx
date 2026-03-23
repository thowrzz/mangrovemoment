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

const stats = [
  { value: '500+', label: 'Happy Guests' },
  { value: '4.9', label: 'Star Rating', suffix: '★' },
  { value: '6', label: 'Experiences' },
  { value: '5', label: 'Years Running', suffix: 'yr' },
]

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

        /* Subtle texture overlay */
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

        /* Stats row */
        .stat-item {
          text-align: center;
          padding: 0 24px;
        }
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 300;
          color: #e8d49a;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .stat-sep {
          width: 1px;
          background: rgba(255,255,255,0.08);
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
        .section-title {
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

      {/* Dot-grid texture */}
      <div className="why-bg-pattern" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Decorative large circle */}
      <div style={{
        position: 'absolute',
        top: '-120px', right: '-120px',
        width: '500px', height: '500px',
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.06)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-80px', left: '-80px',
        width: '320px', height: '320px',
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.05)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>

        {/* ── Header ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '64px', gap: '14px' }}>
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">
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
          border: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.02)',
          padding: '32px 0',
          marginBottom: '48px',
          flexWrap: 'wrap',
          gap: '0',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div className="stat-item">
                <div className="stat-value">
                  {s.value}
                  {s.suffix && <span style={{ fontSize: '1.4rem', color: '#c9a84c' }}>{s.suffix}</span>}
                </div>
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