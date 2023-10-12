"use client";

import { removeFavorite } from "@/store/feature/favorite-slice";
import { setFavorite } from "@/store/feature/movie-slice";
import { useAppSelector } from "@/store/hook";
import { useDispatch } from "react-redux";

const useRemoveFavorite = () => {
  const { favoriteList } = useAppSelector((state) => state.favorite);
  const { movies } = useAppSelector((state) => state.movies);

  const dispatch = useDispatch();

  const removeFavoriteToRedux = (id: number) => {
    const movieIndex = movies.findIndex((movie) => movie.id === id);
    dispatch(removeFavorite(id));
    dispatch(setFavorite(movieIndex));
  };

  return { favoriteList, removeFavoriteToRedux };
};

export default useRemoveFavorite;
