import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { Clock, Calendar, ArrowLeft, MessageCircle, Shield, CheckCircle } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'
const PRIMARY_WA = '919744201662'


// ─── Blog Posts Content ─────────────────────────────────────────────────────────
const posts = {
  'varkala-mangrove-kayaking-guide': {
    slug: 'varkala-mangrove-kayaking-guide',
    title: 'Varkala Mangrove Kayaking Guide 2026 — Paravur Lake Slots, Prices & Tips',
    metaTitle: 'Varkala Mangrove Kayaking Guide 2026 | Paravur Lake Slots & Prices',
    metaDesc: 'Complete guide to mangrove kayaking near Varkala. Best slots, what to wear, safety, prices & how to book at Paravur Lake. Sunrise & sunset tours from ₹700.',
    date: 'June 5, 2026',
    readTime: '6 min read',
    image: '/Kayaking.png',
    intro: 'Exploring the ancient mangrove forest tunnels of Paravur Backwaters is quickly becoming one of the top things to do near Varkala. Unlike typical beach activities, kayaking through these silent canals lets you get up close with Kerala\'s unique backwater ecosystem. Here is our complete local guide to planning your trip.',
    content: `
      <h2>Why Paravur Backwaters is Unique for Kayaking</h2>
      <p>Just 20 minutes north of Varkala Cliff lies Paravur Lake, home to dense, protected mangrove forests. Because motorized speedboats are restricted inside these narrow channels, the water remains glassy and quiet. Gliding in a kayak is the only way to weave under the low-hanging root systems and explore hidden tunnels that open up into calm lagoons.</p>
      <p>If you are planning your adventure, we recommend reading more about our guided <a href="/activities/kayaking">Varkala mangrove kayaking</a> trips. We offer top-tier equipment and trained local naturalists who lead every group.</p>

      <h2>Choosing Your Slot: Sunrise vs Sunset</h2>
      <p>Slot timing makes a huge difference in your backwater experience:</p>
      <ul>
        <li><strong>Sunrise Slot (5:30 AM):</strong> This is the absolute peak window. The lake is mirror-flat, mist hangs over the coconut groves, temperatures are cool, and local birds (kingfishers, herons, egrets) are actively hunting.</li>
        <li><strong>Sunset Slot (4:30 PM):</strong> Great for a relaxed paddle under golden skies. The breeze is cool, and the golden hour light filtering through the mangrove branches is spectacular for photography.</li>
      </ul>

      <h2>What to Wear and Bring</h2>
      <p>Prepare for a brief splash of water and the warm tropical sun:</p>
      <ul>
        <li><strong>Clothing:</strong> Lightweight activewear or quick-dry polyester T-shirts and shorts. Avoid heavy denim.</li>
        <li><strong>Footwear:</strong> Sandals with straps, flip-flops, or water shoes. You will step into shallow water when boarding.</li>
        <li><strong>Gear:</strong> Sunglasses with strap, sun hat, sunblock, and waterproof drybags for your phone (provided on our tours). Bring a change of dry clothes to leave in your car.</li>
      </ul>

      <h2>How to Book and Find Us</h2>
      <p>Booking in advance is highly recommended during peak tourist season (October to May). Our boatclub is located at Nedungolam, Paravur, near Varkala. Check out our detailed driving guide and route maps on our dedicated <a href="/location-paravur-backwaters">Paravur Backwaters near Varkala</a> page to see distances and driving times from Varkala Cliff and beach resorts.</p>
    `
  },
  'sunrise-vs-sunset-kayaking': {
    slug: 'sunrise-vs-sunset-kayaking',
    title: 'Sunrise vs Sunset Kayaking near Varkala — Which Paravur Lake Slot to Choose?',
    metaTitle: 'Sunrise vs Sunset Kayaking Varkala | Which Slot is Better?',
    metaDesc: 'Compare sunrise and sunset kayaking at Paravur Lake near Varkala. Best time for photos, bird watching, weather & crowds. Local guide\'s honest comparison.',
    date: 'May 28, 2026',
    readTime: '4 min read',
    image: '/two.jpg',
    intro: 'Timings-based intent converts well for backwater tourism. If you are staying in Varkala and looking for a memorable kayaking adventure, you might be wondering whether to book our early 5:30 AM sunrise session or the golden 4:30 PM sunset session. Let\'s compare both.',
    content: `
      <h2>The Case for Sunrise Kayaking (5:30 AM – 7:30 AM)</h2>
      <p>For wildlife lovers and serious paddlers, the morning slot is undefeated. At dawn, the winds are at their lowest, leaving the surface of Paravur Lake completely mirror-like. Paddling over this glassy surface feels like sliding on ice, reflecting the coconut groves perfectly.</p>
      <p>Morning is also when the mangrove bird life is active. You will hear kingfishers, herons, and egrets calling as they search for food. The air is cool and refreshing, making the paddling completely effortless.</p>
      <p>Ready to slide onto the water? Learn more about booking a slot for <a href="/activities/kayaking">Varkala mangrove kayaking</a> and experience the quiet mist of dawn.</p>

      <h2>The Case for Sunset Kayaking (4:30 PM – 6:00 PM)</h2>
      <p>If you aren\'t an early riser, the sunset slot offers a spectacular alternative. Starting in the cooler late afternoon, you will paddle into the mangrove canals as the sun dips low. The light filters through the roots and branches, creating a golden, dappled light pattern that is ideal for romantic couples and photographers.</p>
      <p>As the sun sets over the lake, the cool evening breeze sets in. It is a peaceful, slow-paced way to end a day of sightseeing near Varkala.</p>

      <h2>Summary: Which Should You Book?</h2>
      <p>Book **Sunrise** if you want bird watching, mirror-like water reflections, and cool mist. Book **Sunset** if you want a relaxed, romantic golden hour experience. Regardless of your choice, make sure to plan your travel. You can find detailed directions and pick-up options on our <a href="/location-paravur-backwaters">Paravur Backwaters near Varkala</a> page.</p>
    `
  },
  'best-backwater-activities-varkala': {
    slug: 'best-backwater-activities-varkala',
    title: 'Best Backwater Activities near Varkala — Paravur Lake Adventure Guide',
    metaTitle: 'Best Backwater Activities Varkala | Paravur Lake Adventures',
    metaDesc: 'Discover the best backwater activities near Varkala. Kayaking, country boating, SUP, coracle rides & water sports at Paravur Lake. Local guide recommendations.',
    date: 'May 15, 2026',
    readTime: '5 min read',
    image: '/contry.jpg',
    intro: 'Varkala is famous for its sea cliff and sandy beaches, but just 20 minutes away lies the calm backwater ecosystem of Paravur Lake. If you are looking for things to do near Varkala, a day trip to these backwaters offers experiences for every type of traveler. Here are the top activities to try.',
    content: `
      <h2>1. Guided Mangrove Kayaking</h2>
      <p>The most immersive way to explore the backwaters. Kayaking allows you to slip into narrow, low-hanging mangrove tunnels that are completely unreachable by larger boats. It is beginner-friendly and requires no swimming experience. Read the details on our guided <a href="/activities/kayaking">Varkala mangrove kayaking</a> page.</p>

      <h2>2. Traditional Country Boat Ride</h2>
      <p>If you prefer a fully passive, relaxing experience, the traditional wooden country boat is the perfect choice. Paddled gently by a local guide, it offers a shaded, slow-paced look at lake villages and wildlife. It is highly popular with families, senior citizens, and photographers. Find rates on our <a href="/activities/country-boating">Varkala backwater boat ride</a> details page.</p>

      <h2>3. Stand Up Paddleboarding (SUP)</h2>
      <p>Test your balance on the glassy lake water. SUP combines a core body workout with active meditation. The flat waters of Paravur Lake are ideal for beginners to learn board balance. Check out our lessons on our <a href="/activities/stand-up-paddle">stand up paddle Varkala</a> page.</p>

      <h2>4. Speed Boat & Shoreline Water Sports</h2>
      <p>For thrill-seekers, we offer speedboat runs, bumper rides, banana boats, and quad bike tracks along the lake edge. These high-speed adventures are grouped on our dedicated <a href="/activities/water-sports">water sports near Varkala</a> page, offering excellent value for groups.</p>

      <h2>Getting to Paravur Lake</h2>
      <p>All these experiences launch from Nedungolam, Paravur. Check out our map and driving directions on our <a href="/location-paravur-backwaters">Paravur Backwaters near Varkala</a> location guide to plan your transit.</p>
    `
  },
  'family-guide-paravur-boat-rides': {
    slug: 'family-guide-paravur-boat-rides',
    title: 'Family Guide to Paravur Lake Boat Rides near Varkala',
    metaTitle: 'Family Boat Rides Paravur Lake | Kid-Friendly Varkala Activities',
    metaDesc: 'Plan a family-friendly boat ride at Paravur Lake near Varkala. Safe for kids, life jackets included, calm waters. Country boat & coracle options. Group discounts.',
    date: 'May 2, 2026',
    readTime: '6 min read',
    image: '/countryboating.webp',
    intro: 'Traveling with children, parents, or grandparents? Varkala beaches can sometimes have strong sea currents and waves. If you are looking for a calm, child-safe, and relaxing water adventure, a family day trip to Paravur Backwaters is the perfect alternative. Here is how to plan it.',
    content: `
      <h2>Why Families Prefer Paravur Lake</h2>
      <p>Unlike the sea, the backwaters are completely flat. There are no tides, waves, or undertows. This makes it an incredibly safe setting for children and senior citizens. The calm waters mean you can relax on a boat without worrying about motion sickness or rough movements.</p>

      <h2>The Best Family Activity: Traditional Country Boat</h2>
      <p>Our hand-crafted wooden country boat is the flagship family experience. Driven gently by a local oarsman, it accommodates up to 8 passengers. Parents can sit back and take photos while children spot herons and herons nesting in the roots. Read more about rates and bookings on our <a href="/activities/country-boating">Varkala backwater boat ride</a> page.</p>

      <h2>Children and Safety Gear</h2>
      <p>Safety is mandatory. We provide special, small-sized certified life vests for children and infants. Our ramp staff assists with boarding and landing, ensuring a secure grip. Our local guides have led family groups for over 4 years with a flawless safety record.</p>

      <h2>Finding Us & Parking</h2>
      <p>We are situated at Nedungolam, 20 minutes from Varkala Cliff. We offer private, free parking for cars and tourist coaches. Get detailed travel times and route details on our <a href="/location-paravur-backwaters">Paravur Backwaters near Varkala</a> page.</p>
    `
  },
  'first-time-mangrove-kayaking-kerala': {
    slug: 'first-time-mangrove-kayaking-kerala',
    title: 'First-Time Mangrove Kayaking in Kerala — Beginner\'s Guide near Varkala',
    metaTitle: 'First Time Mangrove Kayaking Kerala | Beginner\'s Guide Varkala',
    metaDesc: 'Never kayaked before? This beginner\'s guide covers everything for your first mangrove kayaking trip near Varkala. Safety, what to expect, what to wear & tips.',
    date: 'April 20, 2026',
    readTime: '4 min read',
    image: '/kayaking1.webp',
    intro: 'If you have never kayaked before, paddling into a mangrove forest can feel intimidating. Do I need to be a swimmer? What if the kayak flips? Here is a step-by-step checklist written by our local guides to ease your mind and prepare you for a magical experience.',
    content: `
      <h2>1. The Swimming Myth: No Skills Required</h2>
      <p>The most common question we get is: *"Do I need to know how to swim?"* The answer is a definitive **no**. Our sits-on-top kayaks are designed for extreme stability, making them almost impossible to roll. More importantly, high-buoyancy certified life jackets are mandatory and provided for every single guest. If you slide into the water, you will immediately float upright.</p>
      <p>If you are looking to book a beginner-friendly session, check out our guided <a href="/activities/kayaking">Varkala mangrove kayaking</a> details.</p>

      <h2>2. What the Paddling is Like</h2>
      <p>Paddling is simple. Before you launch, our guides show you how to hold the paddle and perform forward, backward, and sweep strokes. The backwater lake is calm, meaning you don't have to fight waves. Within 10 minutes of launching, you will be paddling with confidence.</p>

      <h2>3. What to Wear: Dry Clothes Checklist</h2>
      <p>Wear light, quick-dry clothes (shorts and T-shirts). You will get a small splash of water on your thighs while paddling. Sandals with ankle straps or flip-flops are recommended. We provide waterproof drybags to protect your phone and camera during the tour. Always bring a change of dry clothes to leave in your vehicle.</p>

      <h2>4. Reaching the Launch Ramp</h2>
      <p>We launch from Nedungolam PO, Paravur Lake. Check our exact address and travel times from Varkala Cliff on our dedicated <a href="/location-paravur-backwaters">Paravur Backwaters near Varkala</a> location guide.</p>
    `
  }
}

