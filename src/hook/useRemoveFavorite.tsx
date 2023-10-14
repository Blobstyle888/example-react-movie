"use client";

import { movieApi } from "@/store/api/movie-api";
import { removeFavorite } from "@/store/feature/favorite-slice";
import { useAppDispatch, useAppSelector } from "@/store/hook";

const useRemoveFavorite = () => {
  const { favoriteList } = useAppSelector((state) => state.favorite);

  const dispatch = useAppDispatch();

  const removeFavoriteToRedux = (id: number) => {
    const setFavoriteFromCache = movieApi.util.updateQueryData(
      "getMovieList",
      undefined,
      (args) => {
        const movieIndex = args.movies.findIndex((movie) => movie.id === id);

        args.movies[movieIndex] = {
          ...args.movies[movieIndex],
          isFavorite: !args.movies[movieIndex].isFavorite,
        };
      }
    );
    dispatch(setFavoriteFromCache);
    dispatch(removeFavorite(id));
  };

  return { favoriteList, removeFavoriteToRedux };
};

export default useRemoveFavorite;
