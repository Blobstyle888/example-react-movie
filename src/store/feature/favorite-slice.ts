import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Movie } from "../api/movie-api";

type Favorite = {
  [key: string]: Movie;
};

type InitialState = {
  favoriteList: Favorite;
};

const initialState: InitialState = {
  favoriteList: {},
};

export const FavoriteSlice = createSlice({
  name: "favorite_slice",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      const favoriteListClone = { ...state.favoriteList };
      favoriteListClone[action.payload.id] = action.payload;

      state.favoriteList = {
        ...state.favoriteList,
        ...favoriteListClone,
      };
      console.log("add", state.favoriteList);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const favoriteListClone = { ...state.favoriteList };
      delete favoriteListClone[action.payload];

      state.favoriteList = {
        ...favoriteListClone,
      };
      console.log("remove", state.favoriteList);
    },
  },
});

export const { addFavorite, removeFavorite } = FavoriteSlice.actions;

export default FavoriteSlice.actions;
