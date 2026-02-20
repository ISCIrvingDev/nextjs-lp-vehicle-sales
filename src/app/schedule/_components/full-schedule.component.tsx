'use client';

// * Components
import { LandingPageHeader } from '@/app/_components/landing-page-header';
import { ScheduleSuccessComponent } from './schedule-success.component';
import { ScheduleComponent } from './schedule.component';

// * MVVM
import { useSchedule } from '../_hooks/useSchedule';

export function FullScheduleComponent() {
  const {
    isSuccess,
  } = useSchedule();

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <LandingPageHeader />

        <ScheduleSuccessComponent />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <LandingPageHeader />

      <ScheduleComponent />
    </div>
  );
}