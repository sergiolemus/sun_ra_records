import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as MUILink, Card, CardMedia } from "@mui/material";
import { NavBar } from "./NavBar";
import Link from "next/link";
import { Button as EarlyAccessButton } from "../Subscriptions/Button";
import { Button as SignInButton } from "../SignIn";

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
                alt="Numa Mundi logo"
                sx={{ height: 40, width: 40, mr: 1 }}
              />
              <Typography
                variant="h6"
                component="div"
                fontSize={24}
                fontFamily="var(--font-alkatra)"
                sx={{
                  color: "primary.main",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Numa Mundi
              </Typography>
            </Card>
          </MUILink>
          <Box sx={{ gap: 1, display: "flex", flexDirection: "row" }}>
            <EarlyAccessButton />
            <SignInButton />
          </Box>
        </Toolbar>
      </NavBar>
    </Box>
  );
};
