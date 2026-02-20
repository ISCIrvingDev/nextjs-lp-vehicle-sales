// * SEO
import { Metadata } from 'next';

// * Components
import { FullScheduleComponent } from './_components/full-schedule.component';

// * SEO
export const metadata: Metadata = {
  alternates: {
    canonical: '/schedule',
  }
};

export default function SchedulePage() {
  return (
    <FullScheduleComponent />
  );
}
