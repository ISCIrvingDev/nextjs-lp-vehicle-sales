'use client';

// * NextJS
import Link from 'next/link';

// * Components
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';
import { LandingPageHeader } from '@/app/_components/landing-page-header';

// * Google Analytics & Google Tag Manager
import { sendGTMEvent } from "@next/third-parties/google";

// * Icons
import {
  Check,
  Shield,
  Download,
  HeadphonesIcon,
  Clock,
  CreditCard,
  Loader2,
  Home,
  LayoutDashboard,
  PieChart,
  Users,
  Calendar,
  ShoppingCart,
  FileSpreadsheet,
  Server,
  Globe,
  Lock
} from 'lucide-react';

// * MVVM
import { useBuy } from './_hooks/useBuy';

export default function BuyDmsPage() {
  const {
    t,
    isLoading,
    isLoadingRate,
    productPriceUSD,
    productPriceMXN,
    handlePurchase,
  } = useBuy();

  const features = [
    { icon: LayoutDashboard, text: t('feature1') },
    { icon: PieChart, text: t('feature2') },
    { icon: Users, text: t('feature3') },
    { icon: Calendar, text: t('feature4') },
    { icon: ShoppingCart, text: t('feature5') },
    { icon: FileSpreadsheet, text: t('feature6') },
  ];

  const trustSignals = [
    { icon: Shield, text: t('securePayment') },
    { icon: Download, text: t('installationIncluded') },
    { icon: Check, text: t('updatesIncluded') },
    { icon: HeadphonesIcon, text: t('personalizedSupport') },
    { icon: Clock, text: t('installationTime') },
  ];

  const installationSteps = [
    { number: '1', title: t('step1Title'), description: t('step1Description') },
    { number: '2', title: t('step2Title'), description: t('step2Description') },
    { number: '3', title: t('step3Title'), description: t('step3Description') },
    { number: '4', title: t('step4Title'), description: t('step4Description') },
  ];

  const whatsIncluded = [
    t('included1'),
    t('included2'),
    t('included3'),
    t('included4'),
    t('included5'),
    t('included6'),
  ];

  const whatYouNeed = [
    { icon: Server, text: t('need1') },
    { icon: Globe, text: t('need2') },
    { icon: Lock, text: t('need3') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <LandingPageHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('buyDmsTitle')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('buyDmsSubtitle')}
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {/* Left Column - Product Card */}
          <div className="space-y-6">
            <Card
              className="bg-card border-border shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-primary/50"
              onClick={() => {
                handlePurchase()
                sendGTMEvent({ event: '/buy - Get Your DMS System', cta_type: 'Card' })
              }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="default" className="bg-primary">
                    {t('oneTimePayment')}
                  </Badge>
                  <Badge variant="secondary">
                    {t('noSubscription')}
                  </Badge>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {t('productName')}
                </h2>

                <p className="text-muted-foreground mb-6">
                  {t('productDescription')}
                </p>

                {/* Price Section */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-foreground">
                      ${productPriceUSD}
                    </span>
                    <span className="text-xl text-muted-foreground">
                      {t('priceUSD')}
                    </span>
                  </div>

                  {isLoadingRate ? (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">{t('loadingRate')}</span>
                    </div>
                  ) : productPriceMXN ? (
                    <div className="text-muted-foreground">
                      <span className="text-sm">{t('approximate')} </span>
                      <span className="font-semibold">${productPriceMXN} {t('priceMXN')}</span>
                    </div>
                  ) : null}
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                  disabled={isLoading}
                  onClick={() => {
                    handlePurchase()
                    sendGTMEvent({ event: '/buy - Get Your DMS System - Buy Now', cta_type: 'Btn' })
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {t('processing')}
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-5 w-5" />
                      {t('buyNow')} - ${productPriceUSD} USD
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-3">
                  <Shield className="h-3 w-3 inline mr-1" />
                  {t('securePayment')}
                </p>
              </div>
            </Card>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-3">
              {trustSignals.map((signal, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground bg-card/50 p-3 rounded-lg border border-border"
                >
                  <signal.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{signal.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Features & Details */}
          <div className="space-y-8">
            {/* Key Features */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('keyFeatures')}
              </h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-card/50 rounded-lg border border-border"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('whatsIncluded')}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {whatsIncluded.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Need */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('whatYouNeed')}
              </h3>
              <div className="space-y-2">
                {whatYouNeed.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Installation Process */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            {t('installationProcess')}
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {installationSteps.map((step, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="text-center space-y-4">
          <Link href="/">
            <Button variant="outline" size="lg">
              <Home className="mr-2 h-5 w-5" />
              {t('backToHome')}
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">
            {t('questions')}
          </p>
        </div>
      </main>
    </div>
  );
}
