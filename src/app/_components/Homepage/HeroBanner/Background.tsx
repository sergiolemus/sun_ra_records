import { Box, CardContent } from "@mui/material";

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
    <Box
      component="video"
      aria-hidden="true"
      loop
      muted
      playsInline
      preload="metadata"
      autoPlay
      poster="https://rvkogc2we8rdzja3.public.blob.vercel-storage.com/sun_ra_records_poster.webp"
      sx={{
        height: "100vh",
        width: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}
    >
      <source
        src="https://rvkogc2we8rdzja3.public.blob.vercel-storage.com/sun_ra_records.webm"
        type="video/webm"
      />
      <source
        src="https://rvkogc2we8rdzja3.public.blob.vercel-storage.com/sun_ra_records.mp4"
        type="video/mp4"
      />
    </Box>
  </CardContent>
);
