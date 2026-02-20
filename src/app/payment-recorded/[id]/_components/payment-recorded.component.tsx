'use client';

// * NextJS
import Link from 'next/link';

// * Components
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';

// * Icons
import { CheckCircle, ReceiptTextIcon, Home } from 'lucide-react';

// * MVVM
import { usePaymentSuccess } from '../_hooks/usePaymentSuccess';

export function PaymentRecordedComponent() {
  const {
    purchase,
    t,
    formatAmount,
    formatDate,
  } = usePaymentSuccess();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto">
        <Card className="bg-card border-border shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <Badge variant="default" className="mx-auto mb-4 bg-green-500 hover:bg-green-500">
              {t('paymentSuccessful')}
            </Badge>
            <CardTitle className="text-3xl font-bold text-foreground mb-3">
              {t('purchaseSuccessTitle')}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-lg">
              {t('purchaseSuccessMessage')}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Thank You Message */}
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <p className="text-foreground text-center">
                {t('thankYouMessage')}
              </p>
            </div>

            {/* Payment Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {t('paymentDetails')}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center flex-wrap">
                  <span className="text-muted-foreground">{t('paymentReference')}</span>
                  <span className="text-foreground font-medium font-mono text-sm">
                    {purchase!.stripeSessionId}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t('paymentAmount')}</span>
                  <span className="text-foreground font-bold text-lg">
                    {formatAmount(purchase!.amount, purchase!.currency)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t('paymentDate')}</span>
                  <span className="text-foreground">
                    {formatDate(purchase!.createdAt)}
                  </span>
                </div>

                {purchase!.customerEmail && (
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Email</span>
                    <span className="text-foreground">{purchase!.customerEmail}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Message */}
            <p className="text-sm text-muted-foreground text-center">
              {t('contactMessage')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {purchase!.receiptUrl && (
                <a
                  href={purchase!.receiptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full">
                    <ReceiptTextIcon className="h-4 w-4 mr-2" />
                    {t('downloadReceipt')}
                  </Button>
                </a>
              )}
              <Link href="/" className="flex-1">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Home className="h-4 w-4 mr-2" />
                  {t('backToHome')}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}