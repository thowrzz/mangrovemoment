import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { Clock, BookOpen, ArrowRight } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'

export const metadata: Metadata = {
  title: 'Varkala Backwaters Blog & Kayaking Guides | Mangrove Moments',
  description: 'Read local travel guides, tips, and itineraries for mangrove kayaking, country boat rides, and things to do near Varkala, Kerala.',
  keywords: ['things to do near Varkala', 'Varkala travel guides', 'Paravur lake blog', 'mangrove forest tour tips'],
  alternates: {
    canonical: '/blog',
  },
}

const blogPosts = [
  {
    slug: 'varkala-mangrove-kayaking-guide',
    title: 'Complete Guide to Mangrove Kayaking Near Varkala, Kerala',
    desc: 'Everything you need to know about exploring the hidden mangrove forest tunnels of Paravur Backwaters. Slot timings, prices, safety tips, and more.',
    image: '/Kayaking.png',
    date: 'June 5, 2026',
    readTime: '6 min read'
  },
  {
    slug: 'sunrise-vs-sunset-kayaking',
    title: 'Best Sunrise vs Sunset Kayaking in Paravur Backwaters: Which is Best?',
    desc: 'Comparing the magical morning mist slots with golden sunset hour reflections on Paravur Lake. Find the best slot for your camera and vibe.',
    image: '/two.jpg',
    date: 'May 28, 2026',
    readTime: '4 min read'
  },
  {
    slug: 'best-backwater-activities-varkala',
    title: 'Best Backwater Activities Near Varkala for Families & Couples',
    desc: 'From slow traditional country boats to high-speed bumper sofa rides. A curated list of things to do on Paravur Lake for every traveler type.',
    image: '/contry.jpg',
    date: 'May 15, 2026',
    readTime: '5 min read'
  },
  {
    slug: 'family-guide-paravur-boat-rides',
    title: 'Family Guide to Paravur Backwaters Boat Rides & Water Sports',
    desc: 'Planning a family outing near Varkala? Learn about child safety vests, stable country boats, coracle rides, and booking tips for groups.',
    image: '/countryboating.webp',
    date: 'May 02, 2026',
    readTime: '6 min read'
  },
  {
    slug: 'first-time-mangrove-kayaking-kerala',
    title: 'What to Expect on Your First Mangrove Kayaking Trip in Kerala',
    desc: 'Worried about balance or not knowing how to swim? Here is a step-by-step checklist on clothing, equipment, guides, and beginner safety.',
    image: '/kayaking1.webp',
    date: 'April 20, 2026',
    readTime: '4 min read'
  }
]

export default function BlogIndexPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f7f5f0]">
        <Navbar />

        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0d2415 0%, #06160d 100%)',
            paddingTop: '160px',
            paddingBottom: '80px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: '16px',
              }}
            >
              Local Guides
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              Varkala Backwaters <br />
              <span style={{ fontStyle: 'italic', color: '#e8d49a' }}>Travel Blog</span>
            </h1>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '1rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Local tips, safety checklists, itineraries, and stories written by our naturalist guides to help you plan the perfect backwater experience.
            </p>
          </div>
        </section>

        {/* Blog Posts List */}
        <section style={{ padding: '80px 24px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'grid',
                  gridTemplateColumns: '300px 1fr',
                  gap: '32px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                }}
                className="md-blog-card"
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '100%', minHeight: '200px' }} className="md-blog-img-wrap">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '32px 32px 32px 0', fontFamily: "'Jost', sans-serif" }} className="md-blog-content">
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontSize: '0.72rem', color: '#999', marginBottom: '12px' }}>
                    <span>{post.date}</span>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#ccc' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={11} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 600, color: '#0d2415', marginBottom: '12px', lineHeight: 1.25 }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: '#0d2415', textDecoration: 'none', transition: 'color 0.2s' }} className="blog-title-link">
                      {post.title}
                    </Link>
                  </h2>

                  <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, fontWeight: 300, marginBottom: '20px' }}>
                    {post.desc}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#c9a84c',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    Read Full Article
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
        <FloatingButtons />
      </main>

      <style>{`
        @media (max-width: 768px) {
          .md-blog-card {
            grid-template-columns: 1fr !important;
          }
          .md-blog-img-wrap {
            height: 220px !important;
          }
          .md-blog-content {
            padding: 24px !important;
          }
        }
        .blog-title-link:hover {
          color: #c9a84c !important;
        }
      `}</style>
    </>
  )
}
