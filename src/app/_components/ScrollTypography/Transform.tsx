import React from "react";
import { useTransform, MotionValue } from "framer-motion";

export type TransformProps = {
  start: number;
  end: number;
  scrollYProgress: MotionValue<number>;
  colors: string[];
  render: (props: { color: MotionValue<string> }) => React.ReactElement;
};

export const Transform = ({
  start,
  end,
  scrollYProgress,
  colors,
  render,
}: TransformProps) => {
  const wordProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const color = useTransform(wordProgress, [0, 0.25, 0.5, 0.75, 1], colors);

  return render({ color });
};
