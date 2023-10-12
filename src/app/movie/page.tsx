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
import { NextPage } from "next";
import LayoutWithNavbar from "../layout-with-navbar";
import DialogMovie from "@/components/dialog-movie";

const MoviePage: NextPage = () => {
  const { data } = useGetMovieList();

  const { addFavoriteToRedux } = useGetMovieList();

  const { open, selectMovie, handleClickOpen, handleClose } = useDialogMovie();

  return (
    <LayoutWithNavbar>
      <h2>Movie List</h2>
      {data && (
        <Grid container spacing={2} direction="row" alignItems="stretch">
          {data &&
            data.map((movie, movieIndex) => {
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
                      <Button
                        size="small"
                        onClick={() => handleClickOpen(movie)}
                      >
                        See more
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      )}
      <DialogMovie
        open={open}
        onClose={handleClose}
        selectedValue={selectMovie}
      />
    </LayoutWithNavbar>
  );
};

export default MoviePage;
