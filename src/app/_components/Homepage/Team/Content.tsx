"use client";

import React from "react";
import {
  Box,
  CardContent,
  Container,
  IconButton,
  Typography,
  alpha,
  useMediaQuery,
} from "@mui/material";
import { OnScroll } from "../OnScroll";
import { MotionAvatar, MotionCard, MotionCardContent } from "../../Motion";

export const Content = () => {
  const isMobile = useMediaQuery(({ breakpoints: b }) => b.down("sm"));
  const isTablet = useMediaQuery(({ breakpoints: b }) => b.down("lg"));

  return (
    <OnScroll
      in={{
        start: 4200,
        end: 4500,
        ...(isTablet && { start: 4300, end: 4600 }),
        ...(isMobile && { start: 5000, end: 5300 }),
      }}
      out={{
        start: 4700,
        end: 5000,
        ...(isTablet && { start: 5000, end: 5300 }),
        ...(isMobile && { start: 6100, end: 6400 }),
      }}
      colorA={{ start: "#000", end: "#00000000" }}
      colorB={{ start: "#000", end: "#FFF" }}
      colorC={{ start: "#000", end: alpha("#888", 0.6) }}
      render={({
        colorA: backgroundColor,
        colorB: color,
        colorC: borderColor,
      }) => (
        <MotionCardContent
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(rgb(0, 0, 0, 70%), rgb(0, 0, 0, 20%) 63%, rgb(0, 0, 0, 90%))",
            alignContent: "start",
            pt: 24,
          }}
          style={{ backgroundColor, color, fill: color }}
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
              Meet The Team
            </Typography>
            <Container maxWidth="sm">
              <Typography variant="body1" sx={{ mt: 1, textAlign: "center" }}>
                Where engineering excellence meets musical artistry.
              </Typography>
            </Container>
          </Container>
          <Container
            maxWidth="lg"
            sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { lg: "row", md: "row", xs: "column" },
                gap: 2,
                mt: 4,
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { lg: "row", sm: "row", xs: "column" },
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                      }}
                    >
                      <MotionAvatar
                        sx={{
                          width: "120px",
                          height: "120px",
                          fontSize: 36,
                          border: "1px solid",
                          backdropFilter: "blur(20px)",
                        }}
                        style={{ borderColor, color, backgroundColor }}
                      >
                        SL
                      </MotionAvatar>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="h5"
                          fontFamily="var(--font-alkatra)"
                        >
                          Sergio Lemus
                        </Typography>
                        <IconButton
                          component="a"
                          href="https://www.linkedin.com/in/lemus-sergio"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            p: 0,
                            ml: 2,
                            minWidth: "auto",
                          }}
                        >
                          <Box
                            component="svg"
                            viewBox="0 0 24 24"
                            sx={{ width: 20, height: 20 }}
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </Box>
                        </IconButton>
                      </Box>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        Co-Founder & Chief Architect
                      </Typography>
                      <Typography variant="body1">
                        Enterprise Solutions Architect | Self-funded algorithmic
                        trader | Drummer now building for musicians
                      </Typography>
                    </Box>
                  </Box>
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { lg: "row", sm: "row", xs: "column" },
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <MotionAvatar
                      sx={{
                        width: "120px",
                        height: "120px",
                        fontSize: 36,
                        border: "1px solid",
                        backdropFilter: "blur(20px)",
                      }}
                      style={{ borderColor, color, backgroundColor }}
                    >
                      R
                    </MotionAvatar>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="h5"
                          fontFamily="var(--font-alkatra)"
                        >
                          R99tz
                        </Typography>
                        <IconButton
                          component="a"
                          href="https://www.instagram.com/r99tztrismegistus?igsh=MTg1bDN6MG9jd255cw=="
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            p: 0,
                            ml: 2,
                            minWidth: "auto",
                          }}
                        >
                          <Box
                            component="svg"
                            viewBox="0 0 24 24"
                            sx={{ width: 20, height: 20 }}
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </Box>
                        </IconButton>
                      </Box>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        Co-Founder & Creative Director
                      </Typography>
                      <Typography variant="body1">
                        Producer & Composer | Courted by Sony and Epic Records |
                        Specializing in transformative sound design
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </MotionCard>
            </Box>
          </Container>
        </MotionCardContent>
      )}
    />
  );
};
