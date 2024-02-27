import { useStore } from "zustand";
import { store } from "../../model";

export const App = () => {
  const phase = useStore(store, (state) => state.phase);
  const movies = useStore(store, (state) => state.list);
  const filter = useStore(store, (state) => state.filter);

  const toggleConfiguration = useStore(
    store,
    (state) => state.toggleConfiguration,
  );

  return (
    <List
      movies={movies}
      phase={phase}
      filter={filter}
      toggleConfigure={toggleConfiguration}
      onFilter={({ search }) => {
        updateSearch(search || "");
      }}
    />
  );
};
