import { Box, CardContent } from "@mui/material";

export type BackgroundProps = {
  activeIndex: number;
};

export const Background = ({ activeIndex }: BackgroundProps) => {
  const items = [
    {
      title: "The Time is Now",
      artist: "R99tz",
      src: "/preview_1.png",
    },
    {
      title: "absolute",
      artist: "R99tz",
      src: "/preview_2.png",
    },
    {
      title: "Jump the Void",
      artist: "R99tz",
      src: "/preview_3.png",
    },
  ];

  return (
    <CardContent
      sx={{
        position: "absolute",
        width: "100%",
        zIndex: -1,
        top: 0,
        p: 0,
      }}
    >
      <Box
        component="img"
        src={items[activeIndex].src}
        alt={`${items[activeIndex].artist} ${items[activeIndex].title}`}
        sx={{ width: "100%" }}
      />
    </CardContent>
  );
};
