import type { Meta, StoryObj } from "@storybook/react";
import { VALUE } from "./Value";

const meta = {
  component: VALUE,
  tags: ["autodocs"],
} satisfies Meta<typeof VALUE>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Root: "h1",
    $value: "Hello <em>world</em>",
    $valueLabel: (a) => `My ${a}`,
  },
};
