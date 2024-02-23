export type WithClassProp<T extends object> = T & { className?: string };
export type WithAsProp<T extends object> = T & { asChild?: boolean };

export interface BaseProps {
  children?: React.ReactNode;
}
