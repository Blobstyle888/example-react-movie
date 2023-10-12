"use client";

import { Movie, useGetMovieListQuery } from "@/store/api/movie-api";
import { addFavorite } from "@/store/feature/favorite-slice";
import { setFavorite } from "@/store/feature/movie-slice";
import { useAppSelector } from "@/store/hook";
import { useDispatch } from "react-redux";

const useGetMovieList = () => {
  useGetMovieListQuery();
  const { movies } = useAppSelector((state) => state.movies);

  console.log("movies:", movies);
  const dispatch = useDispatch();

  const addFavoriteToRedux = (movie: Movie, movieIndex: number) => {
    dispatch(addFavorite(movie));
    dispatch(setFavorite(movieIndex));
  };
  return { data: movies, addFavoriteToRedux };
};

export default useGetMovieList;
