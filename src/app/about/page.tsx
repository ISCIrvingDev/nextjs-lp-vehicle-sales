// * SEO
import { Metadata } from 'next';

// * Components
import { LandingPageHeader } from '@/app/_components/landing-page-header';
import { AboutComponent } from './_components/about.component';

// * SEO
export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  }
};

export default function About() {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <LandingPageHeader />

      <AboutComponent />
    </div>
  );
}