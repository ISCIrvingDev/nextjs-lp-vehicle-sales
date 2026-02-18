'use client';

// * NextJS
import Link from 'next/link';

// * Components
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { LandingPageHeader } from '@/app/_components/landing-page-header';

// * Icons
import { FileText, AlertTriangle, Users, Gavel, Scroll, CheckCircle, Database, Copyright, Key, Shield, Ban, FileSignature } from 'lucide-react';

// * Contexts
import { useI18n } from '@/shared/contexts/i18n/I18nContext';

export default function TermsOfService() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <LandingPageHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Scroll className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('termsTitle')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('termsText1')}
            </p>
          </div>

          {/* Introductory Text */}
          <div className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
              {t('termsText2')}
            </p>
          </div>

          <div className="space-y-8">

            {/* 1. Aceptación de los términos */}
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {t('termsText3')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                {t('termsText4')}
              </CardContent>
            </Card>

            {/* 2. Datos y Confidencialidad */}
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl">
                  <Database className="h-5 w-5 text-primary" />
                  {t('termsText5')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                {/* Almacenamiento de datos */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('termsText6')}</h4>
                  <p className="leading-relaxed">{t('termsText7')}</p>
                </div>

                {/* Datos recolectados por Ivin dev */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('termsText8')}</h4>
                  <p className="mb-2">{t('termsText9')}</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>{t('termsText10')}</li>
                    <li>{t('termsText11')}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 3. Propiedad Intelectual */}
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl">
                  <Copyright className="h-5 w-5 text-primary" />
                  {t('termsText12')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary min-w-[1.5rem]">1.</span>
                    <span>{t('termsText13')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary min-w-[1.5rem]">2.</span>
                    <span>{t('termsText14')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary min-w-[1.5rem]">3.</span>
                    <span>{t('termsText15')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 4. Licencias */}
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl">
                  <Key className="h-5 w-5 text-primary" />
                  {t('termsText16')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <p className="mb-2 font-medium">{t('termsText17')}</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>{t('termsText18')}</li>
                    <li>{t('termsText19')}</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-4 rounded-md border border-border">
                  <p className="text-sm">• {t('termsText20')}</p>
                  <p className="text-sm">• {t('termsText20_1')}</p>
                </div>
              </CardContent>
            </Card>

            {/* 5. Seguridad y Soporte */}
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl">
                  <Shield className="h-5 w-5 text-primary" />
                  {t('termsText21')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('termsText22')}</h4>
                  <p>{t('termsText23')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('termsText24')}</h4>
                  <p>{t('termsText25')}</p>
                </div>
              </CardContent>
            </Card>

            {/* 6. Terminación de la licencia */}
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl">
                  <Ban className="h-5 w-5 text-primary" />
                  {t('termsText26')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>{t('termsText27')}</p>
                {/* <p>{t('termsText28')}</p> */}
              </CardContent>
            </Card>

            {/* 7. Limitación de responsabilidad */}
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  {t('termsText29')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="mb-2">{t('termsText30')}</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>{t('termsText31')}</li>
                  <li>{t('termsText32')}</li>
                  <li>{t('termsText32_1')}</li>
                  <li>{t('termsText32_2')}</li>
                  <li>{t('termsText33')}</li>
                </ul>
              </CardContent>
            </Card>

            {/* 8. Acuerdo Completo */}
            {/* <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl">
                  <FileSignature className="h-5 w-5 text-primary" />
                  {t('termsText34')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>{t('termsText35')}</p>
              </CardContent>
            </Card> */}

            {/* Final Note */}
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                {t('termsText36')}
              </p>
              <p className="text-sm font-medium text-primary">
                {t('termsText37')}
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}