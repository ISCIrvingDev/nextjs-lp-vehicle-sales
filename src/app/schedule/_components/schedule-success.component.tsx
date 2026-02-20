'use client';

// * NextJS
import Link from 'next/link';

// * Components
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';

// * Icons
import { Check, Home } from 'lucide-react';

// * MVVM
import { useSchedule } from '../_hooks/useSchedule';

export function ScheduleSuccessComponent() {
  const {
    t,
  } = useSchedule();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card border-border shadow-lg text-center">
          <CardContent className="p-12">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-500" />
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('scheduleSuccessTitle')}
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t('scheduleSuccessMessage')}
            </p>

            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Home className="mr-2 h-5 w-5" />
                {t('backToHome')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}