"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import useDialogMovie from "@/hook/useDialogMovie";
import useGetMovieList from "@/hook/useGetMovieList";
import { Movie } from "@/store/api/movie-api";
import DialogMovie from "./dialog-movie";

type MovieListItemProps = {
  movies: Movie[];
};

const MovieListItem = (props: MovieListItemProps) => {
  const { movies } = props;

  const { addFavoriteToRedux } = useGetMovieList();

  const { open, selectMovie, handleClickOpen, handleClose } = useDialogMovie();

  return (
    <>
      <Grid container spacing={2} direction="row" alignItems="stretch">
        {movies.map((movie, movieIndex) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
              <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardMedia
                  sx={{ height: 400 }}
                  image={movie.poster_url}
                  title={movie.title_th}
                />
                <CardContent>
                  <Stack direction="row">
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color="primary"
                      sx={{
                        width: "100%",
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                      }}
                    >
                      {movie.title_th}
                    </Typography>
                    <IconButton
                      onClick={() => addFavoriteToRedux(movie, movieIndex)}
                    >
                      {movie.isFavorite ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                  </Stack>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontWeight: "700" }}
                  >
                    {movie.genre}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                    }}
                  >
                    {movie.synopsis_th}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleClickOpen(movie)}>
                    See more
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <DialogMovie
        open={open}
        onClose={handleClose}
        selectedValue={selectMovie}
      />
    </>
  );
};

export default MovieListItem;
