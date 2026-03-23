'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    activity: 'Kayaking',
    rating: 5,
    quote:
      'An absolutely magical experience! The guides were knowledgeable and the kayaking through the mangroves was breathtaking. The silence of the waterways, the birds — I felt completely disconnected from city chaos.',
    initial: 'P',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Bangalore',
    activity: 'Country Boating',
    rating: 5,
    quote:
      'Perfect getaway from city life. The country boat ride was serene and the staff made sure we were safe and comfortable throughout. We brought our whole family — kids loved the coracle ride!',
    initial: 'R',
  },
  {
    id: 3,
    name: 'Anjali Menon',
    location: 'Kochi',
    activity: 'ATV + Coracle',
    rating: 5,
    quote:
      'What a wonderful addition to Kerala tourism! The coracle ride was unique and the ATV adventure was thrilling. Best decision to book with Mangrove Moments. Already planning our return trip.',
    initial: 'A',
  },
]

const avatarColors = ['#1a3c2e', '#2d5a40', '#3d7a55']

export function TestimonialsSection() {
  return (
    <section
      id="about"
      style={{
        background: '#f7f5f0',
        paddingTop: '100px',
        paddingBottom: '100px',
        fontFamily: "'Jost', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .test-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          padding: 36px 32px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .test-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 56px rgba(0,0,0,0.09);
          border-color: rgba(201,168,76,0.25);
        }
        .test-card:hover .test-quote-icon {
          color: #c9a84c;
        }

        .test-quote-icon {
          color: rgba(201,168,76,0.2);
          transition: color 0.3s;
          margin-bottom: 16px;
        }

        .test-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 400;
          font-style: italic;
          color: #333;
          line-height: 1.75;
          margin-bottom: 28px;
        }

        .test-avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          flex-shrink: 0;
        }

        .test-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #0d2415;
          line-height: 1.1;
          margin-bottom: 2px;
        }

        .test-location {
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          font-weight: 400;
          color: #999;
          letter-spacing: 0.05em;
        }

        .test-activity-badge {
          position: absolute;
          top: 20px; right: 20px;
          font-family: 'Jost', sans-serif;
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c9a84c;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.2);
          padding: 3px 9px;
        }

        .gold-divider {
          width: 1px;
          height: 28px;
          background: rgba(201,168,76,0.3);
          margin: 0 14px;
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
          color: #0d2415;
          line-height: 1.12;
        }
        .gold-line {
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a84c, transparent);
          width: 60px;
          margin: 0 auto;
        }

        /* Trust bar */
        .trust-bar {
          background: #0d2415;
          padding: 28px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          flex-wrap: wrap;
          margin-top: 64px;
        }
        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 36px;
          text-align: center;
        }
        .trust-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 300;
          color: #e8d49a;
          line-height: 1;
          margin-bottom: 4px;
        }
        .trust-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .trust-sep {
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.08);
        }

        .stars-row {
          display: flex;
          gap: 3px;
          margin-bottom: 20px;
        }
      `}</style>

      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: '-60px', right: '-60px',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          <p className="section-label">Guest Stories</p>
          <h2 className="section-title">
            Stories from Our
            <em style={{ fontStyle: 'italic', color: '#c9a84c' }}> Adventurers</em>
          </h2>
          <div className="gold-line" />
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 300,
            color: '#777',
            maxWidth: '400px',
            lineHeight: 1.75,
          }}>
            Real words from guests who've discovered the quiet magic of Paravur backwaters
          </p>
        </div>

        {/* ── Testimonial Cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {testimonials.map((t, i) => (
            <div key={t.id} className="test-card">

              {/* Activity badge */}
              <div className="test-activity-badge">{t.activity}</div>

              {/* Large quote icon */}
              <div className="test-quote-icon">
                <Quote size={28} strokeWidth={1} />
              </div>

              {/* Stars */}
              <div className="stars-row">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={13} fill="#c9a84c" color="#c9a84c" />
                ))}
              </div>

              {/* Quote text */}
              <p className="test-quote">"{t.quote}"</p>

              {/* Bottom divider */}
              <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', marginBottom: '20px' }} />

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="test-avatar" style={{ background: avatarColors[i] }}>
                  {t.initial}
                </div>
                <div className="gold-divider" />
                <div>
                  <div className="test-name">{t.name}</div>
                  <div className="test-location">📍 {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Trust bar ── */}
        <div className="trust-bar">
          {[
            { value: '4.9 ★', label: 'Average Rating' },
            { value: '100%', label: 'Recommend Us' },
            { value: '500+', label: 'Reviews' },
            { value: 'Zero', label: 'Complaints' },
          ].map((item, i, arr) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div className="trust-item">
                <div className="trust-value">{item.value}</div>
                <div className="trust-label">{item.label}</div>
              </div>
              {i < arr.length - 1 && <div className="trust-sep" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}