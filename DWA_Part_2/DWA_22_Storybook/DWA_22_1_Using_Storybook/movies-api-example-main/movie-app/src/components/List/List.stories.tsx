import { List } from "./List.tsx";
import { mocks } from "../Preview";

const meta = {
  title: "components/List",
};
export default meta;

const list: List["list"] = new Array(40)
  .fill(undefined)
  .map(mocks.basic)
  .map((item, index) => ({
    ...item,
    id: index + 1,
  }));

export const Basic = () => <List list={list} />;
