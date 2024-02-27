import { Presentation } from "./Filters.Presentation.tsx";
import { StoryObj, Meta } from "@storybook/react";
//import { Filters } from "./FiltersPresentation.tsx";

const meta: Meta<Presentation> = {
  title: "components/FiltersPresentation",
  component: Presentation,

  argTypes: {
    release: {
      control: "date",
    },
  },
};
export default meta;

export const Basic: StoryObj<FiltersPresentation> = {
  args: {},
};
