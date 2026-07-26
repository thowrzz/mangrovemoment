'use client'

import { Sun, Sunset, MessageCircle, ArrowRight } from 'lucide-react'

export function SlotPromotionSection() {
  const PRIMARY_WA = '919744201662'
  const waMessage = (slot: string) => encodeURIComponent(
    `Hi! I'd like to book the *${slot}* slot for mangrove kayaking at Paravur Backwaters. Please check availability.`
  )

  return (
    <section
      id="slots"
      style={{
        background: '#fff',
        paddingTop: '96px',
        paddingBottom: '96px',
        fontFamily: "'Jost', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '72px',
      }}
    >
      {/* Background accents */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontSize: '0.68rem', fontWeight: 500,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '14px',
          }}>
            Magic Hours
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 300, color: '#0d2415', lineHeight: 1.12, marginBottom: '16px',
          }}>
            Sunrise & Golden Sunset
            <br />
            <em style={{ fontStyle: 'italic', color: '#c9a84c', fontWeight: 400 }}>Slot Promotions</em>
          </h2>
          <div style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, #c9a84c, transparent)',
            width: '60px',
            margin: '0 auto 20px',
          }} />
          <p style={{
            fontSize: '0.9rem', fontWeight: 300,
            color: '#666', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75,
          }}>
            The backwaters are at their most beautiful during the twilight hours. Book in advance to secure these high-demand slots!
          </p>
        </div>

        {/* Promo Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}
          className="slot-promo-grid"
        >
          {/* Sunrise Card */}
          <div
            style={{
              background: '#f7f5f0',
              border: '1px solid rgba(0,0,0,0.05)',
              padding: '44px 40px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ position: 'absolute', top: 20, right: 24, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(201,168,76,0.12)', padding: '4px 12px', borderRadius: '1px' }}>
              <Sun size={12} color="#c9a84c" />
              <span style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c9a84c' }}>Birding Peak</span>
            </div>

            <div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '16px' }}>
                <Sun size={24} color="#c9a84c" />
                <span style={{ fontSize: '1.25rem', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#0d2415' }}>Sunrise Mist Paddle</span>
              </div>
              
              <div style={{ fontSize: '1.8rem', fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: '#0d2415', marginBottom: '16px' }}>
                5:30 AM – 7:30 AM
              </div>

              <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.7, fontWeight: 300, marginBottom: '28px' }}>
                Glide over mirror-flat, glassy water surrounded by morning mist. Spot migratory kingfishers and herons as they begin their day. The temperature is cool, fresh, and perfect for active paddling.
              </p>
            </div>

            <div>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px', marginBottom: '24px', display: 'flex', gap: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.58rem', color: '#999', textTransform: 'uppercase' }}>Ideal For</span>
                  <div style={{ fontSize: '0.78rem', fontWeight: 500, color: '#0d2415', marginTop: 2 }}>Nature Lovers, Bird Watchers</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.58rem', color: '#999', textTransform: 'uppercase' }}>Water Condition</span>
                  <div style={{ fontSize: '0.78rem', fontWeight: 500, color: '#0d2415', marginTop: 2 }}>Glassy & Still</div>
                </div>
              </div>

              <a
                href={`https://wa.me/${PRIMARY_WA}?text=${waMessage('Sunrise Mist Paddle')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25d366',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '14px 24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  textDecoration: 'none',
                  borderRadius: '2px',
                  boxShadow: '0 4px 12px rgba(37,211,102,0.15)',
                }}
              >
                <MessageCircle size={14} />
                Book Sunrise Slot
              </a>
            </div>
          </div>

          {/* Sunset Card */}
          <div
            style={{
              background: '#0d2415',
              border: '1px solid rgba(255,255,255,0.05)',
              padding: '44px 40px',
              position: 'relative',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ position: 'absolute', top: 20, right: 24, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(201,168,76,0.18)', padding: '4px 12px', borderRadius: '1px', border: '1px solid rgba(201,168,76,0.3)' }}>
              <Sunset size={12} color="#e8d49a" />
              <span style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#e8d49a' }}>Golden Hour</span>
            </div>

            <div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '16px' }}>
                <Sunset size={24} color="#e8d49a" />
                <span style={{ fontSize: '1.25rem', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#fff' }}>Golden Sunset Cruise</span>
              </div>
              
              <div style={{ fontSize: '1.8rem', fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: '#e8d49a', marginBottom: '16px' }}>
                4:30 PM – 6:00 PM
              </div>

              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontWeight: 300, marginBottom: '28px' }}>
                Paddle into the mangrove root arches as the golden sun filters through the leaves. Watch the sky turn red and orange over the wide lake while enjoying a cool coastal evening breeze. Perfect for photography.
              </p>
            </div>

            <div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', marginBottom: '24px', display: 'flex', gap: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Ideal For</span>
                  <div style={{ fontSize: '0.78rem', fontWeight: 500, color: '#e8d49a', marginTop: 2 }}>Couples, Photographers</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Water Condition</span>
                  <div style={{ fontSize: '0.78rem', fontWeight: 500, color: '#e8d49a', marginTop: 2 }}>Gentle Ripple / Calm</div>
                </div>
              </div>

              <a
                href={`https://wa.me/${PRIMARY_WA}?text=${waMessage('Golden Sunset Cruise')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25d366',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '14px 24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  textDecoration: 'none',
                  borderRadius: '2px',
                  boxShadow: '0 4px 12px rgba(37,211,102,0.3)',
                }}
              >
                <MessageCircle size={14} />
                Book Sunset Slot
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .slot-promo-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
