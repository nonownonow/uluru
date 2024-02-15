import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactNode,
} from "react";

export type ValueData = string | number | boolean;

export type Formatter<T extends ValueData> = (
  value: T,
  key?: string,
  index?: number
) => ReactNode;

export type PolymorphicComponentProps<
  C extends ElementType,
  P extends object
> = PropsWithChildren<Omit<ComponentPropsWithoutRef<C>, keyof P> & P>;

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>["ref"];
export type EntryData = [string, ValueData];
