import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import { forwardRef } from "react";
import { html, identity } from "../util/util";
import { Formatter, Primitive } from "~/types/type";
import type { PolymorphicComponentProps, PolymorphicRef } from "~/types/type";

export interface $VALUE<D extends Primitive> {
  /**
   * 값으로 사용될 데이터 [(타입상세)](/?path=/docs/type--docs#primitive)
   * */
  $value: D;
  /**
   * 값에 포멧을 적용하는 함수 [(타입상세)](/?path=/docs/type--docs#formatter)
   * */
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
 * 값의 구조를 구현한 고차 컴포넌트
 **/
export const VALUE = forwardRef(function VALUE<
  C extends ElementType = "div",
  D extends Primitive = string
>(props: VALUEProps<C, D>, ref: PolymorphicRef<C>) {
  const { Value = "div", $value, $valueFormat = identity } = props;
  return <Value data-idea-value="" {...html($valueFormat($value))} ref={ref} />;
});
