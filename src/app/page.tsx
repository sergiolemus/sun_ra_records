import React from "react";
import { Metadata } from "next";
import Box from "@mui/material/Box";
import { HeroBanner } from "./_components/Homepage/HeroBanner";
import { Waitlist } from "./_components/Homepage/Waitlist";
import { Previews } from "./_components/Homepage/Previews";

export const metadata: Metadata = {
  title:
    "Sun Ra Records | Artist Accelerator - Own Your Masters. Build Your Empire.",
};

type HomeProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Home = async ({ searchParams }: HomeProps) => {
  const params = await searchParams;
  const showPreviews = params.previews === process.env.PREVIEWS_KEY;

  return (
    <Box>
      <HeroBanner />
      {showPreviews && <Previews />}
      <Waitlist />
    </Box>
  );
};

export default Home;
