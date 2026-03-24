'use client'

import Image from 'next/image'
import { Clock, MessageCircle, Users, ArrowRight, Zap } from 'lucide-react'

const activities = [
  {
    id: 1,
    name: 'Country Boating',
    duration: '2 – 2.5 hrs',
    price: '₹1,800',
    tag: 'Most Popular',
    tagColor: '#c9a84c',
    description: 'Glide through ancient mangrove channels on a traditional wooden country boat. The most immersive way to experience Paravur backwaters.',
    image: './countryboating.png',
    icon: '⛵',
  },
  {
    id: 2,
    name: 'Kayaking',
    duration: '2 – 2.5 hrs',
    price: '₹550',
    tag: 'Best Value',
    tagColor: '#4caf82',
    description: 'Paddle silently through narrow mangrove tunnels with a local guide. Perfect for nature lovers and first-timers.',
    image: './Kayaking.png',
    icon: '🛶',
  },
  {
    id: 3,
    name: 'Stand Up Paddle',
    duration: '2 – 2.5 hrs',
    price: '₹600',
    tag: 'Fun & Easy',
    tagColor: '#4c8ec9',
    description: 'Balance on the glassy backwaters and soak in stunning lake views. No experience needed — our guides ensure a great time.',
    image: './standup.png',
    icon: '🏄',
  },
  {
    id: 4,
    name: 'Coracle Ride',
    duration: '15 min',
    price: '₹400',
    tag: 'Unique to Kerala',
    tagColor: '#c97a4c',
    description: "Spin and drift in a traditional round basket boat — a centuries-old Kerala tradition that's pure joy for all ages.",
    image: './coracleRide.jpg',
    icon: '🪵',
  },
  {
    id: 5,
    name: 'ATV Ride',
    duration: '15 – 20 min',
    price: '₹350',
    tag: 'Adrenaline',
    tagColor: '#c94c4c',
    description: 'Rev up on rugged terrain beside the backwaters. A short but thrilling off-road adventure to get the heart pumping.',
    image: './avtride.png',
    icon: '🏍️',
  },
  {
    id: 6,
    name: 'Speed Boat',
    duration: 'Variable',
    price: '₹3,500',
    tag: 'Premium',
    tagColor: '#8e4cc9',
    description: "Feel the rush as you tear across Paravur Lake at full speed. Perfect for groups who want the ultimate water thrill.",
    image: './boat.png',
    icon: '🚤',
  },
]

