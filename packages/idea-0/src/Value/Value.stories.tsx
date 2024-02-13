import type { Meta, StoryObj } from "@storybook/react";
import { VALUE } from "./VALUE";

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
  },
};

export const Polymorphic: Story = {
  args: {
    Root: "p",
    $value: "Hello <em>world</em>",
  },
};

export const WithLabel: Story = {
  args: {
    Root: "h1",
    $value: "Hello <em>world</em>",
    $valueFormat: (a) => `My ${a}`,
  },
};
