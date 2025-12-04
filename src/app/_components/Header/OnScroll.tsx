"use client";

import React from "react";
import { Slide, useScrollTrigger } from "@mui/material";

export type TOnScoll = (
  props: Readonly<{
    render: (props: {
      showHideTrigger: boolean;
      showTrigger: boolean;
    }) => React.ReactElement;
  }>
) => React.JSX.Element;

export const OnScroll: TOnScoll = ({ render }) => {
  const showHideTrigger = useScrollTrigger({
    threshold: 16,
  });

  const showTrigger = useScrollTrigger({
    threshold: 16,
    disableHysteresis: true,
  });

  return (
    <Slide appear={false} direction="down" in={!showHideTrigger}>
      {render({ showHideTrigger, showTrigger })}
    </Slide>
  );
};
