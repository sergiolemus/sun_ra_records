"use client";

import React from "react";
import { Container, Typography } from "@mui/material";
import { ParallaxScroll } from "../ParallaxScroll";
import { Button as EarlyAccessButton } from "../../Subscriptions/Button";
import { OnScroll } from "../OnScroll";
import { MotionCardContent } from "../../Motion";

export const Content = () => (
  <OnScroll
    in={{ start: 300, end: 600 }}
    colorA={{ start: "#00000000", end: "#000" }}
    colorB={{ start: "#FFF", end: "#000" }}
    number={{ start: 1, end: 0 }}
    render={({ colorA: backgroundColor, colorB: color, number: opacity }) => (
      <MotionCardContent
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          alignContent: "start",
          background:
            "linear-gradient(rgb(0, 0, 0, 0%), rgb(0, 0, 0, 30%) 75%, rgb(0, 0, 0, 20%))",
        }}
        style={{ backgroundColor, color }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            top: "60%",
          }}
        >
          <ParallaxScroll end={-200}>
            <Typography
              variant="h3"
              fontFamily="var(--font-alkatra)"
              letterSpacing={-1}
              sx={{ fontSize: { lg: 88, sm: 88, xs: 44 } }}
            >
              Redefine Music Production.
            </Typography>
          </ParallaxScroll>
          <Typography fontSize={16} mb={3}>
            Experience the future of music creation with the world&apos;s most
            advanced AI partner for musicians and producers.
          </Typography>
          <EarlyAccessButton style={{ opacity }} />
        </Container>
      </MotionCardContent>
    )}
  />
);
