import type { Meta, StoryObj } from "@storybook/react";
import { VALUE } from "./VALUE";
import { identity } from "../util/util";

const meta = {
  component: VALUE,
  tags: ["autodocs"],
  argTypes: {
    Value: {
      description: "```ElementType```",
    },
    $value: {
      description: "값 [```ValueData```](/?path=/docs/type--docs#valuedata) ",
    },
    $valueFormat: {
      description:
        "값에 포멧을 적용하는 함수 [```Formatter<D>```](/?path=/docs/type--docs#formatter)",
    },
  },
} satisfies Meta<typeof VALUE>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $value: "Hello <em>world</em>",
    $valueFormat: identity,
    Value: "div",
  },
};

export const Polymorphic: Story = {
  args: {
    $value: "Hello <em>world</em>",
    Value: "p",
  },
};

export const WithValueFormat: Story = {
  args: {
    $value: "Hello <em>world</em>",
    $valueFormat: (a) => `My ${a}`,
  },
};

export const WithChildren: Story = {
  args: {
    $value: "Hello <em>world</em>",
    children: "HELLO <em>WORLD</em>",
    $valueFormat: (a) => `My ${a}`,
  },
};
