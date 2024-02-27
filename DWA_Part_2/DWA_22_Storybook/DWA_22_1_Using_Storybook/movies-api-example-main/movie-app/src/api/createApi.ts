import { mocks } from "../components/Preview";
import { List } from "../components/List";
import z from "zod";

const list: List["movies"] = new Array(40)
  .fill(undefined)
  .map(mocks.basic)
  .map((item, index) => ({
    ...item,
    id: index + 1,
  }));

export type Api = {
  getMoviesList: () => Promise<{
    id: number;
    title: string;
    actors: number;
    release: Date;
    image: string;
  }>;
};

const response = z.array(
  z.object({
    id: z.number(),
    title: z.string().nonempty(),
    actors: z.number(),
    release: z.string(),
    image: z.string(),
  }),
);

const URL = "https://movies-exampe-api.netlify.app/";
const getMoviesList: Api["getMoviesList"] = () => {
  const result = fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response;
    })
    .then((response) => response.json())
    .then((data) => schema.parse(data))
    .then((data) => {
      const result = date.map((item) => ({
        ...item,
        release: new Date(item.release),
      }));

      return result;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });

  return result;
};

export const createApi = (): Api => {
  return {
    getMoviesList,
    // new Promise((resolve) => {
    //   setTimeout(() => resolve(list), 3000);
    // }),
  };
};
