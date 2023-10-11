import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./feature/auth-slice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
  },

  //   middleware: (getMiddleware) => {
  //     getMiddleware({}).concat([]);
  //   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
