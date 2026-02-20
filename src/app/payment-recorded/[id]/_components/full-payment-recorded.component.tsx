'use client';

// * Components
import { LandingPageHeader } from '@/app/_components/landing-page-header';
import { LoadingPaymentComponent } from './loading-payment.component';
import { ErrorPaymentComponent } from './error-payment.component';
import { PaymentRecordedComponent } from './payment-recorded.component';
import { NoPurchaseComponent } from './no-purchase.component';

// * MVVM
import { usePaymentSuccess } from '../_hooks/usePaymentSuccess';

export function FullPaymentRecordedComponent() {
  const {
    purchase,
    isLoading,
    error,
  } = usePaymentSuccess();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <LandingPageHeader />

        <LoadingPaymentComponent />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <LandingPageHeader />

        <ErrorPaymentComponent />
      </div>
    );
  }

  if (!purchase) {
    return (
      <div className="min-h-screen bg-background">
        <LandingPageHeader />

        <NoPurchaseComponent />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <LandingPageHeader />

      <PaymentRecordedComponent />
    </div>
  );
}