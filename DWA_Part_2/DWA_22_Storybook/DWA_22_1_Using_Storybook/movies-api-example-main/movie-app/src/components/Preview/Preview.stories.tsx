import { Preview } from "./Preview.tsx";
import { StoryObj, Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { mocks } from "./Preview.mocks.ts";
const meta: Meta<Preview> = {
  title: "components/Filters",
  component: Preview,
};
export default meta;

export const Basic: StoryObj<Preview> = {
  args: mocks.basic(),
};
