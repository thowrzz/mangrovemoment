'use client'

import { Button } from '@/components/ui/button'
import { ChevronDown, MapPin, Star, Users, Award } from 'lucide-react'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToActivities = () => {
    document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Inline styles for animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .hero-label {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }
        .hero-title {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.9s ease 0.45s, transform 0.9s ease 0.45s;
        }
        .hero-sub {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.65s, transform 0.8s ease 0.65s;
        }
        .hero-btns {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease 0.85s, transform 0.8s ease 0.85s;
        }
        .hero-stats {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease 1.05s, transform 0.8s ease 1.05s;
        }
        .hero-scroll {
          opacity: 0;
          transition: opacity 0.8s ease 1.3s;
        }
        .loaded .hero-label,
        .loaded .hero-title,
        .loaded .hero-sub,
        .loaded .hero-btns,
        .loaded .hero-stats,
        .loaded .hero-scroll {
          opacity: 1;
          transform: translateY(0);
        }

        .btn-primary {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%);
          color: #0d2415;
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: none;
          padding: 14px 36px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(201, 168, 76, 0.45);
          background: linear-gradient(135deg, #e8c97a 0%, #c9a84c 50%, #e8c97a 100%);
        }

        .btn-secondary {
          background: transparent;
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.55);
          padding: 14px 36px;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.9);
          transform: translateY(-2px);
        }

        .stat-divider {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.2);
        }

        .location-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 2px;
          padding: 7px 16px;
        }

        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.6), transparent);
          margin: 0 auto 8px;
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }

        .corner-tl, .corner-br {
          position: absolute;
          width: 40px;
          height: 40px;
          pointer-events: none;
        }
        .corner-tl {
          top: 24px; left: 24px;
          border-top: 1.5px solid rgba(201,168,76,0.5);
          border-left: 1.5px solid rgba(201,168,76,0.5);
        }
        .corner-br {
          bottom: 24px; right: 24px;
          border-bottom: 1.5px solid rgba(201,168,76,0.5);
          border-right: 1.5px solid rgba(201,168,76,0.5);
        }

        .vignette {
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%);
        }
      `}</style>

      {/* ── Video Background ── */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%230d2415' width='1200' height='800'/%3E%3C/svg%3E"
        >
          <source src="./bg.mp4" type="video/mp4" />
        </video>

        {/* Multi-layer overlay for cinematic depth */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 vignette" />
        {/* Bottom gradient — fades into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to top, rgba(8,24,14,0.9), transparent)' }} />
        {/* Top gradient — softens top edge */}
        <div className="absolute top-0 left-0 right-0 h-24"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)' }} />
      </div>

      {/* Decorative corner frames */}
      <div className="corner-tl" />
      <div className="corner-br" />

      {/* ── Main Content ── */}
      <div className={`relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center ${loaded ? 'loaded' : ''}`}>

        {/* Location badge */}
        <div className="hero-label mb-8 flex justify-center">
          <div className="location-badge">
            <MapPin size={11} color="#c9a84c" />
            <span style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#c9a84c',
            }}>
              Paravur Backwaters · Kollam · Kerala
            </span>
          </div>
        </div>

        {/* Main headline */}
        <h1
          className="hero-title text-white mb-5"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.6rem, 7vw, 5.2rem)',
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
          }}
        >
          Where the Mangroves
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#e8d49a' }}>
            Meet Adventure
          </em>
        </h1>

        {/* Decorative line */}
        <div className="hero-sub flex items-center justify-center gap-4 mb-5">
          <div style={{ height: '1px', width: '40px', background: 'rgba(201,168,76,0.5)' }} />
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '0.95rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '0.04em',
          }}>
            Just 20 minutes from Varkala — 6 unique water experiences
          </p>
          <div style={{ height: '1px', width: '40px', background: 'rgba(201,168,76,0.5)' }} />
        </div>

        {/* CTA Buttons */}
        <div className="hero-btns flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="btn-primary" onClick={scrollToActivities}>
            Explore Activities
          </button>
          <button className="btn-secondary" onClick={scrollToContact}>
            Book Your Journey
          </button>
        </div>

        {/* Stats bar */}
        <div className="hero-stats flex items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.6rem',
              fontWeight: 600,
              color: '#e8d49a',
              lineHeight: 1,
            }}>500+</div>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              marginTop: 4,
            }}>Happy Guests</div>
          </div>

          <div className="stat-divider" />

          <div className="text-center">
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.6rem',
              fontWeight: 600,
              color: '#e8d49a',
              lineHeight: 1,
            }}>6</div>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              marginTop: 4,
            }}>Experiences</div>
          </div>

          <div className="stat-divider" />

          <div className="text-center">
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              fontSize: '1.6rem',
              fontWeight: 600,
              color: '#e8d49a',
              lineHeight: 1,
            }}>
              5 <Star size={14} fill="#e8d49a" color="#e8d49a" style={{ marginTop: 2 }} />
            </div>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              marginTop: 4,
            }}>Rating</div>
          </div>

          <div className="stat-divider hidden sm:block" />

          <div className="text-center hidden sm:block">
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.6rem',
              fontWeight: 600,
              color: '#e8d49a',
              lineHeight: 1,
            }}>4yr</div>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              marginTop: 4,
            }}>Experience</div>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        className={`hero-scroll absolute bottom-8 left-1/2 z-20 cursor-pointer ${loaded ? 'loaded' : ''}`}
        style={{ transform: 'translateX(-50%)' }}
        onClick={scrollToActivities}
      >
        <div className="scroll-line" />
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '0.6rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
          textAlign: 'center',
        }}>Scroll</p>
      </div>
    </section>
  )
}