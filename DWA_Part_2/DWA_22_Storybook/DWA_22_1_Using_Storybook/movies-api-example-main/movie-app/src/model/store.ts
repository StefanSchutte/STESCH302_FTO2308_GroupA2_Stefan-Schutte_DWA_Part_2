import { createStore as createZustandStore, StoreApi } from "zustand";
import { createApi } from "../api";

type Preview = {
  id: number;
  title: string;
  actors: number;
  release: Date;
  image: string;
};

type Store = {
  phase: "Listing" | "Loading";
  list: Preview[];
};

const createTypedStore = createZustandStore<Store>();

export const createStore = (api: Api): StoreApi<Store> => {
  // const api = createApi();

  const store = createTypedStore(() => ({
    phase: "Loading",
    list: [],
  }));

  api.getMoviesList().then((data) => {
    store.setState({
      phase: "Listing",
      list: data,
    });
  });
  return store;
};
export const store = createStore();
