import { ElementType, ReactNode, forwardRef } from "react";
import {
  Formatter,
  PolymorphicComponentProps,
  PolymorphicRef,
  ValueData,
} from "../types/type";
import { VALUE } from "~/VALUE/VALUE";
import { identity } from "~/util/util";

export interface $Array<T extends ValueData> {
  $array: T[];
  $itemFormat?: Formatter<T>;
}

export interface $ArrayCallback<A extends ElementType, I extends ElementType> {
  Array?: A;
  Item?: I;
}

export type ArrayProps<
  T extends ValueData,
  A extends ElementType,
  I extends ElementType
> = PolymorphicComponentProps<A, $Array<T> & $ArrayCallback<A, I>>;

/**
 * 배열의 구조를 구현한 [고차컴포넌트](https://blog.naver.com/one-in-me/223356121427)
 */
export const ARRAY = forwardRef(function ARRAY<
  T extends ValueData,
  A extends ElementType = "div",
  I extends ElementType = "div"
>(props: ArrayProps<T, A, I>, ref: PolymorphicRef<A>) {
  const {
    $array,
    Array = "div" as ElementType,
    Item = "div" as ElementType,
    $itemFormat = identity,
    ...restProps
  } = props;
  return (
    <Array data-idea-array="" {...restProps} ref={ref}>
      {$array.map((a, i) => (
        <VALUE
          data-idea-item={i}
          key={i}
          Value={Item}
          $value={a}
          $valueFormat={(a) => $itemFormat(a, i)}
        />
      ))}
    </Array>
  );
});
