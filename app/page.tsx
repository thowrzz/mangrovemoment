import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ActivitiesSection } from '@/components/activities-section'
import { WhyChooseUsSection } from '@/components/why-choose-us-section'
import { GallerySection } from '@/components/gallery-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/ui/Floatingbuttons'
import { PickupDropSection } from '@/components/pickup-drop-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ActivitiesSection />
      <PickupDropSection />   {/* ← add here */}

      <WhyChooseUsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingButtons />

      <Footer />
    </main>
  )
}
