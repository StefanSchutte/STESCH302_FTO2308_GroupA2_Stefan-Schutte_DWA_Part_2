import { App } from "./App.tsx";
import { mocks } from "../Preview";

const meta = {
  title: "components/App",
};
export default meta;

const list: App["list"] = new Array(40)
  .fill(undefined)
  .map(mocks.basic)
  .map((item) => ({
    ...item,
    id: index + 1,
  }));

export const Basic = () => <App />;
