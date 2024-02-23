import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';
import type { BaseProps, WithClassProp, WithAsProp } from '@/types';

export function Root({ children }: BaseProps) {
  return <header className="mb-[1.875rem]">{children}</header>;
}

export function TopContent({ children }: BaseProps) {
  return <div className="flex items-center justify-between py-9">{children}</div>;
}

export function Image({ children, asChild }: WithAsProp<BaseProps>) {
  const Comp = asChild ? Slot : 'div';
  return <Comp className="object-cover w-16 h-16 rounded-full">{children}</Comp>;
}

export function Location({ children, className }: WithClassProp<BaseProps>) {
  return <p className={cn('uppercase text-sm text-foreground-secondary', className)}>{children}</p>;
}

export function BottomContent({ children }: BaseProps) {
  return (
    <div className="mt-1.5 text-4xl -tracking-[.02em] leading-[2.625rem] font-medium">
      {children}
    </div>
  );
}

export function Title({ children }: BaseProps) {
  return <h1>{children}</h1>;
}

export function Description({ children }: BaseProps) {
  return <p className="text-foreground-secondary">{children}</p>;
}
