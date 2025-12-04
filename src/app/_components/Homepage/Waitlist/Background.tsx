import { Box, CardContent } from "@mui/material";

export const Background = () => (
  <CardContent
    sx={{
      position: "absolute",
      width: "100%",
      top: 0,
      p: 0,
    }}
  >
    <Box
      component="video"
      aria-hidden="true"
      loop
      muted
      playsInline
      preload="metadata"
      autoPlay
      poster="https://qqkkast9xvsaxkcy.public.blob.vercel-storage.com/numa_6_poster.webp"
      sx={{
        height: { lg: "105vh", md: "105vh", sm: "120vh", xs: "140vh" },
        width: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}
    >
      <source
        src="https://qqkkast9xvsaxkcy.public.blob.vercel-storage.com/numa_6.webm"
        type="video/webm"
      />
      <source
        src="https://qqkkast9xvsaxkcy.public.blob.vercel-storage.com/numa_6_fallback.mp4"
        type="video/mp4"
      />
    </Box>
  </CardContent>
);
