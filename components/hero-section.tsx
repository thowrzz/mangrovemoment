'use client'

import { MapPin, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Trigger content animations shortly after mount
    const timer = setTimeout(() => setLoaded(true), 120)

    const vid = videoRef.current
    if (!vid) return () => clearTimeout(timer)

    // Imperatively call play() — most reliable way to trigger autoplay on
    // mobile browsers (iOS Safari, Android Chrome) that ignore the autoPlay attr
    const tryPlay = () => {
      vid.play().catch(() => {
        // Autoplay blocked — video stays hidden, poster shows instead
      })
    }

    const onCanPlay = () => {
      setVideoReady(true)
      tryPlay()
    }

    // Already buffered (cached visit)
    if (vid.readyState >= 3) {
      setVideoReady(true)
      tryPlay()
    } else {
      vid.addEventListener('canplay', onCanPlay, { once: true })
    }

    // Fallback: reveal video after 1.8s regardless
    const fallback = setTimeout(() => {
      setVideoReady(true)
      tryPlay()
    }, 1800)

    return () => {
      clearTimeout(timer)
      clearTimeout(fallback)
      vid.removeEventListener('canplay', onCanPlay)
    }
  }, [])

  const scrollToActivities = () => {
    document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        /* ── Video: starts hidden+blurred, fades in once ready ── */
        .hero-video {
          transition: opacity 1s ease, filter 1s ease;
          opacity: 0;
          filter: blur(10px) brightness(0.5);
          will-change: opacity, filter;
        }
        .hero-video.video-ready {
          opacity: 1;
          filter: blur(0px) brightness(1);
        }

        /* ── Content stagger ── */
        .hero-label {
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }
        .hero-title {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s;
        }
        .hero-sub {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s;
        }
        .hero-btns {
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.8s ease 0.78s, transform 0.8s ease 0.78s;
        }
        .hero-stats {
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.8s ease 0.96s, transform 0.8s ease 0.96s;
        }
        .hero-scroll {
          opacity: 0;
          transition: opacity 0.8s ease 1.2s;
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

        /* ── Buttons ── */
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
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          will-change: transform;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(201,168,76,0.45);
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
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          will-change: transform;
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.9);
          transform: translateY(-2px);
        }

        /* ── Misc ── */
        .stat-divider { width: 1px; height: 32px; background: rgba(255,255,255,0.2); }
        .location-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 2px; padding: 7px 16px;
        }
        .scroll-line {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.6), transparent);
          margin: 0 auto 8px;
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.1); }
        }
        .corner-tl, .corner-br { position: absolute; width: 40px; height: 40px; pointer-events: none; }
        .corner-tl { top: 24px; left: 24px; border-top: 1.5px solid rgba(201,168,76,0.5); border-left: 1.5px solid rgba(201,168,76,0.5); }
        .corner-br { bottom: 24px; right: 24px; border-bottom: 1.5px solid rgba(201,168,76,0.5); border-right: 1.5px solid rgba(201,168,76,0.5); }
        .vignette { background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%); }
      `}</style>

      {/* ── Video Background ── */}
      <div className="absolute inset-0 w-full h-full">
        {/* Dark green placeholder — matches brand color, visible while video loads */}
        <div className="absolute inset-0" style={{ background: '#0d2415' }} />

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          // @ts-ignore — webkit-playsinline needed for older iOS Safari
          webkit-playsinline="true"
          x5-playsinline="true"
          preload="auto"
          className={`hero-video absolute inset-0 w-full h-full object-cover ${videoReady ? 'video-ready' : ''}`}
          poster="/poster.webp"
          fetchPriority="high"
        >
          <source src="./bg.webm" type="video/webm" />
          <source src="./bg.mp4"  type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 vignette" />
        <div className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to top, rgba(8,24,14,0.9), transparent)' }} />
        <div className="absolute top-0 left-0 right-0 h-24"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)' }} />
      </div>

      <div className="corner-tl" />
      <div className="corner-br" />

      {/* ── Main Content ── */}
      <div className={`relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center ${loaded ? 'loaded' : ''}`}>

        <div className="hero-label mb-8 flex justify-center">
          <div className="location-badge">
            <MapPin size={11} color="#c9a84c" />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a84c' }}>
              Paravur Backwaters · Varkala · Kerala
            </span>
          </div>
        </div>

        <h1
          className="hero-title text-white mb-5"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.6rem, 7vw, 5.2rem)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.01em' }}
        >
          Where the Mangroves
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#e8d49a' }}>Meet Adventure</em>
        </h1>

        <div className="hero-sub flex items-center justify-center gap-4 mb-5">
          <div style={{ height: '1px', width: '40px', background: 'rgba(201,168,76,0.5)' }} />
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.04em' }}>
            Just 20 minutes from Varkala — 7+ unique water experiences
          </p>
          <div style={{ height: '1px', width: '40px', background: 'rgba(201,168,76,0.5)' }} />
        </div>

        <div className="hero-btns flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="tel:+919895023973" className="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Us
          </a>
          <a href="https://wa.me/919744201662?text=Hi!%20I%20would%20like%20to%20book%20an%20experience%20at%20Paravur%20Backwaters." target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Book Now
          </a>
        </div>

        <div className="hero-stats flex items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 600, color: '#e8d49a', lineHeight: 1 }}>500+</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginTop: 4 }}>Happy Guests</div>
          </div>
          <div className="stat-divider" />
          <div className="text-center">
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 600, color: '#e8d49a', lineHeight: 1 }}>4</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginTop: 4 }}>Experiences</div>
          </div>
          <div className="stat-divider" />
          <div className="text-center">
            <div style={{ fontFamily: "'Cormorant Garamond', serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, fontSize: '1.6rem', fontWeight: 600, color: '#e8d49a', lineHeight: 1 }}>
              5 <Star size={14} fill="#e8d49a" color="#e8d49a" style={{ marginTop: 2 }} />
            </div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginTop: 4 }}>Rating</div>
          </div>
          <div className="stat-divider hidden sm:block" />
          <div className="text-center hidden sm:block">
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 600, color: '#e8d49a', lineHeight: 1 }}>4yr</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginTop: 4 }}>Experience</div>
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
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>Scroll</p>
      </div>
    </section>
  )
}