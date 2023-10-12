"use client";

import { Button } from "@mui/material";
import LayoutWithNavbar from "../layout-with-navbar";
import { useAppSelector } from "@/store/hook";
import { useDispatch } from "react-redux";
import { removeFavorite } from "@/store/feature/favorite-slice";

const FavoritePage = () => {
  const { favoriteList } = useAppSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const removeFavoriteToRedux = (id: number) => {
    dispatch(removeFavorite(id));
  };
  return (
    <LayoutWithNavbar>
      <h2>Favorite List</h2>

      {Object.keys(favoriteList) &&
        Object.keys(favoriteList).map((movieId) => {
          const movie = favoriteList[movieId];
          return (
            <div key={movie.id}>
              {movie.title_th}

              <Button onClick={() => removeFavoriteToRedux(movie.id)}>
                Remove Favorite
              </Button>
            </div>
          );
        })}
    </LayoutWithNavbar>
  );
};

export default FavoritePage;
