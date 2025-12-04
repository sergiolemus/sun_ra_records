"use client";

import React from "react";
import {
  Box,
  CardContent,
  Container,
  Typography,
  alpha,
  useMediaQuery,
} from "@mui/material";
import { Button as EarlyAccessButton } from "../../Subscriptions/Button";
import { OnScroll } from "../OnScroll";
import { MotionCard, MotionCardContent } from "../../Motion";

export const Content = () => {
  const isMobile = useMediaQuery(({ breakpoints: b }) => b.down("sm"));
  const isTablet = useMediaQuery(({ breakpoints: b }) => b.down("lg"));

  return (
    <OnScroll
      in={{
        start: 1675,
        end: 1700,
        ...(isTablet && { start: 1625, end: 1650 }),
        ...(isMobile && { start: 1800, end: 1825 }),
      }}
      out={{
        start: 2000,
        end: 2300,
        ...(isTablet && { start: 2300, end: 2600 }),
        ...(isMobile && { start: 2600, end: 2900 }),
      }}
      colorA={{ start: "#000", end: "#00000000" }}
      colorB={{ start: "#000", end: "#FFF" }}
      colorC={{ start: alpha("#000", 0.3), end: alpha("#888", 0.3) }}
      render={({
        colorA: backgroundColor,
        colorB: color,
        colorC: borderColor,
        number: opacity,
      }) => (
        <MotionCardContent
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(rgb(0, 0, 0, 70%), rgb(0, 0, 0, 20%) 63%, rgb(0, 0, 0, 90%))",
            alignContent: "center",
          }}
          style={{ backgroundColor, color }}
        >
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
              Meet Your Emergent AI Partner
            </Typography>
            <Container maxWidth="sm">
              <Typography variant="body1" sx={{ mt: 1, textAlign: "center" }}>
                Finally, a creative partner who understands you. Your emergent
                AI partner delivers professional mixing and mastering while
                learning your unique sound. Get release-ready tracks that evolve
                with your style, powered by a partner who grows with you.
              </Typography>
            </Container>
            <EarlyAccessButton
              color="primary"
              sx={{ mt: 4 }}
              style={{ opacity }}
            />
          </Container>
          <Container
            maxWidth="lg"
            sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 4 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { lg: "row", md: "row", xs: "column" },
                gap: 2,
              }}
            >
              <MotionCard
                variant="outlined"
                sx={{
                  flex: 1,
                  padding: 2,
                  borderRadius: 8,
                  bgcolor: alpha("#000", 0.2),
                  backdropFilter: "blur(20px)",
                  border: "1px solid",
                }}
                style={{ color, borderColor }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontFamily="var(--font-alkatra)"
                    sx={{ mb: 1 }}
                  >
                    Professional Post-Production
                  </Typography>
                  <Typography variant="body1">
                    Delivers studio-quality mixing and mastering tailored to
                    your sound and genre.
                  </Typography>
                </CardContent>
              </MotionCard>
              <MotionCard
                variant="outlined"
                sx={{
                  flex: 1,
                  padding: 2,
                  borderRadius: 8,
                  bgcolor: alpha("#000", 0.2),
                  backdropFilter: "blur(20px)",
                  border: "1px solid",
                }}
                style={{ color, borderColor }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontFamily="var(--font-alkatra)"
                    sx={{ mb: 1 }}
                  >
                    Evolves With Your Style
                  </Typography>
                  <Typography variant="body1">
                    Learns from your sessions to adapt and grow alongside your
                    unique sound.
                  </Typography>
                </CardContent>
              </MotionCard>
              <MotionCard
                variant="outlined"
                sx={{
                  flex: 1,
                  padding: 2,
                  borderRadius: 8,
                  bgcolor: alpha("#000", 0.2),
                  backdropFilter: "blur(20px)",
                  border: "1px solid",
                }}
                style={{ color, borderColor }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontFamily="var(--font-alkatra)"
                    sx={{ mb: 1 }}
                  >
                    Own 80% of Royalties
                  </Typography>
                  <Typography variant="body1">
                    Keep the majority of your royalties from the music you
                    create.
                  </Typography>
                </CardContent>
              </MotionCard>
            </Box>
          </Container>
        </MotionCardContent>
      )}
    />
  );
};
