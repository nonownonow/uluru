declare module "react" {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;
}
type HTMLElements = HTMLElementTagNameMap & HTMLElementDeprecatedTagNameMap;
type IntrinsicHTMLElements = {
  [K in keyof JSX.IntrinsicElements]: K extends keyof HTMLElements
    ? JSX.IntrinsicElements[K]
    : never;
};
import React from "react";
import {
  FC,
  ReactNode,
  forwardRef,
  ForwardedRef,
  ComponentPropsWithRef,
} from "react";

export type $VALUE = {
  $value: string | number | boolean;
  $valueLabel: ReactNode;
};

export interface VALUECallback {
  Root:
    | string
    | FC<$VALUE & ComponentPropsWithRef<keyof IntrinsicHTMLElements>>;
}
export type VALUEProps = $VALUE & VALUECallback;

export const VALUE = forwardRef(function VALUE<T extends keyof HTMLElements>(
  props: VALUEProps,
  ref: ForwardedRef<HTMLElements[T]>,
) {
  const { Root, ...restProps } = props;
  return <Root ref={ref} {...restProps} />;
});
