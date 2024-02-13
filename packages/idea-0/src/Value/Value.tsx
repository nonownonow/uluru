declare module "react" {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;
}
type HTMLElements = HTMLElementTagNameMap & HTMLElementDeprecatedTagNameMap;
import React, { ElementType } from "react";
import { ReactNode, forwardRef, ForwardedRef } from "react";
import { html, identity } from "../util/util";

export type Primitive = string | number | boolean;
export interface $VALUE {
  /**
   * 값
   **/
  $value: Primitive;
  /**
   * 값에 포멧을 적용하는 함수
   **/
  $valueLabel?: (value: Primitive, key?: string, index?: number) => ReactNode;
  children?: ReactNode;
}

export interface VALUECallback {
  Root: ElementType;
}
export type VALUEProps = $VALUE & VALUECallback;

/**
 * 엔트리의 구조를 구현한 고차 컴포넌트
 **/
export const VALUE = forwardRef(function VALUE<T extends keyof HTMLElements>(
  props: VALUEProps,
  ref: ForwardedRef<HTMLElements[T]>,
) {
  const { Root, $value, $valueLabel = identity } = props;
  return (
    <Root
      data-idea-value={props.$valueLabel ? $value : ""}
      {...html($valueLabel($value))}
      ref={ref}
    />
  );
});
