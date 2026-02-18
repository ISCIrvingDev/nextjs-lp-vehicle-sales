'use client';

// * NextJS
import Link from 'next/link';
import Image from 'next/image'

// * Components
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { LanguageSwitcher } from '@/shared/components/LanguageSwitcher';

// * Icons
import { Car, Users, TrendingUp, ArrowRight, CheckCircle, Star, BarChart3 } from 'lucide-react';
import VehicleSalesLogo from "@/shared/assets/icon.png";

// * MVVM
import { useHome } from './_hooks/useHome';

export default function Home() {
  const {
    t,
    sendGTMEvent,
  } = useHome()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src={VehicleSalesLogo} alt="Vehicle Sales Logo" className="w-10 h-10" />

            <span className="text-xl font-bold text-foreground">{t('systemTitle')}</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <div className="flex gap-2">
              <Link href="/schedule" onClick={() => {
                sendGTMEvent({ event: '/ - Header - Schedule a Demo', cta_type: 'Btn' })
              }}>
                <Button>{t('scheduleDemo')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 fade-in">
            {t('welcome')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in">
            {t('landingPageText1')}
          </p>
          <div className="flex gap-4 justify-center fade-in">
            <Link href="/buy" onClick={() => {
              if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
                sendGTMEvent({ event: '/ - Welcome to Vehicle Sales - Get Started', cta_type: 'Btn' })
            }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                {t('landingPageText2')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t('landingPageText3')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover bg-card border-border">
              <CardHeader>
                <Car className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">{t('landingPageText4')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {t('landingPageText5')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover bg-card border-border">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">{t('landingPageText6')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {t('landingPageText7')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover bg-card border-border">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">{t('landingPageText8')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {t('landingPageText9')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover bg-card border-border">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">{t('landingPageText10')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {t('landingPageText11')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t('landingPageText12')}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t('landingPageText13')}</h3>
                    <p className="text-muted-foreground">{t('landingPageText14')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t('landingPageText15')}</h3>
                    <p className="text-muted-foreground">{t('landingPageText16')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t('landingPageText17')}</h3>
                    <p className="text-muted-foreground">{t('landingPageText18')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t('landingPageText19')}</h3>
                    <p className="text-muted-foreground">{t('landingPageText20')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-xl border-border">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">{t('landingPageText21')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">{t('landingPageText23')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">SSL</div>
                  <div className="text-muted-foreground">{t('landingPageText22')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">API</div>
                  <div className="text-muted-foreground">{t('landingPageText24')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t('landingPageText25')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "{t('landingPageText26')}"
                </p>
                <div className="font-semibold text-foreground">John Martinez</div>
                <div className="text-sm text-muted-foreground">{t('landingPageText27')}</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "{t('landingPageText28')}"
                </p>
                <div className="font-semibold text-foreground">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">{t('landingPageText29')}</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "{t('landingPageText30')}"
                </p>
                <div className="font-semibold text-foreground">Mike Chen</div>
                <div className="text-sm text-muted-foreground">{t('landingPageText31')}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('landingPageText32')}
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('landingPageText33')}
          </p>

          <Link href="/buy" onClick={() => {
            if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
              sendGTMEvent({ event: '/ - Ready to Transform Your Business? - Get Started Today', cta_type: 'Btn' })
          }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              {t('landingPageText34')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}