import { List } from "./List.tsx";
import { mocks } from "../Preview";

const meta = {
  title: "components/List",
};
export default meta;

export const list: List["movies"] = new Array(40)
  .fill(undefined)
  .map(mocks.basic)
  .map((item, index) => ({
    ...item,
    id: index + 1,
    title: index === 3 ? "Lord of the Rings" : item.title,
  }));

const props: PICK<List, "onFilter" | "toggleConfigure"> = {
  filter: "",
  onFilter: () => console.log("onFilter"),
  toggleConfigure: () => console.log("toggleConfigure"),
};

export const Loading = () => <List {...props} movies={[]} phase="LOADING" />;

export const Listing = () => (
  <List {...props} movies={list} phase="LISTENING" />
);
export const Error = () => <List {...props} movies={[]} phase="ERROR" />;

export const Filter = () => <List {...props} movies={list} phase="ERROR" />;

export const Configuring = () => (
  <List movies={list} phase="CONFIGURING" filter="" />
);
