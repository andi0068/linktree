import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ArrowRight from '@/components/svgs/arrow-right';
import * as icons from '@/utils/icon-utils';
import type { BaseProps } from '@/types';

interface AnchorProps extends BaseProps {
  href: string;
  icon: string;
}

export function Root({ children, href, icon }: AnchorProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center py-3 px-[1.125rem] border border-transparent rounded-2xl bg-background-secondary space-x-4 hover:border-separator"
    >
      <Icon asChild className="text-2xl text-foreground-secondary">
        {icons.get(icon)}
      </Icon>
      <div className="grow flex items-center justify-between">
        {children}
        <Button
          as="span"
          className="px-2.5 pr-0.5 h-7 text-sm rounded-full text-foreground-secondary group-hover:bg-background-tertiary"
        >
          <span className="opacity-0 group-hover:opacity-100">Open</span>
          <Icon asChild className="text-xl text-foreground-tertiary">
            <ArrowRight />
          </Icon>
        </Button>
      </div>
    </a>
  );
}

export function Content({ children }: BaseProps) {
  return <div className="space-y-1">{children}</div>;
}

export function Title({ children }: BaseProps) {
  return <h3 className="text-sm leading-[1.125rem] font-medium">{children}</h3>;
}

export function Description({ children }: BaseProps) {
  return <p className="text-sm text-foreground-secondary">{children}</p>;
}
