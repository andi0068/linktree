import type { BaseProps } from '@/types';

export function Root({ children }: BaseProps) {
  return <section>{children}</section>;
}

export function Content({ children }: BaseProps) {
  return <div className="space-y-2">{children}</div>;
}

export function Title({ children }: BaseProps) {
  return <h2 className="text-sm text-foreground-secondary">{children}</h2>;
}
