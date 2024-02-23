import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';
import * as data from '@/data';

import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: data.author.name,
  description: data.author.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          sans.className,
          'flex flex-col min-h-screen antialiased text-foreground-primary bg-background-primary',
        )}
      >
        {children}
      </body>
    </html>
  );
}