export function ActivitiesSection() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  const bookOnWhatsApp = (activityName: string) => {
    const message = encodeURIComponent(`Hi! I'd like to book the *${activityName}* experience. Please share availability and details.`)
    window.open(`https://wa.me/919744201662?text=${message}`, '_blank')
  }

  return (
    <section
      id="activities"
      style={{
        background: '#f7f5f0',
        fontFamily: "'Jost', sans-serif",
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .act-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          overflow: hidden;
          position: relative;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }
        .act-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.12);
          border-color: rgba(201,168,76,0.3);
        }
        .act-card:hover .act-img {
          transform: scale(1.06);
        }

        /* Book Now button — card hover nudge */
        .act-card:hover .act-book-btn .book-btn-arrow {
          transform: translateX(3px);
        }

        .act-img {
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          object-fit: cover;
        }

        .act-tag {
          position: absolute;
          top: 14px; left: 14px;
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
          color: #fff;
          z-index: 2;
        }

        .act-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: #0d2415;
          line-height: 1;
        }

        .act-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #0d2415;
          line-height: 1.15;
        }

        .act-desc {
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
          color: #555;
          line-height: 1.65;
        }

        .act-duration {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #888;
          text-transform: uppercase;
        }

        /* ── NEW Book Now Button ── */
        .act-book-btn {
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: #0d2415;
          color: #fff;
          border: none;
          padding: 11px 20px 11px 16px;
          width: auto;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.25s, color 0.25s, box-shadow 0.25s;
          clip-path: polygon(0% 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 0% 100%);
        }
        .act-book-btn:hover {
          background: #c9a84c !important;
          color: #0d2415 !important;
          box-shadow: 0 6px 20px rgba(201,168,76,0.35);
        }
        .act-book-btn:hover .book-btn-arrow {
          transform: translateX(3px) !important;
          color: #0d2415 !important;
        }

        .book-btn-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .book-btn-dot {
          display: none;
        }

        .book-btn-arrow {
          transition: transform 0.25s;
          color: #c9a84c;
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

        .promo-banner {
          background: linear-gradient(135deg, #0d2415 0%, #1a3c2e 50%, #0d2415 100%);
          position: relative;
          overflow: hidden;
        }
        .promo-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
        }

        .promo-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: #25d366;
          color: #fff;
          border: none;
          padding: 13px 28px;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.3s;
          text-decoration: none;
        }
        .promo-wa-btn:hover {
          background: #1ebe5a;
          box-shadow: 0 8px 24px rgba(37,211,102,0.35);
          transform: translateY(-1px);
        }

        .promo-book-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.3);
          padding: 13px 28px;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.3s;
          text-decoration: none;
        }
        .promo-book-btn:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.6);
          transform: translateY(-1px);
        }

        .divider-line {
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a84c, transparent);
          width: 60px;
          margin: 0 auto;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="section-label" style={{ marginBottom: '14px' }}>What We Offer</p>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Six Ways to
            <em style={{ fontStyle: 'italic', color: '#c9a84c' }}> Experience</em>
            <br />Paravur Backwaters
          </h2>
          <div className="divider-line" style={{ marginBottom: '20px' }} />
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '0.9rem',
            fontWeight: 300,
            color: '#666',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Premium eco-experiences on Paravur Lake —<br />
            group discounts & homestay packages available
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px',
          marginBottom: '56px',
        }}>
          {activities.map((activity) => (
            <div key={activity.id} className="act-card">
              {/* Image */}
              <div style={{ position: 'relative', height: '210px', overflow: 'hidden', background: '#e0ddd6' }}>
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="act-img"
                  style={{ objectFit: 'cover' }}
                />
                {/* Gradient overlay on image */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)',
                }} />

                {/* Tag */}
                <div className="act-tag" style={{ background: activity.tagColor }}>
                  {activity.tag}
                </div>

                {/* Icon + price overlay at bottom of image */}
                <div style={{
                  position: 'absolute', bottom: 14, left: 14, right: 14,
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                  zIndex: 2,
                }}>
                  <span style={{ fontSize: '1.6rem' }}>{activity.icon}</span>
                  <div style={{
                    background: 'rgba(0,0,0,0.55)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 12px',
                    borderRadius: '2px',
                  }}>
                    <span className="act-price" style={{ color: '#e8d49a', fontSize: '1.2rem' }}>
                      {activity.price}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontFamily: "'Jost', sans-serif", marginLeft: 3 }}>
                      /person
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px 20px 20px' }}>
                {/* Name + duration */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <h3 className="act-name">{activity.name}</h3>
                  <span className="act-duration">
                    <Clock size={11} />
                    {activity.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="act-desc" style={{ marginBottom: '20px' }}>
                  {activity.description}
                </p>

                {/* ── NEW Book Now Button ── */}
                <button className="act-book-btn" onClick={() => bookOnWhatsApp(activity.name)}>
                  <span className="book-btn-left">
                    Book Now
                  </span>
                  <ArrowRight size={13} className="book-btn-arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="promo-banner" style={{ padding: '56px 40px', textAlign: 'center' }}>
          {/* Decorative corners */}
          <div style={{ position: 'absolute', top: 20, left: 20, width: 32, height: 32, borderTop: '1px solid rgba(201,168,76,0.4)', borderLeft: '1px solid rgba(201,168,76,0.4)' }} />
          <div style={{ position: 'absolute', bottom: 20, right: 20, width: 32, height: 32, borderBottom: '1px solid rgba(201,168,76,0.4)', borderRight: '1px solid rgba(201,168,76,0.4)' }} />

          {/* Group icon */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.25)',
            padding: '6px 16px',
            marginBottom: '20px',
          }}>
            <Users size={13} color="#c9a84c" />
            <span style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#c9a84c',
            }}>
              Groups & Bulk Bookings
            </span>
          </div>

          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 300,
            color: '#fff',
            marginBottom: '12px',
            lineHeight: 1.2,
          }}>
            School Trips, Family Groups &{' '}
            <em style={{ fontStyle: 'italic', color: '#e8d49a' }}>Corporate Outings</em>
          </h3>

          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '32px',
            lineHeight: 1.7,
          }}>
            Special discounts for groups of 10+ · Homestay arrangements on request<br />
            Call or WhatsApp to get a custom quote for your group
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919744201662" target="_blank" rel="noopener noreferrer" className="promo-wa-btn">
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
            <button className="promo-book-btn" onClick={scrollToContact}>
              <Zap size={14} />
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}