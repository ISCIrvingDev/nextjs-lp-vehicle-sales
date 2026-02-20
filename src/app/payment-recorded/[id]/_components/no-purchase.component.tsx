'use client';

// * MVVM
import { usePaymentSuccess } from '../_hooks/usePaymentSuccess';

export function NoPurchaseComponent() {
  const {
    t,
  } = usePaymentSuccess();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-muted-foreground">{t('errorLoadingPayment')}</p>
      </div>
    </main>
  )
}