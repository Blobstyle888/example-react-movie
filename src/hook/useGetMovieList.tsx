"use client";

import { Movie, movieApi, useGetMovieListQuery } from "@/store/api/movie-api";
import { addFavorite } from "@/store/feature/favorite-slice";
import { useAppDispatch, useAppSelector } from "@/store/hook";

const useGetMovieList = () => {
  const { data: movies } = useGetMovieListQuery();

  const dispatch = useAppDispatch();

  const addFavoriteToRedux = (movie: Movie, movieIndex: number) => {
    dispatch(addFavorite(movie));
    const setFavoriteFromCache = movieApi.util.updateQueryData(
      "getMovieList",
      undefined,
      (args) => {
        args.movies[movieIndex] = {
          ...args.movies[movieIndex],
          isFavorite: !args.movies[movieIndex].isFavorite,
        };
      }
    );
    dispatch(setFavoriteFromCache);
  };
  return { data: movies ? movies.movies : [], addFavoriteToRedux };
};

export default useGetMovieList;
