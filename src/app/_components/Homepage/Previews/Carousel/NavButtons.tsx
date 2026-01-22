"use client";

import { Box, Button, Slider, Typography } from "@mui/material";
import type { Swiper } from "swiper";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

type NavButtonsProps = {
  swiper: Swiper | null;
  isPlaying?: boolean;
  onPlayPause?: () => void;
  currentTime?: number;
  duration?: number;
  onSeek?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const NavButtons = ({
  swiper,
  isPlaying,
  onPlayPause,
  currentTime = 0,
  duration = 0,
  onSeek,
}: NavButtonsProps) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignSelf: "center",
        width: "100%",
        maxWidth: 400,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
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
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, px: 1 }}>
        <Typography
          variant="caption"
          color="white"
          sx={{ minWidth: "fit-content" }}
        >
          {formatTime(currentTime)}
        </Typography>
        <Slider
          value={currentTime}
          max={duration || 100}
          //@ts-expect-error skipping type check for event
          onChange={(_, value) => onSeek?.({ target: { value } })}
          sx={{
            color: "primary.main",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 12,
              height: 12,
            },
          }}
        />
        <Typography
          variant="caption"
          color="white"
          sx={{ minWidth: "fit-content" }}
        >
          {formatTime(duration)}
        </Typography>
      </Box>
    </Box>
  );
};
