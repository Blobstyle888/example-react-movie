"use client";

import { Button } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

import LayoutWithNavbar from "../layout-with-navbar";
import { Movie, useGetMovieListQuery } from "@/store/api/movie-api";
import { addFavorite, removeFavorite } from "@/store/feature/favorite-slice";
import { useDispatch } from "react-redux";
import DialogMovie from "@/components/dialog-movie";
import { useState } from "react";
import useDialogMovie from "@/hook/useDialogMovie";
import useGetMovieList from "@/hook/useGetMovieList";

const MoviePage: NextPage = () => {
  const { data, addFavoriteToRedux } = useGetMovieList();

  const { open, handleClickOpen, handleClose } = useDialogMovie();

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
              <Button onClick={() => handleClickOpen(movie)}>See more</Button>
            </div>
          );
        })}
      <DialogMovie
        // selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </LayoutWithNavbar>
  );
};

export default MoviePage;
