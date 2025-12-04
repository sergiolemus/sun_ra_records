import { Box, CardContent } from "@mui/material";
import { ParallaxScroll } from "../ParallaxScroll";

export const Background = () => (
  <CardContent
    sx={{
      position: "absolute",
      width: "100%",
      height: "100%",
      alignContent: "start",
      background: "black",
      p: 0,
    }}
  >
    <ParallaxScroll end={-1000}>
      <Box
        component="video"
        aria-hidden="true"
        loop
        muted
        playsInline
        preload="metadata"
        autoPlay
        poster="https://qqkkast9xvsaxkcy.public.blob.vercel-storage.com/numa_1_poster.webp"
        sx={{
          height: "100vh",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <source
          src="https://qqkkast9xvsaxkcy.public.blob.vercel-storage.com/numa_1.webm"
          type="video/webm"
        />
        <source
          src="https://qqkkast9xvsaxkcy.public.blob.vercel-storage.com/numa_1_fallback.mp4"
          type="video/mp4"
        />
      </Box>
    </ParallaxScroll>
  </CardContent>
);
