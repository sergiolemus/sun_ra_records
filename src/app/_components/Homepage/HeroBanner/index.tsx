import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Content } from "./Content";
import { Background } from "./Background";

export const HeroBanner = () => {
  return (
    <Box
      id="top-section"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Card
        square
        elevation={0}
        sx={{
          flexGrow: 1,
          position: "relative",
          height: "100vh",
          width: "100%",
        }}
      >
        <Background />
        <Content />
      </Card>
    </Box>
  );
};
