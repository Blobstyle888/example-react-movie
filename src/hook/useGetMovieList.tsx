import { Movie, useGetMovieListQuery } from "@/store/api/movie-api";
import { addFavorite } from "@/store/feature/favorite-slice";
import { useDispatch } from "react-redux";

const useGetMovieList = () => {
  const { data } = useGetMovieListQuery();

  const dispatch = useDispatch();

  const addFavoriteToRedux = (movie: Movie) => {
    dispatch(addFavorite(movie));
  };
  return { data, addFavoriteToRedux };
};

export default useGetMovieList;
