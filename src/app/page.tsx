import { HeroSection } from '@/components/hero-section'
import { DailyVerse } from '@/components/daily-verse'
import { ChurchListings } from '@/components/church-listings'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DailyVerse />
      <ChurchListings />
      <ContactSection />
      <Footer />
    </div>
  )
}
