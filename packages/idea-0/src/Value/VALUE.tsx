import type { ElementType } from "react";
import { forwardRef } from "react";
import { html, identity } from "../util/util";
import { Formatter, ValueData } from "~/types/type";
import type { PolymorphicComponentProps, PolymorphicRef } from "~/types/type";

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
> = PolymorphicComponentProps<V, $VALUE<D> & $VALUECallback<V>>;

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
    ...restProps
  } = props;
  return (
    <Value
      data-idea-value=""
      {...html($valueFormat($value))}
      {...restProps}
      ref={ref}
    />
  );
});
