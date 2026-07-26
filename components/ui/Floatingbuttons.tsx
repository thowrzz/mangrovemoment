'use client'

import { useEffect, useState } from 'react'

export function FloatingButtons() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap');

        .fab-wrap {
          position: fixed;
          bottom: 28px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 14px;
          font-family: 'Jost', sans-serif;
        }

        /* ── FAB base ── */
        .fab-btn {
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
          text-decoration: none;
          padding: 0;
          background: none;
          border-radius: 50%;
          width: 58px;
          height: 58px;
        }
        .fab-btn:hover { transform: scale(1.1); }
        .fab-btn:active { transform: scale(0.93); }

        /* ── WA pulse rings ── */
        .wa-pulse-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wa-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.45);
          animation: waPulse 2.4s ease-out infinite;
          pointer-events: none;
        }
        .wa-ring-1 { width: 76px; height: 76px; animation-delay: 0s; }
        .wa-ring-2 { width: 94px; height: 94px; animation-delay: 0.5s; border-color: rgba(37,211,102,0.2); }
        @keyframes waPulse {
          0%   { transform:scale(0.85); opacity:0.8; }
          70%  { transform:scale(1);    opacity:0; }
          100% { transform:scale(1);    opacity:0; }
        }

        /* ── Tooltip ── */
        .fab-tooltip {
          position: absolute;
          right: 74px;
          background: rgba(10,10,10,0.8);
          backdrop-filter: blur(6px);
          color: #fff;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          white-space: nowrap;
          padding: 5px 11px;
          border-radius: 5px;
          pointer-events: none;
          animation: ttIn 0.15s ease;
        }
        @keyframes ttIn {
          from { opacity:0; transform:translateX(6px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .fab-tooltip::after {
          content:'';
          position:absolute;
          left:100%; top:50%;
          transform:translateY(-50%);
          border:5px solid transparent;
          border-left-color:rgba(10,10,10,0.8);
        }

        /* ── Entry animations ── */
        .fab-enter {
          opacity:0;
          animation: fabSlideIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s forwards;
        }
        .fab-enter-2 {
          opacity:0;
          animation: fabSlideIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.25s forwards;
        }
        @keyframes fabSlideIn {
          from { opacity:0; transform:translateY(24px) scale(0.6); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        @media (max-width:480px) {
          .fab-wrap { bottom:20px; right:16px; gap:12px; }
          .fab-btn  { width:52px; height:52px; }
        }
      `}</style>

      {visible && (
        <div className="fab-wrap">

          {/* ── Instagram FAB (CIRCLE) ── */}
          <div style={{ position:'relative', display:'flex', alignItems:'center' }} className="fab-enter">
            {tooltip === 'ig' && <div className="fab-tooltip">Follow on Instagram</div>}
            <a
              href="https://www.instagram.com/varkala_mangrove_moments?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="fab-btn"
              aria-label="Follow us on Instagram"
              onMouseEnter={() => setTooltip('ig')}
              onMouseLeave={() => setTooltip(null)}
              style={{ boxShadow: '0 4px 18px rgba(214,36,159,0.45), 0 2px 6px rgba(0,0,0,0.14)' }}
            >
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="ig-bg" cx="30%" cy="110%" r="130%" gradientUnits="objectBoundingBox">
                    <stop offset="0%"  stopColor="#fdf497"/>
                    <stop offset="8%"  stopColor="#fce080"/>
                    <stop offset="35%" stopColor="#fc8654"/>
                    <stop offset="52%" stopColor="#f2396b"/>
                    <stop offset="70%" stopColor="#c52f9e"/>
                    <stop offset="100%" stopColor="#4f63d2"/>
                  </radialGradient>
                  <radialGradient id="ig-glow" cx="30%" cy="20%" r="55%" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.38)"/>
                    <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                  </radialGradient>
                </defs>
                {/* CIRCLE background — no rounded square */}
                <circle cx="29" cy="29" r="29" fill="url(#ig-bg)"/>
                <circle cx="29" cy="29" r="29" fill="url(#ig-glow)"/>
                {/* Camera body */}
                <rect x="15" y="15" width="28" height="28" rx="8" stroke="white" strokeWidth="2.4" fill="none"/>
                {/* Lens */}
                <circle cx="29" cy="29" r="6.5" stroke="white" strokeWidth="2.4" fill="none"/>
                {/* Inner lens shimmer */}
                <circle cx="29" cy="29" r="3" fill="rgba(255,255,255,0.2)"/>
                {/* Flash dot */}
                <circle cx="37.5" cy="20.5" r="2" fill="white"/>
              </svg>
            </a>
          </div>

          {/* ── WhatsApp FAB (CIRCLE) ── */}
          <div style={{ position:'relative', display:'flex', alignItems:'center' }} className="fab-enter-2">
            {tooltip === 'wa' && <div className="fab-tooltip">Chat on WhatsApp</div>}
            <div className="wa-pulse-wrap">
              <div className="wa-ring wa-ring-1"/>
              <div className="wa-ring wa-ring-2"/>
              <a
                href="https://wa.me/919744201662?text=Hi!%20I%20want%20to%20book%20an%20experience%20at%20Paravur%20Backwaters."
                target="_blank"
                rel="noopener noreferrer"
                className="fab-btn"
                aria-label="Chat on WhatsApp"
                onMouseEnter={() => setTooltip('wa')}
                onMouseLeave={() => setTooltip(null)}
                style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.55), 0 2px 6px rgba(0,0,0,0.12)' }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="wa-bg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2de070"/>
                      <stop offset="100%" stopColor="#1aab55"/>
                    </linearGradient>
                    <radialGradient id="wa-glow" cx="32%" cy="22%" r="55%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.32)"/>
                      <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                    </radialGradient>
                  </defs>
                  {/* CIRCLE background — no rounded square */}
                  <circle cx="30" cy="30" r="30" fill="url(#wa-bg)"/>
                  <circle cx="30" cy="30" r="30" fill="url(#wa-glow)"/>
                  {/* WhatsApp handset */}
                  <path
                    d="M30 13C20.059 13 12 21.059 12 31c0 3.347.906 6.484 2.487 9.176L12 48l8.09-2.117A17.902 17.902 0 0030 49c9.941 0 18-8.059 18-18S39.941 13 30 13z"
                    fill="rgba(255,255,255,0.12)"
                  />
                  <path
                    d="M38.5 34.1c-.38-.19-2.24-1.1-2.59-1.23-.34-.12-.6-.18-.85.19-.25.38-.97 1.23-1.19 1.48-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.05-1.88-1.13-.99-1.89-2.22-2.11-2.59-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.09-.19-.85-2.06-1.17-2.82-.31-.74-.62-.64-.85-.64-.22-.01-.47-.01-.72-.01s-.66.09-1.01.47c-.35.38-1.32 1.29-1.32 3.15s1.36 3.65 1.55 3.9c.19.25 2.68 4.09 6.49 5.73.91.39 1.62.62 2.17.8.91.28 1.74.24 2.39.14.73-.11 2.24-.92 2.56-1.8.31-.88.31-1.64.22-1.8-.09-.16-.34-.25-.72-.44z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

        </div>
      )}
    </>
  )
}