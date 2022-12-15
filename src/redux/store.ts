import { Person } from "@/models";
import { configureStore, Store } from "@reduxjs/toolkit";
import favoritesSlice from "./states/favorites";
import peopleSlice from "./states/people";

export interface AppStore {
  people: Person[];
  favorites: Person[];
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice,
    favorites: favoritesSlice,
  },
});
