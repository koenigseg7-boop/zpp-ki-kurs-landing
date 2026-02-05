import { Hero } from '@/app/components/Hero';
import { Benefits } from '@/app/components/Benefits';
import { CourseDetails } from '@/app/components/CourseDetails';
import { Curriculum } from '@/app/components/Curriculum';
import { Trainers } from '@/app/components/Trainers';
import { Pricing } from '@/app/components/Pricing';
import { BookingForm } from '@/app/components/BookingForm';
import { Footer } from '@/app/components/Footer';
import { FloatingCTA } from '@/app/components/FloatingCTA';
import { MouseSpotlight } from '@/app/components/MouseSpotlight';
import { CursorTrail } from '@/app/components/CursorTrail';
import { PremiumBackground } from '@/app/components/PremiumBackground';
import { Header } from '@/app/components/premium/Header';
import { HeroNew } from '@/app/components/premium/HeroNew';
import { BenefitsNew } from '@/app/components/premium/BenefitsNew';
import { FAQ } from '@/app/components/premium/FAQ';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { useState } from 'react';

export function Home() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      {/* Premium Background with Spotlights & Grain */}
      <PremiumBackground />
      
      {/* Premium Header */}
      <Header onBookClick={() => setShowBooking(true)} />
      
      {/* Interactive Effects */}
      <MouseSpotlight />
      <CursorTrail />
      
      {/* Floating CTA Button */}
      <FloatingCTA onBookClick={() => setShowBooking(true)} />
      
      {/* Main Content with Scroll Snap */}
      <div className="relative z-10">
        <div>
          <HeroNew onBookClick={() => setShowBooking(true)} />
        </div>
        <div>
          <BenefitsNew />
        </div>
        <div>
          <CourseDetails onBookClick={() => setShowBooking(true)} />
        </div>
        <div>
          <Trainers />
        </div>
        <div>
          <Curriculum />
        </div>
        <div>
          <Pricing onBookClick={() => setShowBooking(true)} />
        </div>
        <div>
          <FAQ />
        </div>
        <BookingForm isOpen={showBooking} onClose={() => setShowBooking(false)} />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}