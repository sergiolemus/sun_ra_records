"use client";

import React from "react";
import { Container, Typography, alpha, useMediaQuery } from "@mui/material";
import { OnScroll } from "../OnScroll";
import { MotionCardContent } from "../../Motion";
import { Form } from "./Form";

export const Content = () => {
  const isMobile = useMediaQuery(({ breakpoints: b }) => b.down("sm"));
  const isTablet = useMediaQuery(({ breakpoints: b }) => b.down("lg"));

  return (
    <OnScroll
      in={{
        start: 4900,
        end: 5200,
        ...(isTablet && { start: 5200, end: 5500 }),
        ...(isMobile && { start: 6300, end: 6600 }),
      }}
      colorA={{ start: "#000", end: alpha("#000", 0) }}
      colorB={{ start: "#000", end: alpha("#000", 0.2) }}
      colorC={{ start: "#000", end: "#FFF" }}
      colorD={{ start: alpha("#000", 0.3), end: alpha("#888", 0.3) }}
      render={({
        colorA: backgroundColor,
        colorC: color,
        colorD: borderColor,
        colorB,
      }) => (
        <MotionCardContent
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(rgb(0, 0, 0, 70%), rgb(0, 0, 0, 20%) 63%, rgb(0, 0, 0, 90%))",
            alignContent: "start",
            pt: 40,
          }}
          style={{ backgroundColor, color, borderColor }}
        >
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="h2"
              fontFamily="var(--font-alkatra)"
              sx={{
                textAlign: "center",
                fontSize: { lg: 56, md: 48, xs: 40 },
              }}
            >
              Be Among the First
            </Typography>
            <Container maxWidth="sm">
              <Typography variant="body1" sx={{ mt: 1, textAlign: "center" }}>
                Get early access and help shape the world&apos;s first emergent
                bandmate.
              </Typography>
            </Container>
          </Container>
          <Form style={{ backgroundColor: colorB, color, borderColor }} />
        </MotionCardContent>
      )}
    />
  );
};
