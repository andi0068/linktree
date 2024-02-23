'use client';
import { useState, useEffect, useMemo } from 'react';

export default function Time({ dateTime }: { dateTime: string }) {
  const [date, setDate] = useState(() => new Date(dateTime));
  const formatted = useFormat(date);

  useEffect(() => {
    const ms = 1000 - date.getMilliseconds();

    const timeout = setTimeout(() => {
      setDate((s) => inc(s, ms));
    }, ms);

    return () => {
      clearTimeout(timeout);
    };
  }, [date]);

  return <time dateTime={dateTime}>{formatted}</time>;
}

function useFormat(date: Date) {
  return useMemo(() => `${format(date.getHours())}.${format(date.getMinutes())}`, [date]);
}

function inc(state: Date, ms: number) {
  const date = new Date(state);
  date.setMilliseconds(date.getMilliseconds() + ms);
  return date;
}

const { format } = new Intl.NumberFormat('en-us', { minimumIntegerDigits: 2 });
