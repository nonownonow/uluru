import type { ElementType } from "react";
import { forwardRef } from "react";
import { html, identity } from "../util/util";
import { Formatter, Primitive } from "~/types/type";
import type { PolymorphicComponentProps, PolymorphicRef } from "~/types/type";

export interface $VALUE<D extends Primitive> {
  $value: D;
  $valueFormat?: Formatter<D>;
}

export interface $VALUECallback<Value extends ElementType> {
  Value?: Value;
}

export type VALUEProps<
  C extends ElementType = "div",
  D extends Primitive = string
> = PolymorphicComponentProps<C, $VALUE<D> & $VALUECallback<C>>;

/**
 * - 값의 구조를 구현한 고차 컴포넌트
 * - Value값으로 다형성이 어떻게 작동하는지는 각 스토리 하단의 HTML탭을 통해 확인할 수 있습니다.
 * - 아래 description의 타입을 클릭하면 해당 타입의 상세 정의를 확인할 수 있습니다.
 **/
export const VALUE = forwardRef(function VALUE<
  C extends ElementType = "div",
  D extends Primitive = string
>(props: VALUEProps<C, D>, ref: PolymorphicRef<C>) {
  const { Value = "div", $value, $valueFormat = identity } = props;
  return <Value data-idea-value="" {...html($valueFormat($value))} ref={ref} />;
});
