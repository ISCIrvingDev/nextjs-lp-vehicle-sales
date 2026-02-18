'use client';

// * Components
import { Button } from '@/shared/components/ui/button';

// * Contexts
import { useI18n } from '@/shared/contexts/i18n/I18nContext';

// * Icons
import { Languages } from 'lucide-react';

// * Google Analytics & Google Tag Manager
import { sendGTMEvent } from "@next/third-parties/google";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        const newVal = locale === 'en' ? 'es' : 'en'

        setLocale(newVal)

        console.log('process.env.NEXT_PUBLIC_IS_DEMO: ', process.env.NEXT_PUBLIC_IS_DEMO)

        if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
          sendGTMEvent({ event: '/ - Header - ES/EN', cta_type: `Btn - ${newVal}` })
      }}
      className="flex items-center gap-2"
    >
      <Languages className="h-4 w-4" />
      {locale === 'en' ? 'ES' : 'EN'}
    </Button>
  );
}