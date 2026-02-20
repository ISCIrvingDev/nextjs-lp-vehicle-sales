// * SEO
import { Metadata } from 'next';

// * Components
import { FullPaymentRecordedComponent } from './_components/full-payment-recorded.component';


// * SEO
export const metadata: Metadata = {
  alternates: {
    canonical: '/payment-recorded',
  }
};

export default function PaymentSuccessPage() {
  return (
    <FullPaymentRecordedComponent />
  );
}
