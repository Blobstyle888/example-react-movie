import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { movieApi } from "../api/movie-api";
interface Movie {
  id: number;
  movieCode: string[];
  title_en: string;
  title_th: string;
  rating: string;
  rating_id: number;
  duration: number;
  release_date: string;
  sneak_date: string;
  synopsis_th: string;
  synopsis_en: string;
  director: string;
  actor: string;
  genre: string;
  poster_ori: string;
  poster_url: string;
  trailer: string;
  tr_ios: string;
  tr_hd: string;
  tr_sd: string;
  tr_mp4: string;
  priority: string;
  now_showing: string;
  advance_ticket: string;
  date_update: string;
  show_buyticket: string;
  trailer_cms_id: string;
  trailer_ivx_key: string;
  isFavorite: boolean;
}

type InitialState = {
  movies: Movie[];
};

const initialState: InitialState = {
  movies: [],
};

export const MovieSlice = createSlice({
  name: "movie-slice",
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<number>) => {
      const updateMovie = {
        ...state.movies[action.payload],
        isFavorite: !state.movies[action.payload].isFavorite,
      };
      const updateMovies = [...state.movies];
      updateMovies[action.payload] = updateMovie;
      console.log(updateMovies);

      state.movies = [...updateMovies];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      movieApi.endpoints.getMovieList.matchFulfilled,
      (state, { payload }) => {
        payload.movies.map((item) => (item.isFavorite = false));

        state.movies = [...state.movies, ...payload.movies];
      }
    );
  },
});

export const { setFavorite } = MovieSlice.actions;

export default MovieSlice.actions;
