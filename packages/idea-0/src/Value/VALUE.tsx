import type { ElementType } from "react";
import { forwardRef } from "react";
import { html, identity } from "../util/util";
import { Formatter, ValueData } from "~/types/type";
import type {
  PolymorphicComponentPropsWithChildren,
  PolymorphicRef,
} from "~/types/type";

export interface $VALUE<D extends ValueData> {
  $value: D;
  $valueFormat?: Formatter<D>;
}

interface $VALUECallback<V extends ElementType> {
  Value?: V;
}

type VALUEProps<
  V extends ElementType,
  D extends ValueData
> = PolymorphicComponentPropsWithChildren<V, $VALUE<D> & $VALUECallback<V>>;

/**
 * VALUE 구조를 구현한 고차 컴포넌트
 **/
export const VALUE = forwardRef(function VALUE<
  C extends ElementType = "div",
  D extends ValueData = ValueData
>(props: VALUEProps<C, D>, ref: PolymorphicRef<C>) {
  const {
    Value = "div",
    $value,
    $valueFormat = identity,
    children,
    ...restProps
  } = props;
  const value = children || $valueFormat($value);
  return <Value data-idea-value="" {...html(value)} {...restProps} ref={ref} />;
});
