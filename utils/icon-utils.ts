import dynamic from 'next/dynamic';
import { Fragment, createElement } from 'react';

const Dribbble = dynamic(() => import('@/components/svgs/dribbble'));
const Scheme = dynamic(() => import('@/components/svgs/scheme'));
const Fragments = dynamic(() => import('@/components/svgs/fragments'));
const Gumroad = dynamic(() => import('@/components/svgs/gumroad'));
const Email = dynamic(() => import('@/components/svgs/email'));
const Linkedin = dynamic(() => import('@/components/svgs/linkedin'));
const Telegram = dynamic(() => import('@/components/svgs/telegram'));

export function get(name: string) {
  const map: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    dribbble: Dribbble,
    scheme: Scheme,
    fragments: Fragments,
    gumroad: Gumroad,
    email: Email,
    linkedin: Linkedin,
    telegram: Telegram,
  };

  const icon = map[name.toLowerCase()];

  return createElement(icon ?? Fragment);
}
