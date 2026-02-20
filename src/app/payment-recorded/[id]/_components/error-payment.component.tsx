'use client';

// * Components
import { Button } from '@/shared/components/ui/button';

// * Icons
import { RefreshCw } from 'lucide-react';

// * MVVM
import { usePaymentSuccess } from '../_hooks/usePaymentSuccess';

export function ErrorPaymentComponent() {
  const {
    t,
    fetchPaymentDetails,
  } = usePaymentSuccess();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto text-center">
        <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20 mb-6">
          <p className="text-destructive mb-4">{t('errorLoadingPayment')}</p>
          <Button onClick={fetchPaymentDetails} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            {t('retry')}
          </Button>
        </div>
      </div>
    </main>
  )
}