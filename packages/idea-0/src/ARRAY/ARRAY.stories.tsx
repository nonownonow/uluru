/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta, StoryObj } from "@storybook/react";
import { ARRAY } from "~/ARRAY/ARRAY";
import {
  defaultProps,
  formatter,
  polymorphicProps,
  withItemFormatProps,
} from "./ARRAY.props";

const meta: Meta<typeof ARRAY> = {
  component: ARRAY,
  tags: ["autodocs"],
  argTypes: {
    $array: {
      description:
        "배열 데이터 <a href='/?path=/docs/type--docs#valuedata'><code>ValueData[]</code></a>",
    },
    $itemFormat: {
      description:
        "값의 포멧을 적용하는 함수 <a href = 'http://localhost:6006/?path=/docs/array-controller--docs#format0' target='_blank'>Formatter 세부 구현</a>[```Formatter```](/?path=/docs/type--docs#formatter)",
      options: Object.keys(formatter),
      mapping: formatter,
      control: {
        type: "select",
        labels: {
          format0: "default",
        },
      },
    },
    Item: {
      description:
        "Array의 다형성을 구현하는 [콜백컴포넌트](https://blog.naver.com/one-in-me/223356121427) ```ElementType```",
    },
    Array: {
      description: "```ElementType```",
    },
  },
};

export default meta;
type STORY = StoryObj<typeof meta>;

export const Default: STORY = {
  args: {
    ...defaultProps,
    // @ts-ignore
    $itemFormat: "format0",
  },
};

export const Polymorphic: STORY = {
  args: polymorphicProps,
};

export const WithItemFormat: STORY = {
  args: withItemFormatProps,
};
