'use client';

// * NextJS
import Link from 'next/link';
import Image from 'next/image'

// * I18n
import { useI18n } from '@/shared/contexts/i18n/I18nContext';

// * Components
import { Button } from '@/shared/components/ui/button';
import { LanguageSwitcher } from '@/shared/components/LanguageSwitcher';

// * Icons
import { ArrowLeft } from 'lucide-react';
import VehicleSalesLogo from "@/shared/assets/icon.png";

export function LandingPageHeader() {
  const { t } = useI18n();

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src={VehicleSalesLogo} alt="Vehicle Sales Logo" className="w-10 h-10" />

            <span className="text-xl font-bold text-foreground">{t('systemTitle')}</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('backToHome')}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}