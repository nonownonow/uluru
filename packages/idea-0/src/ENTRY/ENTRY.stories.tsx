import type { Meta, StoryObj } from "@storybook/react";
import { ENTRY } from "~/ENTRY/ENTRY";
import { identity } from "../util/util";
const meta = {
  component: ENTRY,
  tags: ["autodocs"],
  argTypes: {
    Entry: {
      description: "```ElementType```",
    },
    Key: {
      description: "```ElementType```",
    },
    Value: {
      description: "```ElementType```",
    },
    $entry: {
      description:
        "엔트리 값 [```EntryData```](/?path=/docs/type--docs#entrydata) ",
    },
    $keyFormat: {
      description:
        "키의 포멧을 적용하는 함수 [```Formatter```](/?path=/docs/type--docs#formatter)",
    },
    $valueFormat: {
      description:
        "값의 포멧을 적용하는 함수 [```Formatter```](/?path=/docs/type--docs#formatter)",
    },
  },
} satisfies Meta<typeof ENTRY>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $entry: ["greeting", "hello"],
    Entry: "div",
    Key: "div",
    Value: "div",
    $keyFormat: identity,
    $valueFormat: identity,
  },
};

export const Polymorphic: Story = {
  args: {
    $entry: ["greeting", "hello"],
    Entry: "div",
    Key: "dt",
    Value: "dd",
  },
};

export const WithLabel: Story = {
  args: {
    $entry: ["greeting", "hello"],
    $keyFormat: (a) => `My ${a}`,
    $valueFormat: (a) => `${a} world`,
  },
};
