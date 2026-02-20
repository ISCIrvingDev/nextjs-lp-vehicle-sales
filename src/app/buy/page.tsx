// * SEO
import { Metadata } from 'next';

// * Components
import { LandingPageHeader } from '@/app/_components/landing-page-header';
import { BuyComponent } from './_components/buy.component';

// * SEO
export const metadata: Metadata = {
  alternates: {
    canonical: '/buy',
  }
};

export default function BuyDmsPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingPageHeader />

      <BuyComponent />
    </div>
  );
}
