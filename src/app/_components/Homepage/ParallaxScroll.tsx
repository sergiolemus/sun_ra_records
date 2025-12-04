"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export type TParallaxScroll = (
  props: Readonly<{
    start?: number;
    end: number;
    children: React.ReactElement;
  }>
) => React.JSX.Element;

export const ParallaxScroll: TParallaxScroll = ({
  children,
  end,
  start = 0,
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  return <motion.div style={{ y }}>{children}</motion.div>;
};
