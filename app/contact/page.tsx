import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { ContactSection } from '@/components/contact-section'
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react'

const siteUrl = 'https://www.mangrovemoments.com'

export const metadata: Metadata = {
  title: 'Contact & Directions | Mangrove Moments Varkala',
  description: 'Book Varkala mangrove kayaking and country boat rides. Get contact numbers, live map directions, open hours, and WhatsApp inquiry details.',
  keywords: ['mangrove kayaking near Varkala', 'mangrove moments contact number', 'Paravur lake boating directions', 'things to do near Varkala contact'],
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  const PRIMARY_WA = '919744201662'
  const PRIMARY_TEL = '+91-9744201662'
  const ALT_TEL = '+91-9895023973'

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
              Reach Out
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
              Contact & Directions <br />
              <span style={{ fontStyle: 'italic', color: '#e8d49a' }}>to Boatclub</span>
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
              Have any booking inquiries? Ready to start your adventure? Feel free to contact our local operators on the phone or visit us.
            </p>
          </div>
        </section>

        {/* Embed Contact Section component directly for form validation & logic */}
        <div style={{ background: '#fff', paddingBottom: '80px' }}>
          <ContactSection />
        </div>

        <Footer />
        <FloatingButtons />
      </main>
    </>
  )
}
