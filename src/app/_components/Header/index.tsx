import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as MUILink, Card, CardMedia } from "@mui/material";
import { NavBar } from "./NavBar";
import Link from "next/link";
import { Button as SignInButton } from "../SignIn";
import { Button as ApplyButton } from "../Subscriptions/Button";

export const Header = () => {
  return (
    <Box sx={{ bgcolor: "transparent", position: "relative" }}>
      <NavBar>
        <Toolbar
          disableGutters
          sx={{
            height: 72,
            mx: { lg: 4 },
            px: 4,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <MUILink component={Link} href="/" underline="none">
            <Card
              elevation={0}
              sx={{
                display: "flex",
                bgcolor: "transparent",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                src="/logo.png"
                alt="Sun Ra Records logo"
                sx={{ height: 48, width: 48, mr: 1 }}
              />
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  fontSize={24}
                  fontFamily="var(--font-bebas-neue)"
                  letterSpacing={0.6}
                  sx={{
                    color: "primary.main",
                    lineHeight: 1,
                  }}
                >
                  Sun Ra
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  fontSize={24}
                  fontFamily="var(--font-bebas-neue)"
                  letterSpacing={0.6}
                  sx={{
                    color: "yellow.main",
                    lineHeight: 1,
                  }}
                >
                  Records
                </Typography>
              </Box>
            </Card>
          </MUILink>
          <Box sx={{ gap: 1, display: "flex", flexDirection: "row" }}>
            <ApplyButton />
            <SignInButton />
          </Box>
        </Toolbar>
      </NavBar>
    </Box>
  );
};
