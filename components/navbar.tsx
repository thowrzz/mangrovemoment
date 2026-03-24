'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, MessageCircle, ChevronDown, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const activities = [
  { label: 'Country Boating', icon: '⛵' },
  { label: 'Kayaking', icon: '🛶' },
  { label: 'Stand Up Paddle', icon: '🏄' },
  { label: 'Coracle Ride', icon: '🪵' },
  { label: 'ATV Ride', icon: '🏍️' },
  { label: 'Speed Boat', icon: '🚤' },
]

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#activities', label: 'Activities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activitiesOpen, setActivitiesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .nav-root {
          font-family: 'Jost', sans-serif;
        }

        /* Scrolled glass */
        .nav-scrolled {
          background: rgba(8, 24, 14, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(201,168,76,0.15), 0 8px 32px rgba(0,0,0,0.3);
        }
        .nav-transparent {
          background: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%);
        }

        /* Logo text */
        .logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: 0.01em;
          color: #fff;
          line-height: 1;
        }
        .logo-sub {
          font-family: 'Jost', sans-serif;
          font-size: 0.55rem;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #c9a84c;
          line-height: 1;
          margin-top: 2px;
        }

        /* Nav links */
        .nav-link {
          position: relative;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          transition: color 0.25s;
          padding-bottom: 4px;
          cursor: pointer;
          background: none;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #c9a84c;
          transition: width 0.3s ease;
        }
        .nav-link:hover {
          color: #fff;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* Book button */
        .btn-book {
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #c9a84c, #e8c97a, #c9a84c);
          color: #0d2415;
          border: none;
          padding: 9px 22px;
          cursor: pointer;
          clip-path: polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%);
          transition: all 0.3s ease;
        }
        .btn-book:hover {
          background: linear-gradient(135deg, #e8c97a, #c9a84c, #e8c97a);
          box-shadow: 0 6px 24px rgba(201,168,76,0.4);
          transform: translateY(-1px);
        }

        /* WA button */
        .btn-wa {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.7);
          transition: all 0.25s;
          text-decoration: none;
        }
        .btn-wa:hover {
          border-color: #25d366;
          color: #25d366;
          background: rgba(37,211,102,0.08);
        }

        /* Dropdown */
        .activity-dropdown {
          background: rgba(8,24,14,0.97) !important;
          border: 1px solid rgba(201,168,76,0.2) !important;
          backdrop-filter: blur(20px);
          border-radius: 4px;
          padding: 6px;
          min-width: 200px;
        }
        .activity-item {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.75) !important;
          padding: 9px 14px !important;
          border-radius: 3px;
          transition: all 0.2s;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .activity-item:hover {
          background: rgba(201,168,76,0.12) !important;
          color: #e8d49a !important;
        }

        /* Mobile drawer */
        .mobile-drawer {
          background: #06160d !important;
          border-left: 1px solid rgba(201,168,76,0.15) !important;
        }
        .mobile-link {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          transition: color 0.2s;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: block;
          cursor: pointer;
        }
        .mobile-link:hover { color: #c9a84c; }

        .mobile-btn-book {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #c9a84c, #e8c97a);
          color: #0d2415;
          border: none;
          padding: 14px;
          width: 100%;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }

        .gold-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #c9a84c;
          display: inline-block;
        }
      `}</style>

      <nav className={`nav-root fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-[72px]">

            {/* ── Logo ── */}
            <Link href="#home" className="flex items-center gap-3 group" style={{ textDecoration: 'none' }}>
              {/* Icon mark */}
              {/* Logo image */}
