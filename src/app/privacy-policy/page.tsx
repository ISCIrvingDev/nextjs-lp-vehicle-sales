'use client';

// * NextJS
import Link from 'next/link';

// * Components
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { LandingPageHeader } from '@/app/_components/landing-page-header';

// * Icons
import { Shield, Eye, Lock, Database, Info, UserCheck, Share2, ShieldAlert, PieChart, ClipboardCheck, FileBarChart } from 'lucide-react';

// * Contexts
import { useI18n } from '@/shared/contexts/i18n/I18nContext';

export default function PrivacyPolicy() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <LandingPageHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('privacyPolicyTitle')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('privacyText1')} 13/01/26
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction Section */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <FileBarChart className="h-5 w-5 text-primary" />
                  {t('privacyTextGeneral')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>{t('privacyText2')}</p>
                <p>{t('privacyText3')}</p>
                <p>{t('privacyText4')}</p>
                <p>{t('privacyText5')}</p>
              </CardContent>
            </Card>

            {/* Information Collected Section */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <ClipboardCheck className="h-5 w-5 text-primary" />
                  {t('privacyText6')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>{t('privacyText7')}</li>
                  <li>{t('privacyText8')}</li>
                  <li>{t('privacyText9')}</li>
                  <li>{t('privacyText10')}</li>
                  <li>{t('privacyText11')}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Use of Data Section */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  {t('privacyText12')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>{t('privacyText13')}</li>
                  <li>{t('privacyText14')}</li>
                  <li>{t('privacyText15')}</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibility Section */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-primary" />
                  {t('privacyText16')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>{t('privacyText17')}</li>
                  <li>{t('privacyText18')}</li>
                  <li>{t('privacyText19')}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing Section */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-primary" />
                  {t('privacyText20')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>{t('privacyText21')}</li>
                  <li>{t('privacyText22')}</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights Section */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  {t('privacyText23')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>{t('privacyText24')}</li>
                  <li>{t('privacyText25')}</li>
                  <li>{t('privacyText26')}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Security Measures Section */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  {t('privacyText27')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>{t('privacyText28')}</li>
                  {/* <li>{t('privacyText29')}</li> */}
                  <li>{t('privacyText30')}</li>
                  {/* <li>{t('privacyText31')}</li> */}
                </ul>
              </CardContent>
            </Card>

            {/* Changes and Contact Section */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  {t('privacyText32')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                {/* <p>{t('privacyText33')}</p> */}
                <ul className="list-disc list-inside space-y-1">
                  <li>{t('privacyText34')}</li>
                  <li>{t('privacyText35')}</li>
                  {/* <li>{t('privacyText36')}</li> */}
                </ul>
                <p className="text-muted-foreground italic">{t('privacyText37')}</p>
                <p>{t('privacyText38')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}