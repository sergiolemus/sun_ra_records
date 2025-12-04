import React from "react";
import { Metadata } from "next";
import Box from "@mui/material/Box";
import { HeroBanner } from "./_components/Homepage/HeroBanner";
import { Problem } from "./_components/Homepage/Problem";
import { Solution } from "./_components/Homepage/Solution";
import { HowItWorks } from "./_components/Homepage/HowItWorks";
import { Pricing } from "./_components/Homepage/Pricing";
import { Team } from "./_components/Homepage/Team";
import { Waitlist } from "./_components/Homepage/Waitlist";

export const metadata: Metadata = {
  title: "Numa Mundi | Best AI Partner for Music Production",
};

type THome = () => React.JSX.Element;

const Home: THome = () => {
  return (
    <Box>
      <HeroBanner />
      <Problem />
      <Solution />
      <HowItWorks />
      <Pricing />
      <Team />
      <Waitlist />
    </Box>
  );
};

export default Home;
