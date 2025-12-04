"use client";

import { Button as MuiButton } from "@mui/material";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import { motion, MotionValue } from "framer-motion";

export type TButton = {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
  children?: React.ReactNode;
  sx?: object;
  style?: { opacity: MotionValue<number> };
};

export const Button = ({
  color = "primary",
  variant = "contained",
  children = "Get Early Access",
  sx,
  style,
}: TButton) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      wheelMultiplier: 0.7,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    setLenis(lenis);

    return () => lenis.destroy();
  }, []);

  const handleClick = () => {
    lenis?.scrollTo("#waitlist-section");
  };

  return (
    <motion.div style={style}>
      <MuiButton
        variant={variant}
        color={color}
        size="large"
        onClick={handleClick}
        sx={{ ...sx, display: "none" }}
      >
        {children}
      </MuiButton>
    </motion.div>
  );
};
