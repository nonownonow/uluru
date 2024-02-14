import { ReactNode } from "react";

export type Primitive = string | number | boolean;

export type Formatter<T extends Primitive> = (
  value: T,
  key?: string,
  index?: number
) => ReactNode;
