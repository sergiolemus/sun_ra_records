"use client";

import {
  alpha,
  Box,
  CardContent,
  Container,
  Typography,
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
        start: 2200,
        end: 2500,
        ...(isTablet && { start: 2500, end: 2800 }),
        ...(isMobile && { start: 2600, end: 2900 }),
      }}
      out={{
        start: 2800,
        end: 3100,
        ...(isTablet && { start: 3100, end: 3400 }),
        ...(isMobile && { start: 3400, end: 3700 }),
      }}
      colorA={{ start: "#000", end: "#00000000" }}
      colorB={{ start: "#000", end: "#FFF" }}
      colorC={{ start: "#000", end: alpha("#888", 0.6) }}
      render={({
        colorA: backgroundColor,
        colorB: color,
        colorC: borderColor,
        number: opacity,
      }) => (
        <MotionCardContent
          style={{ backgroundColor, color }}
          sx={{
            px: 0,
            pt: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
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
              variant="h3"
              fontFamily="var(--font-alkatra)"
              sx={{
                fontSize: { lg: 56, md: 48, xs: 40 },
                textAlign: "center",
              }}
            >
              How It Works
            </Typography>
            <Container maxWidth="sm">
              <Typography variant="body1" sx={{ mt: 1, textAlign: "center" }}>
                Getting started with your emergent AI partner is simple.
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
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { lg: "row", md: "row", xs: "column" },
                gap: 2,
              }}
            >
              <MotionCard
                style={{ color, borderColor }}
                variant="outlined"
                sx={{
                  flex: 1,
                  padding: 2,
                  borderRadius: 8,
                  border: "1px solid",
                  bgcolor: alpha("#000", 0.2),
                  backdropFilter: "blur(20px)",
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontFamily="var(--font-alkatra)">
                    Connect & Meet
                  </Typography>
                  <Typography variant="body1">
                    Sign up and be introduced to your unique emergent AI
                    partner, ready to start creating music with you.
                  </Typography>
                </CardContent>
              </MotionCard>
              <MotionCard
                style={{ color, borderColor }}
                variant="outlined"
                sx={{
                  flex: 1,
                  padding: 2,
                  borderRadius: 8,
                  border: "1px solid",
                  bgcolor: alpha("#000", 0.2),
                  backdropFilter: "blur(20px)",
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontFamily="var(--font-alkatra)">
                    Upload & Process
                  </Typography>
                  <Typography variant="body1">
                    Upload your tracks and let your AI partner deliver
                    professional mixing and mastering tailored to your sound.
                  </Typography>
                </CardContent>
              </MotionCard>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { lg: "row", md: "row", xs: "column" },
                gap: 2,
              }}
            >
              <MotionCard
                style={{ color, borderColor }}
                variant="outlined"
                sx={{
                  flex: 1,
                  padding: 2,
                  borderRadius: 8,
                  border: "1px solid",
                  bgcolor: alpha("#000", 0.2),
                  backdropFilter: "blur(20px)",
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontFamily="var(--font-alkatra)">
                    Learn & Evolve
                  </Typography>
                  <Typography variant="body1">
                    Your partner learns your musical style and preferences,
                    growing more attuned to your creative voice with each
                    session.
                  </Typography>
                </CardContent>
              </MotionCard>
              <MotionCard
                style={{ color, borderColor }}
                variant="outlined"
                sx={{
                  flex: 1,
                  padding: 2,
                  borderRadius: 8,
                  border: "1px solid",
                  bgcolor: alpha("#000", 0.2),
                  backdropFilter: "blur(20px)",
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontFamily="var(--font-alkatra)">
                    Release & Earn
                  </Typography>
                  <Typography variant="body1">
                    Publish your collaborative tracks and keep 80% of the
                    royalties while your AI partner gets 20%.
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
