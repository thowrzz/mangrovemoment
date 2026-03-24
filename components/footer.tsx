import Link from 'next/link'
import { Instagram, Youtube, MessageCircle, MapPin, Phone, ArrowUpRight, Leaf } from 'lucide-react'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#activities', label: 'Activities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const activityLinks = [
  { href: '#activities', label: 'Country Boating', price: '₹1,800' },
  { href: '#activities', label: 'Kayaking', price: '₹550' },
  { href: '#activities', label: 'Stand Up Paddle', price: '₹600' },
  { href: '#activities', label: 'Coracle Ride', price: '₹400' },
  { href: '#activities', label: 'ATV Ride', price: '₹350' },
  { href: '#activities', label: 'Speed Boat', price: '₹3,500' },
]

const socials = [
  { href: 'https://www.instagram.com/varkala_mangrove_moments?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: Instagram, label: 'Instagram' },
  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
  { href: 'https://wa.me/919876543210', icon: MessageCircle, label: 'WhatsApp' },
]

export function Footer() {
  return (
    <footer style={{ background: '#06160d', fontFamily: "'Jost', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .ft-col-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 20px;
          display: block;
        }

        .ft-link {
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          display: block;
          padding: 5px 0;
          transition: color 0.2s;
          border-bottom: 1px solid transparent;
        }
        .ft-link:hover { color: #e8d49a; }

        .ft-activity-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .ft-activity-row:last-child { border-bottom: none; }
        .ft-activity-name {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ft-activity-name:hover { color: #e8d49a; }
        .ft-activity-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.85rem;
          font-weight: 400;
          color: rgba(201,168,76,0.5);
        }

        .social-btn {
          width: 36px; height: 36px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.4);
          transition: all 0.25s;
          text-decoration: none;
        }
        .social-btn:hover {
          border-color: #c9a84c;
          color: #c9a84c;
          background: rgba(201,168,76,0.06);
        }

        .ft-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 6px 0;
        }
        .ft-contact-text {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
          line-height: 1.5;
        }
        .ft-contact-text:hover { color: #e8d49a; }

        .book-strip {
          background: linear-gradient(135deg, #1a3c2e 0%, #0d2415 100%);
          border-top: 1px solid rgba(201,168,76,0.15);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          padding: 28px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .book-now-btn {
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #c9a84c, #e8c97a);
          color: #0d2415;
          border: none;
          padding: 11px 26px;
          cursor: pointer;
          clip-path: polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s;
          text-decoration: none;
        }
        .book-now-btn:hover {
          box-shadow: 0 6px 20px rgba(201,168,76,0.35);
          transform: translateY(-1px);
        }

        .copyright-bar {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .copyright-text {
          font-family: 'Jost', sans-serif;
          font-size: 0.62rem;
          font-weight: 300;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.2);
        }
        .eco-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.15);
        }
      `}</style>

      {/* ── Book Now strip ── */}
      <div className="book-strip">
        <div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.5rem',
            fontWeight: 300,
            color: '#fff',
            marginBottom: 4,
          }}>
            Still thinking? <em style={{ fontStyle: 'italic', color: '#c9a84c' }}>Don't wait.</em>
          </div>
          <div style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '0.72rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.35)',
          }}>
            Peak season slots book fast — secure yours today
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#contact" className="book-now-btn">
            Book Now
            <ArrowUpRight size={13} />
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: 'transparent',
              color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '11px 22px',
              clipPath: 'polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.3s',
              textDecoration: 'none',
            }}
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 40px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1.5fr 1.5fr',
          gap: '48px',
        }}
          className="ft-grid"
        >
          <div>
            <Link href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 20 }}>
              <div style={{
  width: 44, height: 44,
  borderRadius: '50%',
  overflow: 'hidden',
  border: '1px solid rgba(201,168,76,0.4)',
  flexShrink: 0,
}}>
  <img src="./logo.png" alt="Mangrove Moments Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</div>
              <div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1,
                }}>Mangrove Moments</div>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.55rem',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                  marginTop: 3,
                }}>Paravur · Varkala</div>
              </div>
            </Link>

            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.78rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.35)',
              lineHeight: 1.75,
              marginBottom: 24,
              maxWidth: '240px',
            }}>
              Premium eco-adventures in the heart of Kerala's mangrove backwaters. Just 20 minutes from Varkala.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="social-btn" aria-label={s.label}>
                    <Icon size={15} strokeWidth={1.5} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="ft-col-label">Navigate</span>
            {quickLinks.map((l) => (
              <a key={l.href} href={l.href} className="ft-link">{l.label}</a>
            ))}
          </div>

          {/* Activities with prices */}
          <div>
            <span className="ft-col-label">Experiences</span>
            {activityLinks.map((a) => (
              <div key={a.label} className="ft-activity-row">
                <a href={a.href} className="ft-activity-name">{a.label}</a>
                <span className="ft-activity-price">{a.price}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <span className="ft-col-label">Find Us</span>

            <div className="ft-contact-item">
              <MapPin size={14} color="rgba(201,168,76,0.5)" strokeWidth={1.5} style={{ marginTop: 2, flexShrink: 0 }} />
              <span className="ft-contact-text">
                Paravur Lake, Varkal<br />Kerala – 691334, India
              </span>
            </div>

            <div className="ft-contact-item" style={{ marginTop: 4 }}>
              <Phone size={14} color="rgba(201,168,76,0.5)" strokeWidth={1.5} style={{ flexShrink: 0 }} />
              <a href="tel:+919876543210" className="ft-contact-text">+91 98765 43210</a>
            </div>

            <div className="ft-contact-item" style={{ marginTop: 4 }}>
              <MessageCircle size={14} color="rgba(201,168,76,0.5)" strokeWidth={1.5} style={{ flexShrink: 0 }} />
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="ft-contact-text">
                Chat on WhatsApp
              </a>
            </div>

            {/* Hours */}
            <div style={{
              marginTop: 20,
              padding: '12px 14px',
              border: '1px solid rgba(201,168,76,0.12)',
              background: 'rgba(201,168,76,0.03)',
            }}>
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: 5,
              }}>Open Daily</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1rem',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.6)',
              }}>6:00 AM – 6:00 PM</div>
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.65rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.25)',
                marginTop: 2,
              }}>Best at sunrise & golden hour</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Thin gold divider ── */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)', margin: '0 40px' }} />

      {/* ── Copyright bar ── */}
      <div className="copyright-bar">
        <span className="copyright-text">
          © {new Date().getFullYear()} Mangrove Moments · All rights reserved
        </span>
        <span className="eco-badge">
          <Leaf size={10} />
          Eco-responsible tourism · Paravur, Varkala, Kerala
        </span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ft-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 560px) {
          .ft-grid {
            grid-template-columns: 1fr !important;
          }
          .book-strip {
            padding: 24px !important;
          }
          .copyright-bar {
            padding: 16px 24px !important;
          }
        }
      `}</style>
    </footer>
  )
}