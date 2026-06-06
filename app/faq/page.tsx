import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { MessageCircle, HelpCircle, Clock, Shield, Compass, MapPin, Smile, Landmark } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'

export const metadata: Metadata = {
  title: 'Varkala Mangrove Kayaking FAQ | Booking, Safety & Prices',
  description: 'Got questions about kayaking near Varkala? Read our FAQs on safety, swimming requirements, prices, best time to visit, and distance from Varkala Cliff.',
  keywords: ['kayaking near Varkala', 'Varkala mangrove kayaking price', 'mangrove forest tour Kerala safety', 'things to do near Varkala FAQ'],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${siteUrl}/faq`,
    title: 'Varkala Mangrove Kayaking FAQ | Booking, Safety & Prices',
    description: 'Find answers to booking questions, pricing lists, clothing suggestions, and swimming details for Varkala mangrove kayaking and Paravur backwater tours.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Mangrove Moments Booking FAQs' }],
  },
}

export default function FAQPage() {
  const PRIMARY_WA = '919744201662'
  const PRIMARY_TEL = '+91-9744201662'

  const faqItems = [
    {
      icon: <Shield size={18} color="#c9a84c" />,
      question: 'Is mangrove kayaking safe for beginners?',
      answer: 'Absolutely. Over 90% of our guests are first-time kayakers. The waters within the mangrove channels of Paravur Lake are extremely calm, flat, and shallow, with no rough waves or strong currents. All tours are led by trained local guides who remain with your group throughout the trip.'
    },
    {
      icon: <Smile size={18} color="#c9a84c" />,
      question: 'Do I need to know swimming to do kayaking?',
      answer: 'No, swimming experience is not required. Every single guest is equipped with a certified, high-buoyancy life vest (available in all sizes, including for children). The vests are kept securely buckled during the activity, keeping you completely afloat in the highly unlikely event of a slip.'
    },
    {
      icon: <Clock size={18} color="#c9a84c" />,
      question: 'What is the best time of day for kayaking?',
      answer: 'The absolute best slots are Sunrise (5:30 AM – 7:30 AM) and Golden Hour Sunset (4:30 PM – 6:00 PM). The sunrise slot offers cool, misty air, flat water, and maximum bird watching activity. The sunset slot offers cooler temperatures and stunning golden photography light.'
    },
    {
      icon: <MapPin size={18} color="#c9a84c" />,
      question: 'How far is Mangrove Moments from Varkala Cliff?',
      answer: 'We are situated exactly 9.2 km north of Varkala Cliff at Nedungolam, Paravur. By road, it takes a scenic 20 minutes via the coastal road. We also offer a dedicated Pickup & Drop service from all hotels and resorts in Varkala Cliff and beach areas.'
    },
    {
      icon: <Compass size={18} color="#c9a84c" />,
      question: 'What should I wear for the water activities?',
      answer: 'Wear lightweight, breathable, and quick-dry clothing such as activewear, shorts, or polyester T-shirts. Sandals, flip-flops, or water shoes are best for footwear. We highly recommend bringing a sun hat, sunglasses, sunblock, and a change of dry clothes for after the tour.'
    },
    {
      icon: <HelpCircle size={18} color="#c9a84c" />,
      question: 'Is it suitable for couples, families, and groups?',
      answer: 'Yes! We offer experiences tailored to all demographics. Couples love the quiet privacy of our sunrise double kayaking. Families and senior citizens prefer our traditional wooden country boat rides, which carry up to 8 passengers comfortably. We also cater to school groups and corporate team outings with speed boats, coracle rides, and ATV quad tracks.'
    },
    {
      icon: <Landmark size={18} color="#c9a84c" />,
      question: 'What are the booking prices and operational timings?',
      answer: 'We are open every single day from 5:30 AM to 6:00 PM. Prices start at ₹300/person for coracle and ATV rides, ₹700/person for guided mangrove kayaking, ₹1,000/person for stand-up paddleboarding, and ₹1,700 for a private traditional country boat tour (fits 1–2 passengers, ₹250 for each extra person).'
    }
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
              Have Questions?
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
              Frequently Asked <br />
              <span style={{ fontStyle: 'italic', color: '#e8d49a' }}>Questions</span>
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
              Find details about slot timings, safety instructions, clothing guides, and pricing below.
            </p>
          </div>
        </section>

        {/* FAQs List */}
        <section style={{ padding: '80px 24px', maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {faqItems.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.06)',
                  padding: '32px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
                }}
              >
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(201,168,76,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {faq.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      color: '#0d2415',
                      lineHeight: 1.2,
                    }}
                  >
                    {faq.question}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    color: '#555',
                    lineHeight: 1.8,
                    paddingLeft: '46px',
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Live CTA Strip */}
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
              Still have queries? Let's chat.
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
              Reach our local guides directly. We are happy to help you with personalized schedules or special requests.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${PRIMARY_WA}?text=Hi!%20I%20have%20a%20question%20regarding%20booking%20an%20experience%20at%20Paravur%20Backwaters.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25d366',
                  color: '#fff',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '14px 32px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  borderRadius: '2px',
                }}
              >
                <MessageCircle size={15} />
                Ask on WhatsApp
              </a>
              <a
                href={`tel:${PRIMARY_TEL}`}
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '14px 32px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  borderRadius: '2px',
                }}
              >
                Call for Queries
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingButtons />
      </main>
    </>
  )
}
