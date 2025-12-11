"use client";

import { IconButton, Box, Button } from "@mui/material";
import type { Swiper } from "swiper";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

type NavButtonsProps = {
  swiper: Swiper | null;
};

export const NavButtons = ({ swiper }: NavButtonsProps) => {
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
        sx={{ p: 0, minWidth: "44px", height: "44px" }}
        onClick={() => swiper?.slidePrev()}
      >
        <SkipPreviousIcon fontSize="large" />
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ p: 0, minWidth: "44px", height: "44px" }}
      >
        <PlayArrowIcon fontSize="large" />
      </Button>
      <Button
        color="primary"
        sx={{ p: 0, minWidth: "44px", height: "44px" }}
        onClick={() => swiper?.slideNext()}
      >
        <SkipNextIcon fontSize="large" />
      </Button>
    </Box>
  );
};
