import type { Meta, StoryObj } from "@storybook/react";
import { Welcome } from "./Welcome";

const meta: Meta<typeof Welcome> = {
  component: Welcome,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Welcome>;

export const Default: Story = {
  args: {
    children: "foo bar baz",
  },
};
