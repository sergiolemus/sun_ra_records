"use client";

import { IconButton, Box, Button } from "@mui/material";
import type { Swiper } from "swiper";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

type NavButtonsProps = {
  swiper: Swiper | null;
  isPlaying?: boolean;
  onPlayPause?: () => void;
};

export const NavButtons = ({
  swiper,
  isPlaying,
  onPlayPause,
}: NavButtonsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
        alignSelf: "center",
      }}
    >
      <Button
        color="primary"
        onClick={() => swiper?.slidePrev()}
        sx={{ p: 0, minWidth: "44px", height: "44px" }}
      >
        <SkipPreviousIcon fontSize="large" />
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onPlayPause}
        sx={{ p: 0, minWidth: "44px", height: "44px" }}
      >
        {isPlaying ? (
          <PauseIcon fontSize="large" />
        ) : (
          <PlayArrowIcon fontSize="large" />
        )}
      </Button>
      <Button
        color="primary"
        onClick={() => swiper?.slideNext()}
        sx={{ p: 0, minWidth: "44px", height: "44px" }}
      >
        <SkipNextIcon fontSize="large" />
      </Button>
    </Box>
  );
};
