"use client";

import { Box, Card } from "@mui/material";
import { Content } from "./Content";
import { Background } from "./Background";
import { useState } from "react";

export const Previews = () => {
  const items = [
    {
      title: "littttttttttt",
      artist: "R99tz",
      src: "https://rvkogc2we8rdzja3.public.blob.vercel-storage.com/previews/r99tz/covers/drawn_1.webp",
      song: "https://rvkogc2we8rdzja3.public.blob.vercel-storage.com/previews/r99tz/clips/lit_clip_b_s15s_p30s_128k_fo.mp3",
    },
    {
      title: "prepared",
      artist: "R99tz",
      src: "https://rvkogc2we8rdzja3.public.blob.vercel-storage.com/previews/r99tz/covers/drawn_2.webp",
      song: "https://rvkogc2we8rdzja3.public.blob.vercel-storage.com/previews/r99tz/clips/prepared_clip_b_128k_fo.mp3",
    },
    {
      title: "STAIRWAY TO HEAVEN",
      artist: "R99tz",
      src: "https://rvkogc2we8rdzja3.public.blob.vercel-storage.com/previews/r99tz/covers/cosmic_1.webp",
      song: "https://rvkogc2we8rdzja3.public.blob.vercel-storage.com/previews/r99tz/clips/stairway_clip_s0s_30s_128k_fo.mp3",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      id="approach-section"
      sx={{
        display: "flex",
        backgroundColor: "transparent",
        height: { lg: "100vh", md: "1600px", sm: "1200px", xs: "1200px" },
      }}
    >
      <Card
        elevation={0}
        sx={{
          flexGrow: 1,
          position: "relative",
          width: "100%",
          backgroundColor: "inherit",
        }}
      >
        <Background items={items} activeIndex={activeIndex} />
        <Content
          items={items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </Card>
    </Box>
  );
};
