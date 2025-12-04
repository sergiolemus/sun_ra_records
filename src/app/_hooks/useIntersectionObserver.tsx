"use client";

import { useEffect, useRef, useState } from "react";

export type UseIntersectionObserver = () => [
  shouldLoad: boolean,
  videoRef: React.RefObject<HTMLVideoElement | null>
];

export const useIntersectionObserver: UseIntersectionObserver = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" } // Start loading 200px before visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return [shouldLoad, videoRef];
};
