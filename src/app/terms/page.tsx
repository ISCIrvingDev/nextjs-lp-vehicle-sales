// * SEO
import { Metadata } from 'next';

// * Components
import { LandingPageHeader } from '@/app/_components/landing-page-header';
import { TermsOfServiceComponent } from './_components/terms-of-service.component';

// * SEO
export const metadata: Metadata = {
  alternates: {
    canonical: '/terms',
  }
};

export default function TermsOfService() {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <LandingPageHeader />

      {/* Main Content */}
      <TermsOfServiceComponent />
    </div>
  );
}