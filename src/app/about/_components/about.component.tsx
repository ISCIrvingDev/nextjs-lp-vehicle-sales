'use client';

// * NextJS
import Link from 'next/link';

// * Components
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';

// * Icons
import { Users, Award, Code, Brain, Globe, Target, Zap, Shield } from 'lucide-react';

// * I18n
import { useI18n } from '@/shared/contexts/i18n/I18nContext';

// * Google Analytics & Google Tag Manager
import { sendGTMEvent } from "@next/third-parties/google";

export function AboutComponent() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('aboutText1')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('aboutText2')}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('aboutText3')} <a href="https://ivin-dev.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" onClick={() => {
                  if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
                    sendGTMEvent({ event: '/about - Our Mission - Ivin Dev', cta_type: 'Link' })
                }}>
                  Ivin Dev
                </a>{t('aboutText4')}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('aboutText5')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">{t('aboutText6')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-muted-foreground">{t('aboutText7')}</div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-xl border-border">
              <Target className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">{t('aboutText8')}</h3>
              <p className="text-muted-foreground text-center">
                {t('aboutText9')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Code className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-6">{t('aboutText10')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('aboutText11')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    {t('aboutText12')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('aboutText13')}</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{t('aboutText14')}</li>
                      <li>{t('aboutText15')}</li>
                      <li>{t('aboutText16')}</li>
                      <li>{t('aboutText17')}</li>
                    </ul>
                  </div>
                  {/* <div>
                    <h4 className="font-semibold text-foreground mb-2">AI Integration</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Machine learning for vehicle valuation</li>
                      <li>Predictive analytics for sales forecasting</li>
                      <li>Natural language processing for customer insights</li>
                      <li>Computer vision for vehicle image analysis</li>
                    </ul>
                  </div> */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('aboutText18')}</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{t('aboutText19')}</li>
                      <li>{t('aboutText20')}</li>
                      {/* <li>Knowledge of regulatory compliance</li> */}
                      <li>{t('aboutText21')}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    {t('aboutText22')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{t('aboutText23')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{t('aboutText24')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{t('aboutText25')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{t('aboutText26')}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    {t('aboutText27')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('aboutText28')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">{t('aboutText29')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('aboutText30')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">⚛️</div>
                <h3 className="font-semibold text-foreground mb-2">{t('aboutText31')}</h3>
                <p className="text-sm text-muted-foreground">{t('aboutText32')}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="font-semibold text-foreground mb-2">{t('aboutText33')}</h3>
                <p className="text-sm text-muted-foreground">{t('aboutText34')}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🗄️</div>
                <h3 className="font-semibold text-foreground mb-2">{t('aboutText35')}</h3>
                <p className="text-sm text-muted-foreground">{t('aboutText36')}</p>
              </CardContent>
            </Card>

            {/* <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="font-semibold text-foreground mb-2">AI Integration</h3>
                <p className="text-sm text-muted-foreground">Machine Learning, Predictive Analytics, NLP</p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">{t('aboutText37')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  {t('aboutText38')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('aboutText39')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  {t('aboutText40')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('aboutText41')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  {t('aboutText42')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('aboutText43')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  {t('aboutText44')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('aboutText45')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {t('aboutText46')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('aboutText47')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  {t('aboutText48')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('aboutText49')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('aboutText50')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('aboutText51')}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/schedule" onClick={() => {
              if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
                sendGTMEvent({ event: '/about - Ready to Transform Your Business? - Get Started Today', cta_type: 'Link & Btn' })
            }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t('aboutText52')}
              </Button>
            </Link>

            <a href="https://ivin-dev.com/#contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" onClick={() => {
              if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
                sendGTMEvent({ event: '/about - Ready to Transform Your Business? - Contact Us', cta_type: 'Link & Btn' })
            }}>
              <Button size="lg" variant="outline">
                {t('aboutText53')}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}