import type { Meta, StoryObj } from "@storybook/react";
import { VALUE } from "./VALUE";
import { identity } from "@fxts/core";

const meta = {
  component: VALUE,
  tags: ["autodocs"],
  argTypes: {
    Value: {
      description: '```ElementType```',
    },
    $value: {
      description: '값 [```Primitive```](/?path=/docs/types-type--docs#primitive) ',
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
    $valueFormat: identity,
    Value: "div",
  },
};

export const Polymorphic: Story = {
  args: {
    $value: "Hello <em>world</em>",
    Value: 'p'
  },
};

export const WithLabel: Story = {
  args: {
    $value: "Hello <em>world</em>",
    $valueFormat: (a) => `My ${a}`,
  },
};
