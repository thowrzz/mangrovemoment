'use client'

import { useState } from 'react'
import { MapPin, Phone, MessageCircle, Clock, ArrowRight, CheckCircle, Send } from 'lucide-react'

const activities = [
  { value: 'country-boating', label: '⛵ Country Boating — ₹1,800' },
  { value: 'kayaking', label: '🛶 Kayaking — ₹550' },
  { value: 'stand-up-paddle', label: '🏄 Stand Up Paddle — ₹600' },
  { value: 'coracle-ride', label: '🪵 Coracle Ride — ₹400' },
  { value: 'atv-ride', label: '🏍️ ATV Ride — ₹350' },
  { value: 'speed-boat', label: '🚤 Speed Boat — ₹3,500' },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', activity: '', date: '', people: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build a rich WhatsApp message from all form fields
    const activityLabel = activities.find(a => a.value === formData.activity)?.label || formData.activity

    const waMessage = [
      `🌿 *New Booking Request – Mangrove Moments*`,
      ``,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      `🎯 *Activity:* ${activityLabel}`,
      `📅 *Date:* ${formData.date}`,
      `👥 *People:* ${formData.people}`,
      formData.message ? `💬 *Message:* ${formData.message}` : '',
    ].filter(Boolean).join('\n')

    const waNumber = '919876543210' // ← Replace with your real WhatsApp number
    const waURL = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`

    // Opens WhatsApp with pre-filled booking message
    window.open(waURL, '_blank')

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', activity: '', date: '', people: '', message: '' })
    }, 4000)
  }

  const field = (name: string) => ({
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(null),
  })

  const inputStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    background: '#fff',
    border: `1px solid ${focused === name ? '#c9a84c' : 'rgba(0,0,0,0.1)'}`,
    outline: 'none',
    padding: '12px 16px',
    fontFamily: "'Jost', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 300,
    color: '#0d2415',
    transition: 'border-color 0.2s',
    borderRadius: 0,
    boxShadow: focused === name ? '0 0 0 3px rgba(201,168,76,0.08)' : 'none',
  })

  return (
    <section
      id="contact"
      style={{
        background: '#fff',
        paddingTop: '100px',
        paddingBottom: '0',
        fontFamily: "'Jost', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .contact-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #c9a84c;
        }
        .contact-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 300;
          color: #0d2415;
          line-height: 1.12;
        }

        .info-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .info-icon-wrap {
          width: 40px; height: 40px;
          border: 1px solid rgba(201,168,76,0.25);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          background: rgba(201,168,76,0.04);
        }
        .info-title {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 5px;
        }
        .info-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 400;
          color: #0d2415;
          text-decoration: none;
          transition: color 0.2s;
        }
        .info-value:hover { color: #c9a84c; }

        /* Form panel */
        .form-panel {
          background: #0d2415;
          padding: 44px 40px;
          position: relative;
        }
        .form-panel::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(to right, #c9a84c, #e8c97a, #c9a84c);
        }

        .form-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          display: block;
          margin-bottom: 7px;
        }

        .form-select {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          outline: none;
          padding: 12px 16px;
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          color: rgba(255,255,255,0.8);
          transition: border-color 0.2s;
          border-radius: 0;
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
        }
        .form-select:focus {
          border-color: #c9a84c;
          box-shadow: 0 0 0 3px rgba(201,168,76,0.1);
        }
        .form-select option { background: #0d2415; color: #fff; }

        .form-input-dark {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          outline: none;
          padding: 12px 16px;
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          color: rgba(255,255,255,0.85);
          transition: border-color 0.2s, box-shadow 0.2s;
          border-radius: 0;
        }
        .form-input-dark::placeholder { color: rgba(255,255,255,0.25); }
        .form-input-dark:focus {
          border-color: #c9a84c;
          box-shadow: 0 0 0 3px rgba(201,168,76,0.1);
          outline: none;
        }

        .submit-btn {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #c9a84c, #e8c97a, #c9a84c);
          color: #0d2415;
          border: none;
          padding: 15px;
          width: 100%;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s;
        }
        .submit-btn:hover {
          box-shadow: 0 8px 28px rgba(201,168,76,0.35);
          transform: translateY(-1px);
          background: linear-gradient(135deg, #e8c97a, #c9a84c, #e8c97a);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 0;
          text-align: center;
          gap: 16px;
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .wa-strip {
          background: #25d366;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          cursor: pointer;
          transition: background 0.2s;
          text-decoration: none;
        }
        .wa-strip:hover { background: #1ebe5a; }

        /* Map container */
        .map-embed {
          width: 100%;
          height: 220px;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          position: relative;
          background: #e8e5de;
        }

        /* Footer strip */
        .footer-bar {
          background: #06160d;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 0;
        }

        .gold-line {
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a84c, transparent);
          width: 60px;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}
          className="contact-grid">

          {/* ── Left: Info ── */}
          <div>
            <p className="contact-label" style={{ marginBottom: '14px' }}>Get in Touch</p>
            <h2 className="contact-title" style={{ marginBottom: '8px' }}>
              Ready for Your
              <br />
              <em style={{ fontStyle: 'italic', color: '#c9a84c' }}>Adventure?</em>
            </h2>
            <div className="gold-line" style={{ margin: '16px 0 32px' }} />

            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 300,
              color: '#666',
              lineHeight: 1.75,
              marginBottom: '32px',
            }}>
              Fill the form and we'll confirm your slot within 2 hours. Or reach us directly on WhatsApp for instant replies.
            </p>

            {/* Info items */}
            <div>
              <div className="info-item">
                <div className="info-icon-wrap">
                  <MapPin size={18} color="#c9a84c" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="info-title">Location</div>
                  <div className="info-value">Paravur Lake, Varkala</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.75rem', color: '#999', marginTop: 2 }}>
                    Kerala – 691334, India
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrap">
                  <Phone size={18} color="#c9a84c" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="info-title">Phone</div>
                  <a href="tel:+919876543210" className="info-value">+91 98765 43210</a>
                </div>
              </div>

              <div className="info-item" style={{ borderBottom: 'none' }}>
                <div className="info-icon-wrap">
                  <Clock size={18} color="#c9a84c" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="info-title">Hours</div>
                  <div className="info-value" style={{ fontSize: '0.95rem' }}>6:00 AM – 6:00 PM</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', color: '#999', marginTop: 2 }}>
                    Open daily · Best at sunrise & golden hour
                  </div>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div style={{ marginTop: '32px' }}>
              <div className="info-title" style={{ marginBottom: '10px' }}>Find Us</div>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.123456789!2d76.6200!3d9.0200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fa0e1b3e1b2b%3A0x1234567890abcdef!2sParavur+Lake%2C+Kollam%2C+Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="220"
                  style={{ border: 0, filter: 'saturate(0.7) contrast(1.05)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Paravur Lake, Varkala"
                />
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="form-panel">
            {submitted ? (
              <div className="success-state">
                <CheckCircle size={48} color="#c9a84c" strokeWidth={1} />
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.6rem',
                  fontWeight: 300,
                  color: '#fff',
                }}>
                  Opening WhatsApp…
                </div>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7,
                  maxWidth: '260px',
                }}>
                  Your booking details have been pre-filled. Just hit Send in WhatsApp to confirm your slot!
                </div>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '28px' }}>
                  <p style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#c9a84c',
                    marginBottom: '8px',
                  }}>Booking Form</p>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5rem',
                    fontWeight: 300,
                    color: '#fff',
                  }}>
                    Reserve Your Slot
                  </div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Name + Phone row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input-dark"
                        required
                        {...field('name')}
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone *</label>
                      <input
                        type="tel"
                        placeholder="+91"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input-dark"
                        required
                        {...field('phone')}
                      />
                    </div>
                  </div>

                  {/* Activity */}
                  <div>
                    <label className="form-label">Choose Activity *</label>
                    <div style={{ position: 'relative' }}>
                      <select
                        value={formData.activity}
                        onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                        className="form-select"
                        required
                      >
                        <option value="">Select an experience…</option>
                        {activities.map((a) => (
                          <option key={a.value} value={a.value}>{a.label}</option>
                        ))}
                      </select>
                      <div style={{
                        position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
                        pointerEvents: 'none', color: 'rgba(255,255,255,0.3)',
                        fontSize: '0.7rem',
                      }}>▼</div>
                    </div>
                  </div>

                  {/* Date + People row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label className="form-label">Preferred Date *</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="form-input-dark"
                        required
                        {...field('date')}
                      />
                    </div>
                    <div>
                      <label className="form-label">No. of People *</label>
                      <input
                        type="number"
                        placeholder="2"
                        min="1"
                        value={formData.people}
                        onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                        className="form-input-dark"
                        required
                        {...field('people')}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="form-label">Message / Special Requests</label>
                    <textarea
                      placeholder="Anything we should know? Group type, accessibility needs, preferred time…"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input-dark"
                      rows={3}
                      style={{ resize: 'none' }}
                      {...field('message')}
                    />
                  </div>

                  {/* Submit — opens WhatsApp */}
                  <button type="submit" className="submit-btn" style={{ marginTop: '8px' }}>
                    <MessageCircle size={14} />
                    Send via WhatsApp
                  </button>

                  {/* Trust note */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.68rem',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.3)',
                  }}>
                    <Clock size={11} />
                    Opens WhatsApp with your booking details pre-filled
                  </div>
                </form>
              </>
            )}

            {/* WhatsApp strip inside panel */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="wa-strip"
              style={{ display: 'flex', marginTop: '24px', marginLeft: '-40px', marginRight: '-40px', marginBottom: '-44px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <MessageCircle size={18} color="#fff" />
                <div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>
                    Prefer WhatsApp?
                  </div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', fontWeight: 300, color: 'rgba(255,255,255,0.8)' }}>
                    Chat with us for instant confirmation
                  </div>
                </div>
              </div>
              <ArrowRight size={16} color="#fff" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Footer bar ── */}
      <div className="footer-bar">
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1rem',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.35)',
        }}>
          © {new Date().getFullYear()} Mangrove Moments · Paravur, Varkala
        </div>
        <div style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '0.62rem',
          fontWeight: 400,
          letterSpacing: '0.14em',
          color: 'rgba(255,255,255,0.2)',
          textTransform: 'uppercase',
        }}>
          Designed with 🌿 for Kerala's backwaters
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .form-panel {
            padding: 32px 24px !important;
          }
          .wa-strip {
            margin-left: -24px !important;
            margin-right: -24px !important;
          }
        }
      `}</style>
    </section>
  )
}