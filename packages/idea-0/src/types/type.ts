import type {
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
  ReactNode,
} from "react";

export type Primitive = string | number | boolean;

export type Formatter<T extends Primitive> = (
  value: T,
  key?: string,
  index?: number
) => ReactNode;

export type PolymorphicComponentProps<
  C extends ElementType,
  P extends object
> = PropsWithChildren<Omit<ComponentPropsWithRef<C>, keyof P> & P>;

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<
  C
>["ref"];
