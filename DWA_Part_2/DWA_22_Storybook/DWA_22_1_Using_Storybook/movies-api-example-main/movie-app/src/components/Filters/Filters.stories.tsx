import { Filters } from "./Filters.tsx";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<Filters> = {
  title: "components/Filters",
  component: Filters,

  argTypes: {
    release: {
      control: "date",
    },
  },
};
export default meta;

export const Basic: StoryObj<Filters> = {
  args: {},
};
