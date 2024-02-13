declare module "react" {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;
}
type HTMLElements = HTMLElementTagNameMap & HTMLElementDeprecatedTagNameMap;
import { ElementType } from "react";
import { ReactNode, forwardRef, ForwardedRef } from "react";
import { html, identity } from "../util/util";
import { Primitive } from "~/type/type";

export type Formatter<T extends Primitive> = (
  value: T,
  key?: string,
  index?: number,
) => ReactNode;
export interface $VALUE<T extends Primitive> {
  /**
   * 값
   **/
  $value: T;
  /**
   * 값에 포멧을 적용하는 함수
   **/
  $valueFormat?: Formatter<T>;
  children?: ReactNode;
}

export interface VALUECallback {
  Root: ElementType;
}
export type VALUEProps<T extends Primitive> = $VALUE<T> & VALUECallback;

/**
 * 엔트리의 구조를 구현한 고차 컴포넌트
 **/
export const VALUE = forwardRef(function VALUE<
  T extends keyof HTMLElements,
  V extends Primitive,
>(props: VALUEProps<V>, ref: ForwardedRef<HTMLElements[T]>) {
  const { Root, $value, $valueFormat = identity } = props;
  return (
    <Root
      data-idea-value={props.$valueFormat ? $value : ""}
      {...html($valueFormat($value))}
      ref={ref}
    />
  );
});
