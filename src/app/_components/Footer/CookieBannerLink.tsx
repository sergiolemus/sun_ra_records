"use client";

import { Box, Button } from "@mui/material";
import React from "react";

export type TCookieBannerLink = (
  props: Readonly<{
    children: React.ReactElement;
  }>
) => React.JSX.Element;

export const CookieBannerLink: TCookieBannerLink = ({ children }) => {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "left",
      }}
    >
      <Button
        sx={{ p: 0 }}
        {...(isProd && {
          //@ts-expect-error UC_UI is CookieBot
          onClick: () => window.UC_UI.showSecondLayer(),
        })}
      >
        {children}
      </Button>
    </Box>
  );
};
