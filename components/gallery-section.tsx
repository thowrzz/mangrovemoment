'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn, Instagram, ArrowRight } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: './contry.jpg',
    title: 'Country Boating',
    tag: 'Backwaters',
    span: 'col-span-2 row-span-2', // large featured
  },
  {
    id: 2,
    src: './kayaking1.png',
    title: 'Kayaking Adventure',
    tag: 'Kayaking',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    src: './padil.jpg',
    title: 'Paddle Boarding',
    tag: 'SUP',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    src: './two.jpg',
    title: 'Golden Sunset',
    tag: 'Nature',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 5,
    src: './group.png',
    title: 'ATV Adventure',
    tag: 'Off-Road',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    src: './speed.jpg',
    title: 'Speed Boat Ride',
    tag: 'Speed Boat',
    span: 'col-span-1 row-span-1',
  },
]

export function GallerySection() {
  const [lightbox, setLightbox] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section
      id="gallery"
      style={{ background: '#fff', paddingTop: '96px', paddingBottom: '96px', fontFamily: "'Jost', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .gal-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 200px);
          gap: 10px;
        }
        @media (max-width: 768px) {
          .gal-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .gal-item { grid-column: span 1 !important; grid-row: span 1 !important; height: 200px; }
        }
        @media (max-width: 480px) {
          .gal-grid { grid-template-columns: 1fr; }
          .gal-item { height: 220px; }
        }

        .gal-item {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          background: #e0ddd6;
        }

        .gal-item img {
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .gal-item:hover img {
          transform: scale(1.08);
        }

        .gal-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,24,14,0.85) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
        }
        .gal-item:hover .gal-overlay {
          opacity: 1;
        }

        .gal-zoom-icon {
          position: absolute;
          top: 14px; right: 14px;
          width: 34px; height: 34px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s ease 0.05s;
        }
        .gal-item:hover .gal-zoom-icon {
          opacity: 1;
          transform: scale(1);
        }

        .gal-tag {
          display: inline-block;
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #c9a84c;
          background: rgba(201,168,76,0.15);
          border: 1px solid rgba(201,168,76,0.3);
          padding: 3px 8px;
          margin-bottom: 6px;
        }

        .gal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.1;
        }

        /* Lightbox */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.94);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          backdrop-filter: blur(6px);
          animation: lbIn 0.25s ease;
        }
        @keyframes lbIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        .lightbox-inner {
          position: relative;
          max-width: 900px;
          width: 100%;
          animation: lbScale 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        @keyframes lbScale {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .lightbox-close {
          position: absolute;
          top: -44px; right: 0;
          background: none;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.7);
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .lightbox-close:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
          border-color: rgba(255,255,255,0.5);
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
        .divider-line {
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a84c, transparent);
          width: 60px;
          margin: 0 auto;
        }

        .view-btn {
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: #0d2415;
          color: #c9a84c;
          border: none;
          padding: 13px 32px;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          text-decoration: none;
        }
        .view-btn:hover {
          background: #1a3c2e;
          box-shadow: 0 8px 24px rgba(13,36,21,0.3);
          transform: translateY(-1px);
        }

        .insta-btn {
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: transparent;
          color: #0d2415;
          border: 1px solid rgba(13,36,21,0.25);
          padding: 13px 28px;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          text-decoration: none;
        }
        .insta-btn:hover {
          background: rgba(13,36,21,0.05);
          border-color: #0d2415;
          transform: translateY(-1px);
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p className="section-label" style={{ marginBottom: '14px' }}>Our Moments</p>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Memories Made on
            <em style={{ fontStyle: 'italic', color: '#c9a84c' }}> Paravur Lake</em>
          </h2>
          <div className="divider-line" style={{ marginBottom: '18px' }} />
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 300,
            color: '#777',
            maxWidth: '420px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Real moments from our adventurers —<br />each trip as unique as the people on it
          </p>
        </div>

        {/* ── Masonry-style Grid ── */}
        <div className="gal-grid" style={{ marginBottom: '48px' }}>
          {galleryImages.map((img, i) => {
            // Grid placement for the mosaic layout
            const placements = [
              { gridColumn: '1 / 3', gridRow: '1 / 3' }, // large featured
              { gridColumn: '3 / 4', gridRow: '1 / 2' },
              { gridColumn: '4 / 5', gridRow: '1 / 2' },
              { gridColumn: '3 / 4', gridRow: '2 / 4' },
              { gridColumn: '4 / 5', gridRow: '2 / 3' },
              { gridColumn: '4 / 5', gridRow: '3 / 4' },
            ]

            return (
              <div
                key={img.id}
                className="gal-item"
                style={placements[i]}
                onClick={() => setLightbox(img)}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />

                {/* Zoom icon */}
                <div className="gal-zoom-icon">
                  <ZoomIn size={15} />
                </div>

                {/* Hover overlay */}
                <div className="gal-overlay">
                  <div className="gal-tag">{img.tag}</div>
                  <div className="gal-title">{img.title}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── CTAs ── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button className="view-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Book Your Experience
            <ArrowRight size={14} />
          </button>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-btn"
          >
            <Instagram size={14} />
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className="lightbox-backdrop" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>
              <X size={16} />
            </button>

            {/* Image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', background: '#111' }}>
              <Image
                src={lightbox.src.replace('w=600&h=400', 'w=1200&h=750')}
                alt={lightbox.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Caption bar */}
            <div style={{
              background: '#0d2415',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.6rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                  marginBottom: 4,
                }}>
                  {lightbox.tag}
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#fff',
                }}>
                  {lightbox.title}
                </div>
              </div>
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.1em',
              }}>
                Paravur Backwaters · Kollam
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}