<div style={{
  width: 44, height: 44,
  borderRadius: '50%',
  overflow: 'hidden',
  border: '1px solid rgba(201,168,76,0.4)',
  flexShrink: 0,
  transition: 'all 0.3s',
}}>
  <img
    src="./logo.png"
    alt="Mangrove Moments Logo"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
              <div>
                <div className="logo-text">Mangrove Moments</div>
                <div className="logo-sub">Paravur · Varkala</div>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                if (link.label === 'Activities') {
                  return (
                    <DropdownMenu key={link.href}>
                      <DropdownMenuTrigger asChild>
                        <button className="nav-link">
                          {link.label}
                          <ChevronDown size={12} style={{ opacity: 0.6 }} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="activity-dropdown" align="center" sideOffset={12}>
                        {activities.map((a) => (
                          <DropdownMenuItem key={a.label} className="activity-item">
                            <span>{a.icon}</span>
                            {a.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )
                }
                return (
                  <Link key={link.href} href={link.href} className="nav-link" style={{ textDecoration: 'none' }}>
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* ── Right CTAs ── */}
            <div className="hidden md:flex items-center gap-4">
              <a href="https://wa.me/919744201662" target="_blank" rel="noopener noreferrer" className="btn-wa" aria-label="WhatsApp">
                <MessageCircle size={16} />
              </a>
              <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)' }} />
              <button className="btn-book" onClick={() => scrollTo('contact')}>
                Book Now
              </button>
            </div>

            {/* ── Mobile Hamburger ── */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
  <button
    className="lg:hidden"
    style={{
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: '3px',
      width: 38, height: 38,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      transition: 'border-color 0.3s, background 0.3s',
      ...(mobileOpen ? {
        borderColor: 'rgba(201,168,76,0.4)',
        background: 'rgba(201,168,76,0.08)',
      } : {}),
    }}
  >
    {/* Hamburger lines */}
    <span style={{
      position: 'absolute',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '5px',
      transition: 'opacity 0.25s, transform 0.25s',
      opacity: mobileOpen ? 0 : 1,
      transform: mobileOpen ? 'rotate(90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
    }}>
      <span style={{ width: 18, height: 1.5, background: '#fff', borderRadius: 2, display: 'block', transition: 'all 0.3s' }} />
      <span style={{ width: 13, height: 1.5, background: '#fff', borderRadius: 2, display: 'block', transition: 'all 0.3s' }} />
      <span style={{ width: 18, height: 1.5, background: '#fff', borderRadius: 2, display: 'block', transition: 'all 0.3s' }} />
    </span>

    {/* X icon */}
    <span style={{
      position: 'absolute',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'opacity 0.25s, transform 0.25s',
      opacity: mobileOpen ? 1 : 0,
      transform: mobileOpen ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.5)',
      color: '#c9a84c',
    }}>
      <X size={17} strokeWidth={2} />
    </span>
  </button>
</SheetTrigger>

              <SheetContent side="left" className="mobile-drawer w-[300px] p-0">
                <div className="flex flex-col h-full">
                  {/* Drawer header */}
                  <div style={{
                    padding: '24px 28px',
                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <div>
                      <div className="logo-text">Mangrove Moments</div>
                      <div className="logo-sub" style={{ marginTop: 4 }}>Paravur · Varkala</div>
                    </div>
                    <button onClick={() => setMobileOpen(false)}
                      style={{ color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer' }}>
                      <X size={18} />
                    </button>
                  </div>

                  {/* Nav links */}
                  <div style={{ padding: '16px 28px', flex: 1 }}>
                    {navLinks.map((link) => {
                      if (link.label === 'Activities') {
                        return (
                          <div key={link.href}>
                            <div className="mobile-link" style={{ color: 'rgba(255,255,255,0.4)', cursor: 'default', marginBottom: 0 }}>
                              Activities
                            </div>
                            <div style={{ paddingLeft: 12, borderLeft: '1px solid rgba(201,168,76,0.3)', marginBottom: 8, marginTop: 4 }}>
                              {activities.map((a) => (
                                <Link key={a.label} href="#activities"
                                  onClick={() => setMobileOpen(false)}
                                  style={{
                                    display: 'flex', alignItems: 'center', gap: 10,
                                    padding: '8px 0',
                                    fontFamily: "'Jost', sans-serif",
                                    fontSize: '0.78rem',
                                    color: 'rgba(255,255,255,0.65)',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s',
                                  }}
                                >
                                  <span style={{ fontSize: '1rem' }}>{a.icon}</span>
                                  {a.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )
                      }
                      return (
                        <Link key={link.href} href={link.href} className="mobile-link"
                          onClick={() => setMobileOpen(false)}
                          style={{ textDecoration: 'none' }}>
                          {link.label}
                        </Link>
                      )
                    })}
                  </div>

                  {/* Drawer footer */}
                  <div style={{ padding: '20px 28px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <button className="mobile-btn-book" onClick={() => scrollTo('contact')}>
                      Book Now
                    </button>
                    <a href="https://wa.me/919744201662" target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        padding: '12px',
                        border: '1px solid rgba(37,211,102,0.3)',
                        borderRadius: '3px',
                        color: '#25d366',
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        background: 'rgba(37,211,102,0.05)',
                      }}
                    >
                      <MessageCircle size={15} />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Gold hairline at bottom when scrolled */}
        {isScrolled && (
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }} />
        )}
      </nav>
    </>
  )
}