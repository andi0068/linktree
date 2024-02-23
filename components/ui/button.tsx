import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  as?: React.ElementType;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, as = 'button', asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : as;
    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap select-none font-medium outline-none rounded-md transition-shadow hover:scale-105 focus-visible:ring focus-visible:ring-offset-[3px] focus-visible:ring-accent/20 active:scale-100 active:opacity-60',
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

export default Button;
