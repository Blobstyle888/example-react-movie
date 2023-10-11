"use client";

import { Button } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

import LayoutWithNavbar from "../layout-with-navbar";

const MoviePage: NextPage = () => {
  return (
    <LayoutWithNavbar>
      <h2>Movie Page</h2>
      <Link href="/favorite">
        <Button variant="contained">Favorite Page</Button>
      </Link>
    </LayoutWithNavbar>
  );
};

export default MoviePage;
