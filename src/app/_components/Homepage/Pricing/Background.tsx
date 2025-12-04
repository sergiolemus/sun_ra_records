"use client";

import { Box, CardContent } from "@mui/material";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";

export const Background = () => {
  const [shouldLoad, ref] = useIntersectionObserver();

  return (
    <CardContent
      sx={{
        position: "absolute",
        width: "100%",
        top: 0,
        p: 0,
      }}
    >
      <Box
        ref={ref}
        component="video"
        aria-hidden="true"
        loop
        muted
        playsInline
        preload="none"
        autoPlay={shouldLoad}
        poster="https://qqkkast9xvsaxkcy.public.blob.vercel-storage.com/numa_4_poster.webp"
        sx={{
          height: { lg: "105vh", md: "105vh", sm: "120vh", xs: "140vh" },
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        {shouldLoad && (
          <>
            <source
              src="https://qqkkast9xvsaxkcy.public.blob.vercel-storage.com/numa_4.webm"
              type="video/webm"
            />
            <source
              src="https://qqkkast9xvsaxkcy.public.blob.vercel-storage.com/numa_4_fallback.mp4"
              type="video/mp4"
            />
          </>
        )}
      </Box>
    </CardContent>
  );
};
