"use client";

import { IconButton, Box } from "@mui/material";
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
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderRadius: 8,
        padding: 1,
        backdropFilter: "blur(10px)",
        alignSelf: "center",
      }}
    >
      <IconButton
        onClick={() => swiper?.slidePrev()}
        sx={{
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <SkipPreviousIcon fontSize="large" />
      </IconButton>
      <IconButton
        sx={{
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <PlayArrowIcon fontSize="large" />
      </IconButton>
      <IconButton
        onClick={() => swiper?.slideNext()}
        sx={{
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <SkipNextIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};
