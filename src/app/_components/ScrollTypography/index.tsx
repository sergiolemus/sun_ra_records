"use client";

import { motion, useScroll } from "framer-motion";
import { Typography } from "@mui/material";
import { useRef } from "react";
import { Transform } from "./Transform";

export const ScrollTypography = ({
  children,
  sx = {},
  variant = "body1",
  fontFamily,
  colors = ["#333", "#666", "#999", "#CCC", "#FFF"],
  offset = ["start 80%", "end 60%"],
}: {
  children: string;
  sx?: object;
  variant?: "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
  fontFamily?: string;
  colors: string[];
  offset?: (`start ${number}%` | `end ${number}%`)[];
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  return (
    <Typography
      ref={ref}
      variant={variant}
      fontFamily={fontFamily}
      sx={{
        ...sx,
        display: "flex",
        flexWrap: "wrap",
        columnGap: "0.25em",
      }}
    >
      {children.split(" ").map((word, wordIndex, words) => {
        const start = wordIndex / words.length;
        const end = (wordIndex + 1) / words.length;

        return (
          <Transform
            key={wordIndex}
            start={start}
            end={end}
            scrollYProgress={scrollYProgress}
            colors={colors}
            render={({ color }) => (
              <motion.span
                style={{ color }}
                transition={{ delay: wordIndex * 1 }}
              >
                {word}
              </motion.span>
            )}
          />
        );
      })}
    </Typography>
  );
};
