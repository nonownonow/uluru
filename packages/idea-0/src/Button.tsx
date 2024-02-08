import React from "react";
import { ComponentPropsWithRef } from "react";

type ButtonProps = ComponentPropsWithRef<"button">;
export function Button(props: ButtonProps) {
  return <button {...props} />;
}
