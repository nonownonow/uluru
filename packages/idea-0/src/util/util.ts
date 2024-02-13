import { ReactNode } from "react";

export function html(html: ReactNode) {
  let result;
  if (typeof html === "string") {
    // if (["string", "number", "boolean"].includes(typeof html)) {
    result = {
      dangerouslySetInnerHTML: {
        __html: html,
      },
    };
  } else {
    result = {
      children: html,
    };
  }
  return result;
}

export function identity<T>(value: T): T {
  return value;
}
