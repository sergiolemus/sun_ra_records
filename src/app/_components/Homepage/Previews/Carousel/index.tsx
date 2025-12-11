"use client";

import { useState, useRef, useEffect } from "react";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { NavButtons } from "./NavButtons";
import { Box, Card, CardContent, Typography } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type CarouselProps = {
  items: {
    title: string;
    artist: string;
    src: string;
    song: string;
  }[];
  activeIndex?: number;
  setActiveIndex?: (index: number) => void;
};

export const Carousel = ({
  items,
  activeIndex: parentActiveIndex,
  setActiveIndex: parentSetActiveIndex,
}: CarouselProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const index = parentActiveIndex ?? activeIndex;

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [index]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.load();

      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
    }
  }, [index]);

  return (
    <Box
      sx={{
        flex: 3,
        width: "75%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 20,
          modifier: 30,
          slideShadows: false,
        }}
        onSwiper={setSwiper}
        onSlideChange={({ realIndex }) => {
          if (parentSetActiveIndex) {
            parentSetActiveIndex(realIndex);
            return;
          }

          setActiveIndex(realIndex);
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Card
              variant="outlined"
              key={index}
              sx={{
                display: "flex",
                border: "none",
                borderRadius: 8,
                width: "75%",
              }}
            >
              <Box
                component="img"
                src={item.src}
                alt={`${item.artist} ${item.title}`}
                sx={{ width: "100%" }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mx: 12,
          pt: 2,
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            px: 2,
            background: "transparent",
            color: "white",
          }}
        >
          <Typography variant="h4" fontSize={24} fontWeight="bold">
            {items[index].title}
          </Typography>
          <Typography variant="body1" fontSize={16}>
            {items[index].artist}
          </Typography>
        </Box>
        <audio ref={audioRef} src={items[index].song} key={items[index].song} />
        <NavButtons
          swiper={swiper}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
        />
      </Box>
    </Box>
  );
};
