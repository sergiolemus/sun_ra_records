"use client";

import React from "react";
import { Container, Typography } from "@mui/material";
import { MotionCardContent } from "../../Motion";
import { Form } from "./Form";

export const Content = () => {
  return (
    <MotionCardContent
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(rgb(0, 0, 0, 70%), rgb(0, 0, 0, 20%) 63%, rgb(0, 0, 0, 90%))",
        alignContent: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography
          variant="h2"
          fontFamily="var(--font-bebas-neue)"
          sx={{
            textAlign: "center",
            fontSize: { lg: 56, md: 48, xs: 40 },
            color: "common.white",
          }}
        >
          Be Among the First
        </Typography>
        <Container maxWidth="sm">
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              textAlign: "center",
              color: "common.white",
            }}
          >
            Limited spots available. Apply to turn your traction into a fundable
            business.
          </Typography>
        </Container>
      </Container>
      <Form style={{}} />
    </MotionCardContent>
  );
};
