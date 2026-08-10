import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { Star, MessageCircle, Heart, Shield, Users, ArrowUpRight } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'

export const metadata: Metadata = {
  title: 'Guest Reviews | Mangrove Moments Varkala Kayaking',
  description: 'Read 580+ verified guest reviews for Mangrove Moments. 5.0★ rating for mangrove kayaking, boat rides & water sports at Paravur Lake near Varkala. Book your adventure.',
  keywords: ['Varkala mangrove kayaking reviews', 'mangrove moments testimonials', 'Paravur lake boating rating', 'things to do near Varkala reviews'],
  alternates: {
    canonical: '/reviews',
  },
}

export default function ReviewsPage() {
  const PRIMARY_WA = '919744201662'

  const reviewCategories = [
    {
      title: 'Why Families Like It',
      icon: <Users size={18} color="#c9a84c" />,
      desc: 'Infant-sized life vests, extremely stable wooden country boats, and patient guides make it a safe, stress-free outing for grandparents and children alike.',
      reviews: [
        {
          name: 'Rajesh Kumar',
          location: 'Bangalore',
          text: 'We took our entire family including parents and kids. The traditional country boat ride was so calm and peaceful, and the kids absolutely loved the coracle spin at the end. Incredibly safe and professionally guided.',
          rating: 5,
        },
        {
          name: 'Shreya Patel',
          location: 'Ahmedabad',
          text: 'Super friendly local crew. They helped my elderly parents board the country boat with extreme care. The mangrove tunnels are narrow and beautiful. Highly recommended for family outings!',
          rating: 5,
        }
      ]
    },
    {
      title: 'Why Couples Book Sunrise & Sunset',
      icon: <Heart size={18} color="#c9a84c" />,
      desc: 'Mirror-flat water, cool breeze, and stunning golden light make our sunrise (5:30 AM) and sunset (4:30 PM) slots a favorite for romantic couples and photographers.',
      reviews: [
        {
          name: 'Priya Sharma',
          location: 'Mumbai',
          text: 'The sunrise double kayaking was magical. The water was like a mirror, reflecting the coconut trees. We paddled through the mangrove tunnels with just the sound of birds. A highlight of our Kerala trip.',
          rating: 5,
        },
        {
          name: 'Arjun & Neha',
          location: 'Delhi',
          text: 'Booked the sunset slot for kayaking. The golden hour light filtering through the mangrove branches is something we will never forget. A must-do if you are staying in Varkala.',
          rating: 5,
        }
      ]
    },
    {
      title: 'Why Beginners Feel Safe',
      icon: <Shield size={18} color="#c9a84c" />,
      desc: 'Our guides provide 1-on-1 instruction before entering the water. We use top-tier, high-stability equipment, and life vests are mandatory and checked.',
      reviews: [
        {
          name: 'Anjali Menon',
          location: 'Kochi',
          text: 'I was terrified of kayaking because I do not know how to swim. The guides at Mangrove Moments explained everything so patiently. Within 10 minutes, I was paddling by myself. The life vest keeps you super safe.',
          rating: 5,
        },
        {
          name: 'David Miller',
          location: 'London',
          text: 'First time paddle boarding (SUP). The lake was completely calm and the instructor stayed next to me until I found my balance. Terrific experience, high safety standards.',
          rating: 5,
        }
      ]
    }
  ]

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
              Guest Testimonials
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              Guest Reviews for Mangrove Moments — Varkala Backwater Adventures
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
              Read authentic feedback from Google reviews and see why tourists staying in Varkala rate us 5★ for backwater sports.
            </p>
          </div>
        </section>

        {/* Aggregate trust signals bar */}
        <section style={{ background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.06)', padding: '24px 0' }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 24px',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              fontFamily: "'Jost', sans-serif",
            }}
          >
            {[
              { value: '5.0 ★', label: 'Google Rating' },
              { value: '580+', label: 'Verified Reviews' },
              { value: '100%', label: 'Safety Record' },
              { value: 'Zero', label: 'Hidden Charges' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: '#0d2415' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginTop: 4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Categories */}
        <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          {reviewCategories.map((category, catIdx) => (
            <div key={catIdx} style={{ marginBottom: '64px' }}>
              {/* Category Header */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {category.icon}
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.8rem',
                    fontWeight: 600,
                    color: '#0d2415',
                  }}
                >
                  {category.title}
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 300,
                  color: '#666',
                  maxWidth: '700px',
                  marginBottom: '28px',
                  lineHeight: 1.6,
                }}
              >
                {category.desc}
              </p>

              {/* Grid of review cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                }}
              >
                {category.reviews.map((rev, revIdx) => (
                  <div
                    key={revIdx}
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(0,0,0,0.06)',
                      padding: '32px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
                      position: 'relative',
                    }}
                  >
                    {/* Stars */}
                    <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                      {Array.from({ length: rev.rating }).map((_, starIdx) => (
                        <Star key={starIdx} size={12} fill="#c9a84c" color="#c9a84c" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.05rem',
                        fontStyle: 'italic',
                        color: '#333',
                        lineHeight: 1.7,
                        marginBottom: '24px',
                      }}
                    >
                      "{rev.text}"
                    </p>

                    {/* Divider */}
                    <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', marginBottom: '16px' }} />

                    {/* Author info */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: '#0d2415',
                          }}
                        >
                          {rev.name}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: '0.68rem',
                            color: '#999',
                            marginTop: 1,
                          }}
                        >
                          📍 {rev.location}
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: '0.62rem',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#c9a84c',
                          background: 'rgba(201,168,76,0.08)',
                          padding: '3px 8px',
                          borderRadius: '1px',
                        }}
                      >
                        Verified Guest
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Call to action */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0d2415 0%, #1a3c2e 100%)',
            padding: '64px 24px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: "'Jost', sans-serif" }}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '2rem',
                fontWeight: 300,
                color: '#fff',
                marginBottom: '12px',
              }}
            >
              Write Your Own Story
            </h3>
            <p
              style={{
                fontSize: '0.88rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '32px',
                lineHeight: 1.6,
              }}
            >
              Book your sunrise or sunset adventure today and see why so many travelers call us the highlight of their Kerala trip.
            </p>
            <a
              href={`https://wa.me/${PRIMARY_WA}?text=Hi!%20I've%20seen%20your%20guest%20reviews%20and%20would%20like%20to%20reserve%20a%20slot%20at%20Paravur%20Backwaters.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25d366',
                color: '#fff',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '15px 36px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                borderRadius: '2px',
              }}
            >
              <MessageCircle size={15} />
              Book on WhatsApp
              <ArrowUpRight size={13} color="#fff" />
            </a>
          </div>
        </section>

        <Footer />
        <FloatingButtons />
      </main>
    </>
  )
}
