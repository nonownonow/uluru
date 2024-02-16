import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactNode,
} from "react";

export type ValueData = string | number | boolean;

export type EntryData = [string, ValueData];

export type Formatter<T extends ValueData> = (
  value: T,
  key?: string | number
) => ReactNode;

export type PolymorphicComponentProps<
  C extends ElementType,
  P extends object
> = Omit<ComponentPropsWithoutRef<C>, keyof P> & P;

export type PolymorphicComponentPropsWithChildren<
  C extends ElementType,
  P extends object
> = PropsWithChildren<PolymorphicComponentProps<C, P>>;

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>["ref"];