type PostSlug = keyof typeof posts

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug as PostSlug]
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDesc,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: `${siteUrl}/blog/${slug}`,
      title: post.metaTitle,
      description: post.metaDesc,
      images: [{ url: post.image }],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug as PostSlug]
  if (!post) notFound()

  const waMessage = encodeURIComponent(
    `Hi! I read your article "${post.title}" and would like to book a tour at Paravur Backwaters.`
  )

  return (
    <>
      <main className="min-h-screen bg-[#f7f5f0]">
        <Navbar />

        {/* Article Header */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0d2415 0%, #06160d 100%)',
            paddingTop: '160px',
            paddingBottom: '60px',
            color: '#fff',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
            <Link
              href="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                marginBottom: '24px',
                transition: 'color 0.2s',
              }}
              className="back-to-blog"
            >
              <ArrowLeft size={13} />
              Back to Blog
            </Link>

            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 300,
                lineHeight: 1.2,
                marginBottom: '20px',
              }}
            >
              {post.title}
            </h1>

            <div
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Calendar size={13} />
                <span>{post.date}</span>
              </div>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Clock size={13} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article layout */}
        <section style={{ padding: '64px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 340px',
              gap: '48px',
              alignItems: 'start',
            }}
            className="md-grid-1col"
          >
            {/* Left Column: Article Body */}
            <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', padding: '48px 40px' }} className="md-blog-body-pad">
              {/* Intro */}
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '1.05rem',
                  fontWeight: 300,
                  color: '#333',
                  lineHeight: 1.8,
                  marginBottom: '28px',
                  fontStyle: 'italic',
                  borderLeft: '3px solid #c9a84c',
                  paddingLeft: '16px',
                }}
              >
                {post.intro}
              </p>

              {/* Main Content Rendered */}
              <div
                className="blog-main-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Right Column: Sticky Widget */}
            <div>
              <div
                style={{
                  background: '#0d2415',
                  color: '#fff',
                  border: '1px solid rgba(201,168,76,0.2)',
                  padding: '32px',
                  position: 'sticky',
                  top: '100px',
                  fontFamily: "'Jost', sans-serif",
                }}
              >
                <div style={{ position: 'absolute', top: 16, left: 16, width: 20, height: 20, borderTop: '1px solid rgba(201,168,76,0.4)', borderLeft: '1px solid rgba(201,168,76,0.4)' }} />
                <div style={{ position: 'absolute', bottom: 16, right: 16, width: 20, height: 20, borderBottom: '1px solid rgba(201,168,76,0.4)', borderRight: '1px solid rgba(201,168,76,0.4)' }} />

                <span style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a84c', display: 'block', marginBottom: '8px' }}>Eco-Adventure</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 400, color: '#fff', marginBottom: '16px', lineHeight: 1.3 }}>
                  Ready to Paddle <br />
                  <em style={{ fontStyle: 'italic', color: '#e8d49a' }}>Paravur?</em>
                </h3>

                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontWeight: 300, marginBottom: '24px' }}>
                  Secure your sunrise or sunset golden hour slot today. Book in 1 minute via WhatsApp.
                </p>

                <a
                  href={`https://wa.me/${PRIMARY_WA}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#25d366',
                    color: '#fff',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontSize: '0.78rem',
                    padding: '14px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    textDecoration: 'none',
                    borderRadius: '2px',
                    marginBottom: '10px',
                    boxShadow: '0 4px 12px rgba(37,211,102,0.2)',
                  }}
                >
                  <MessageCircle size={15} />
                  Book on WhatsApp
                </a>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>
                    <CheckCircle size={11} color="#c9a84c" />
                    <span>Guided by local oarsmen</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>
                    <CheckCircle size={11} color="#c9a84c" />
                    <span>No swimming skills required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingButtons />
      </main>

      <style>{`
        @media (max-width: 900px) {
          .md-grid-1col {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 560px) {
          .md-blog-body-pad {
            padding: 32px 20px !important;
          }
        }
        .back-to-blog:hover {
          color: #e8d49a !important;
        }

        /* Rich text styles inside blog body */
        .blog-main-content h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: #0d2415;
          margin-top: 36px;
          margin-bottom: 16px;
          line-height: 1.25;
        }
        .blog-main-content p {
          font-family: 'Jost', sans-serif;
          font-size: 0.92rem;
          font-weight: 300;
          color: #444;
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .blog-main-content ul {
          margin-bottom: 24px;
          padding-left: 20px;
        }
        .blog-main-content li {
          font-family: 'Jost', sans-serif;
          font-size: 0.92rem;
          font-weight: 300;
          color: #444;
          line-height: 1.7;
          margin-bottom: 10px;
        }
        .blog-main-content a {
          color: #c9a84c;
          text-decoration: underline;
          font-weight: 500;
        }
        .blog-main-content a:hover {
          color: #0d2415;
        }
        .blog-main-content strong {
          color: #0d2415;
          font-weight: 600;
        }
      `}</style>
    </>
  )
}
