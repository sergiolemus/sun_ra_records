import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { CookieBannerLink } from "./CookieBannerLink";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box
      sx={{
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        bgcolor: "common.black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          m: 4,
          px: { lg: 4, xs: 0 },
          gap: { sm: 2, xs: 1 },
        }}
      >
        <Typography fontSize={14} color="common.white">
          © 2025 Numa Mundi. All Rights Reserved
        </Typography>
        <Box display="none">
          <Typography fontSize={14} color="common.white">
            Terms of Use
          </Typography>
          <Typography fontSize={14} color="common.white">
            Privacy Policy
          </Typography>
          <CookieBannerLink>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Image
                src="/privacyoptions.svg"
                alt="California Consumer Privacy Act (CCPA) Opt-Out Icon"
                width={29}
                height={14}
              />
              <Typography fontSize={14} color="common.white">
                Your Privacy Choices
              </Typography>
            </Box>
          </CookieBannerLink>
        </Box>
      </Box>
    </Box>
  );
};
