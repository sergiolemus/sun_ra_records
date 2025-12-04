"use client";

import React from "react";
import { Container, Typography } from "@mui/material";
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
            "linear-gradient(rgb(0, 0, 0, 30%), rgb(0, 0, 0, 10%) 30%, rgb(0, 0, 0, 30%) 80%, rgb(0, 0, 0, 20%))",
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
          <Typography
            variant="h3"
            fontFamily="var(--font-bebas-neue)"
            letterSpacing={-1}
            sx={{ fontSize: { lg: 88, sm: 88, xs: 44 } }}
          >
            Own Your Masters. Build Your Empire.
          </Typography>
          <Typography fontSize={16} mb={1}>
            The artist accelerator that turns proven talent into investor-ready
            companies. Keep 80% equity, 100% of your masters.
          </Typography>
          <Typography fontSize={14} sx={{ opacity: 0.8, fontStyle: "italic" }}>
            Invite only. Currently accepting artists with 50k+ monthly listeners
            and proven market traction.
          </Typography>
        </Container>
      </MotionCardContent>
    )}
  />
);
