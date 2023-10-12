"use client";

import { Button } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

import LayoutWithNavbar from "../layout-with-navbar";
import { Movie, useGetMovieListQuery } from "@/store/api/movie-api";
import { addFavorite, removeFavorite } from "@/store/feature/favorite-slice";
import { useDispatch } from "react-redux";

const MoviePage: NextPage = () => {
  const { data } = useGetMovieListQuery();
  console.log(data?.movies);

  const dispatch = useDispatch();

  const addFavoriteToRedux = (movie: Movie) => {
    dispatch(addFavorite(movie));
  };

  return (
    <LayoutWithNavbar>
      <h2>Movie List</h2>
      {data &&
        data.movies.map((movie, _) => {
          return (
            <div key={movie.id}>
              {movie.title_th}
              <Button onClick={() => addFavoriteToRedux(movie)}>
                Add Favorite
              </Button>
            </div>
          );
        })}
    </LayoutWithNavbar>
  );
};

export default MoviePage;
