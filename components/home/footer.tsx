import type { BaseProps } from '@/types';

export function Root({ children }: BaseProps) {
  return <footer className="mt-2.5">{children}</footer>;
}

export function Content({ children }: BaseProps) {
  return <div className="flex items-center justify-between py-5">{children}</div>;
}

export function Copyright({ children }: BaseProps) {
  return <p className="text-sm text-foreground-secondary">{children}</p>;
}
