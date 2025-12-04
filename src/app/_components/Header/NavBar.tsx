"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { OnScroll } from "./OnScroll";
import { alpha } from "@mui/material";

export type TNavBar = (
  props: Readonly<{
    children: React.ReactElement;
  }>
) => React.JSX.Element;

export const NavBar: TNavBar = ({ children }) => {
  return (
    <Box>
      <OnScroll
        render={({ showTrigger }) => (
          <AppBar
            elevation={0}
            sx={{
              bgcolor: alpha("#000", 0.4),
              position: "fixed",
              backdropFilter: "blur(10px)",
              top: 0,
              ...(!showTrigger && {
                pt: 2,
                backgroundColor: "transparent",
                backdropFilter: "blur(0px)",
              }),
            }}
          >
            {children}
          </AppBar>
        )}
      />
    </Box>
  );
};
