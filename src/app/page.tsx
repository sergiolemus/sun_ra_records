import React from "react";
import { Metadata } from "next";
import Box from "@mui/material/Box";
import { HeroBanner } from "./_components/Homepage/HeroBanner";

export const metadata: Metadata = {
  title:
    "Sun Ra Records | Artist Accelerator - Own Your Masters. Build Your Empire.",
};

type THome = () => React.JSX.Element;

const Home: THome = () => {
  return (
    <Box>
      <HeroBanner />
    </Box>
  );
};

export default Home;
