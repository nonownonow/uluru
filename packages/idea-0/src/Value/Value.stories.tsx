import type { Meta, StoryObj } from "@storybook/react";
import { VALUE } from "./VALUE";
import { Identity } from "~/old/VALUE/util";
import { identity } from "@fxts/core";

const meta = {
  component: VALUE,
  tags: ["autodocs"],
  argTypes: {
    Value: {
      description: '```ElementType```',
    },
    $value: {
      description: '값에 포멧을 적용하는 함수 [(타입상세)](/?path=/docs/type--docs#formatter) ```Formatter<D>```',
    },
    $valueFormat: {
      description: '값에 포멧을 적용하는 함수 [```Formatter<D>```](/?path=/docs/types-type--docs#formatter)',
    },
  },
} satisfies Meta<typeof VALUE>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $value: "Hello <em>world</em>",
    Value: "div",
    $valueFormat: identity,
  },
};

export const Polymorphic: Story = {
  args: {
    $value: "Hello <em>world</em>",
  },
};

export const WithLabel: Story = {
  args: {
    $value: "Hello <em>world</em>",
    $valueFormat: (a) => `My ${a}`,
  },
};
