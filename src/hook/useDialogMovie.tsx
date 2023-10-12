"use client";

import { Movie } from "@/store/api/movie-api";
import { useRef, useState } from "react";

const useDialogMovie = () => {
  const [open, setOpen] = useState(false);

  let movieRef = useRef<Movie>();

  const handleClickOpen = (movie: Movie) => {
    setOpen(true);
    movieRef.current = movie;
    console.log("test");
  };

  const handleClose = () => {
    setOpen(false);
    // setSelectedValue(value);
  };
  // const [selectedValue, setSelectedValue] = useState("");

  return { open, selectMovie: movieRef.current, handleClickOpen, handleClose };
};

export default useDialogMovie;
