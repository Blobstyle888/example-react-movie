"use client";

import { Movie } from "@/store/api/movie-api";
import { useState } from "react";

const useDialogMovie = () => {
  const [open, setOpen] = useState(false);
  //
  const handleClickOpen = (movie: Movie) => {
    setOpen(true);
    console.log(movie);
  };

  const handleClose = () => {
    setOpen(false);
    // setSelectedValue(value);
  };
  // const [selectedValue, setSelectedValue] = useState("");

  return { open, handleClickOpen, handleClose };
};

export default useDialogMovie;
