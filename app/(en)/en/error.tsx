'use client';

import { ErrorPage } from '@/components/pages/ErrorPage';

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return <ErrorPage locale="en" error={error} reset={reset} />;
}
