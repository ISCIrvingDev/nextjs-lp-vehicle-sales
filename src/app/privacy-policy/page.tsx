// * SEO
import { Metadata } from 'next';

// * Components
import { LandingPageHeader } from '@/app/_components/landing-page-header';
import { PrivacyPolicyComponent } from './_components/privacy-policy.component';

// * SEO
export const metadata: Metadata = {
  alternates: {
    canonical: '/privacy-policy',
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <LandingPageHeader />

      {/* Main Content */}
      <PrivacyPolicyComponent />
    </div>
  );
}