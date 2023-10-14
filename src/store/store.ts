import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./feature/auth-slice";
import { movieApi } from "./api/movie-api";
import { FavoriteSlice } from "./feature/favorite-slice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
    favorite: FavoriteSlice.reducer,
  },

  middleware: (getMiddleware) => {
    return getMiddleware({}).concat([movieApi.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
