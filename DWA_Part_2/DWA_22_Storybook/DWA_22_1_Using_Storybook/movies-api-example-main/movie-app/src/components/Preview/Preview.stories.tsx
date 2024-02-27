import { Preview } from "./Preview.tsx";
import { StoryObj, Meta } from "@storybook/react";
// import { faker } from "@faker-js/faker";
import { mocks } from "./Preview.mocks.ts";

const meta: Meta<Preview> = {
  title: "components/FiltersPresentation",
  component: Preview,

  argTypes: {
    release: {
      control: "date",
    },
  },
};
export default meta;

export const Basic: StoryObj<Preview> = {
  args: mocks.basic(),
};
