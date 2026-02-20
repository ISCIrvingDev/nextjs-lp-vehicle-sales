// * SEO
import { Metadata } from 'next';

// * Components
import { LandingPageHeader } from '@/app/_components/landing-page-header';
import { FaqsComponent } from './_components/faqs.component';

// * SEO
export const metadata: Metadata = {
  alternates: {
    canonical: '/faqs',
  }
};

export default function FAQs() {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <LandingPageHeader />

      {/* Main Content */}
      <FaqsComponent />
    </div>
  );
}