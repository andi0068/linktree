'use client';
import { useState, useCallback } from 'react';

import Button from '@/components/ui/button';

interface CounterProps {
  className?: string;
  defaultValue?: number;
}

export default function Counter({ className, defaultValue = 0 }: CounterProps) {
  const [value, setValue] = useState(defaultValue);

  const onClick = useCallback(() => setValue((s) => s + 1), []);

  return (
    <Button type="button" onClick={onClick} className={className}>
      {value}
    </Button>
  );
}
