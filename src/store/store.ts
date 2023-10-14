import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./api/movie-api";
import { FavoriteSlice } from "./feature/favorite-slice";

export const store = configureStore({
  reducer: {
    favorite: FavoriteSlice.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },

  middleware: (getMiddleware) => {
    return getMiddleware({}).concat([movieApi.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
