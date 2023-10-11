"use client";

import { Button } from "@mui/material";
import Link from "next/link";

import LayoutWithNavbar from "../layout-with-navbar";

const FavoritePage = () => {
  return (
    <LayoutWithNavbar>
      <h2>Favorite Page</h2>
      <Link href="/movie">
        <Button variant="contained">Back to Movie List</Button>
      </Link>
    </LayoutWithNavbar>
  );
};

export default FavoritePage;
