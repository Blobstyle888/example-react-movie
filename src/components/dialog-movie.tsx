import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Stack,
  Typography,
} from "@mui/material";
import { Movie } from "@/store/api/movie-api";

export interface DialogMovieProps {
  open: boolean;
  selectedValue?: Movie;
  onClose: () => void;
}

const DialogMovie = (props: DialogMovieProps) => {
  const { onClose, open, selectedValue } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} fullWidth>
      <DialogContent>
        <img
          src={selectedValue?.poster_url}
          style={{ width: "100%", height: "100%" }}
        />
        <Typography gutterBottom variant="h5" color="primary">
          {selectedValue?.title_th}
        </Typography>
        <Stack direction="column">
          <Typography
            gutterBottom
            variant="caption"
            color="text.secondary"
            sx={{ fontWeight: "700" }}
          >
            {selectedValue?.genre}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {selectedValue?.synopsis_th}
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogMovie;
