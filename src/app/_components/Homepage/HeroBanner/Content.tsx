"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { OnScroll } from "../OnScroll";
import { MotionCardContent } from "../../Motion";
import { Button as ApplyButton } from "../../Subscriptions/Button";

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
            "linear-gradient(rgb(0, 0, 0, 30%), rgb(0, 0, 0, 10%) 40%, rgb(0, 0, 0, 80%) 90%, rgb(0, 0, 0, 80%))",
        }}
        style={{ backgroundColor, color }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            textAlign: "center",
            top: "66%",
          }}
        >
          <Box sx={{ mixBlendMode: "difference" }}>
            <Typography
              variant="h3"
              fontFamily="var(--font-bebas-neue)"
              letterSpacing={-1}
              sx={{
                fontSize: { lg: 100, sm: 88, xs: 44 },
              }}
            >
              Own Your Masters. Build Your Empire.
            </Typography>
            <Typography fontSize={16} mb={1}>
              The partner that turns proven talent into investor-ready
              companies. Keep 80% equity, 100% of your masters.
            </Typography>
            <Typography
              fontSize={14}
              textAlign="center"
              fontStyle="italic"
              sx={{ opacity: 0.8 }}
            >
              Acceptance is Invite-Only. Currently structuring our first cohort
              of 5 artists with proven market traction.
            </Typography>
          </Box>
          <ApplyButton sx={{ mt: 4 }} style={{ opacity }} />
        </Container>
      </MotionCardContent>
    )}
  />
);
