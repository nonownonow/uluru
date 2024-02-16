import { ComponentProps } from "react";
import { ARRAY } from "~/ARRAY/ARRAY";
import { Formatter, ValueData } from "~/types/type";
import { identity } from "~/util/util";

type Props = ComponentProps<typeof ARRAY>;

export const formatter: Record<string, Formatter<ValueData>> = {
  format0: identity,
  format1: (a, i) => (i === 1 ? `Oh My ${a}` : `My ${a}`),
  format2: (a) => String(a),
};

export const defaultProps: Props = {
  $array: ["hello", "world"],
  Array: "div",
  Item: "div",
};

export const polymorphicProps: Props = {
  $array: ["a", "d", "d", 1, true, false],
  Array: "ul",
  Item: "li",
};

export const withItemFormatProps: Props = {
  $array: ["d", 1, true, false],
  $itemFormat: formatter.format1,
};
