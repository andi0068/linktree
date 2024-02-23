import { cn } from '@/lib/utils';

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto px-[1.125rem] max-w-[428px] lg:px-6', className)}>{children}</div>
  );
}
