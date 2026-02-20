'use client';

// * Icons
import { Loader2 } from 'lucide-react';

// * MVVM
import { usePaymentSuccess } from '../_hooks/usePaymentSuccess';

export function LoadingPaymentComponent() {
  const {
    t,
  } = usePaymentSuccess();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto text-center">
        <Loader2 className="h-12 w-12 text-primary mx-auto mb-4 animate-spin" />
        <p className="text-muted-foreground">{t('loadingPayment')}</p>
      </div>
    </main>
  )
}