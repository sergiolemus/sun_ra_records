"use client";

import { Box, Card } from "@mui/material";
import { Content } from "./Content";
import { Background } from "./Background";
import { useState } from "react";

export const Previews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      id="approach-section"
      sx={{
        display: "flex",
        backgroundColor: "transparent",
        height: { lg: "100vh", md: "1000px", sm: "1000px", xs: "1000px" },
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
        <Background activeIndex={activeIndex} />
        <Content activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </Card>
    </Box>
  );
};
