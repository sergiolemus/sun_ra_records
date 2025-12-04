"use client";

import React from "react";
import { MotionValue, useScroll, useTransform } from "framer-motion";

export type OnScrollProps = {
  in: { start: number; end: number };
  out?: { start: number; end: number };
  colorA: { start: string; end: string };
  colorB?: { start: string; end: string };
  colorC?: { start: string; end: string };
  colorD?: { start: string; end: string };
  number?: { start: number; end: number };
  render: (args: {
    colorA: MotionValue<string>;
    colorB: MotionValue<string | undefined>;
    colorC: MotionValue<string | undefined>;
    colorD: MotionValue<string | undefined>;
    number: MotionValue<number>;
  }) => React.JSX.Element;
};

export const OnScroll = ({
  in: inRange,
  out: outRange,
  colorA,
  colorB,
  colorC,
  colorD,
  number = { start: 0, end: 1 },
  render,
}: OnScrollProps) => {
  const { scrollY } = useScroll();

  const inputRange = [inRange.start, inRange.end];
  const rangeColorA = [colorA.start, colorA.end];
  const rangeColorB = [colorB?.start, colorB?.end];
  const rangeColorC = [colorC?.start, colorC?.end];
  const rangeColorD = [colorD?.start, colorD?.end];
  const rangeNumberA = [number.start, number.end];

  if (outRange) {
    inputRange.push(outRange.start, outRange.end);
    rangeColorA.push(colorA.end, colorA.start);
    rangeColorB.push(colorB?.end, colorB?.start);
    rangeColorC.push(colorC?.end, colorC?.start);
    rangeColorD.push(colorD?.end, colorD?.start);
    rangeNumberA.push(number.end, number.start);
  }

  const props = {
    colorA: useTransform(scrollY, inputRange, rangeColorA),
    colorB: useTransform(scrollY, inputRange, rangeColorB),
    colorC: useTransform(scrollY, inputRange, rangeColorC),
    colorD: useTransform(scrollY, inputRange, rangeColorD),
    number: useTransform(scrollY, inputRange, rangeNumberA),
  };

  return render(props);
};
