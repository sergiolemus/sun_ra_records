"use client";

import React from "react";
import {
  alpha,
  Box,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Button as EarlyAccessButton } from "../../Subscriptions/Button";
import CheckIcon from "@mui/icons-material/Check";
import { OnScroll } from "../OnScroll";
import {
  MotionCard,
  MotionCardContent,
  MotionListItemIcon,
} from "../../Motion";

export const Content = () => {
  const isMobile = useMediaQuery(({ breakpoints: b }) => b.down("sm"));
  const isTablet = useMediaQuery(({ breakpoints: b }) => b.down("lg"));

  return (
    <OnScroll
      in={{
        start: 3000,
        end: 3300,
        ...(isTablet && { start: 3300, end: 3600 }),
        ...(isMobile && { start: 3600, end: 3900 }),
      }}
      out={{
        start: 4000,
        end: 4300,
        ...(isTablet && { start: 4300, end: 4600 }),
        ...(isMobile && { start: 4900, end: 5200 }),
      }}
      colorA={{ start: "#000", end: "#00000000" }}
      colorB={{ start: "#000", end: "#00AF91" }}
      colorC={{ start: "#000", end: "#FFF" }}
      colorD={{ start: alpha("#000", 0.3), end: alpha("#888", 0.3) }}
      render={({
        colorA: backgroundColor,
        colorB,
        colorC: color,
        colorD: borderColor,
        number: opacity,
      }) => (
        <MotionCardContent
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(rgb(0, 0, 0, 90%), rgb(0, 0, 0, 50%), rgb(0, 0, 0, 90%))",
            alignContent: "center",
          }}
          style={{ backgroundColor, color }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Container
              maxWidth="lg"
              sx={{ flexDirection: "column", justifyItems: "center" }}
            >
              <Typography
                variant="h3"
                fontFamily="var(--font-alkatra)"
                sx={{
                  fontSize: { lg: 56, md: 48, xs: 40 },
                  textAlign: "center",
                }}
              >
                Pricing That Puts Artists First
              </Typography>
            </Container>
            <Container maxWidth="sm">
              <Typography variant="body1" sx={{ mt: 1, textAlign: "center" }}>
                Choose the plan that fits your creative journey
              </Typography>
            </Container>
            <Container maxWidth="lg">
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
                    backdropFilter: "blur(20px)",
                  }}
                  style={{ backgroundColor, borderColor, color }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h5" fontFamily="var(--font-alkatra)">
                        Individual
                      </Typography>
                      <Typography variant="body1">
                        The basics for individuals
                      </Typography>
                      <Typography variant="h3" sx={{ mt: 4 }}>
                        $30/mo
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 4, mb: 2 }}>
                      <EarlyAccessButton
                        color="primary"
                        sx={{ width: "100%" }}
                        style={{ opacity }}
                      />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ mt: 2, fontWeight: "bold" }}
                    >
                      Includes:
                    </Typography>
                    <List>
                      <ListItem disablePadding sx={{ gap: 1 }}>
                        <MotionListItemIcon
                          sx={{ minWidth: "fit-content" }}
                          style={{ color: colorB }}
                        >
                          <CheckIcon aria-hidden="true" />
                        </MotionListItemIcon>
                        <ListItemText primary="Mixing & Mastering" />
                      </ListItem>
                      <ListItem disablePadding sx={{ gap: 1 }}>
                        <MotionListItemIcon
                          sx={{ minWidth: "fit-content" }}
                          style={{ color: colorB }}
                        >
                          <CheckIcon aria-hidden="true" />
                        </MotionListItemIcon>
                        <ListItemText primary="Professional collaboration" />
                      </ListItem>
                      <ListItem disablePadding sx={{ gap: 1 }}>
                        <MotionListItemIcon
                          sx={{ minWidth: "fit-content" }}
                          style={{ color: colorB }}
                        >
                          <CheckIcon aria-hidden="true" />
                        </MotionListItemIcon>
                        <ListItemText primary="AI partner adapts to you" />
                      </ListItem>
                      <ListItem disablePadding sx={{ gap: 1 }}>
                        <MotionListItemIcon
                          sx={{ minWidth: "fit-content" }}
                          style={{ color: colorB }}
                        >
                          <CheckIcon aria-hidden="true" />
                        </MotionListItemIcon>
                        <ListItemText primary="80% royalties" />
                      </ListItem>
                      <ListItem disablePadding sx={{ gap: 1 }}>
                        <MotionListItemIcon
                          sx={{ minWidth: "fit-content" }}
                          style={{ color: colorB }}
                        >
                          <CheckIcon aria-hidden="true" />
                        </MotionListItemIcon>
                        <ListItemText primary="24/7 availability" />
                      </ListItem>
                    </List>
                  </CardContent>
                </MotionCard>
                <MotionCard
                  variant="outlined"
                  sx={{
                    flex: 1,
                    padding: 2,
                    borderRadius: 8,
                    border: "1px solid",
                    backdropFilter: "blur(20px)",
                  }}
                  style={{ backgroundColor, borderColor, color }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h5" fontFamily="var(--font-alkatra)">
                        Enterprise
                      </Typography>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Advanced collaboration for individuals and organizations
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{ mt: 4, textAlign: "center" }}
                      >
                        Custom Pricing
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 4, mb: 2 }}>
                      <EarlyAccessButton
                        color="primary"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        style={{ opacity }}
                      >
                        Contact Us
                      </EarlyAccessButton>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ mt: 2, fontWeight: "bold" }}
                    >
                      Everything Included in Individual, plus:
                    </Typography>
                    <List>
                      <ListItem disablePadding sx={{ gap: 1 }}>
                        <MotionListItemIcon
                          sx={{ minWidth: "fit-content" }}
                          style={{ color: colorB }}
                        >
                          <CheckIcon aria-hidden="true" />
                        </MotionListItemIcon>
                        <ListItemText primary="More hours of base usage" />
                      </ListItem>
                      <ListItem disablePadding sx={{ gap: 1 }}>
                        <MotionListItemIcon
                          sx={{ minWidth: "fit-content" }}
                          style={{ color: colorB }}
                        >
                          <CheckIcon aria-hidden="true" />
                        </MotionListItemIcon>
                        <ListItemText primary="Multiple seats" />
                      </ListItem>
                      <ListItem disablePadding sx={{ gap: 1 }}>
                        <MotionListItemIcon
                          sx={{ minWidth: "fit-content" }}
                          style={{ color: colorB }}
                        >
                          <CheckIcon aria-hidden="true" />
                        </MotionListItemIcon>
                        <ListItemText primary="AI partner per seat" />
                      </ListItem>
                    </List>
                  </CardContent>
                </MotionCard>
              </Box>
            </Container>
          </Box>
        </MotionCardContent>
      )}
    />
  );
};
