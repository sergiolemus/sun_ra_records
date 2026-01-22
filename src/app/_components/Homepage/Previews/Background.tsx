import { Box, CardContent } from "@mui/material";

export type BackgroundProps = {
  items: {
    title: string;
    artist: string;
    src: string;
    song: string;
  }[];
  activeIndex: number;
};

export const Background = ({ items, activeIndex }: BackgroundProps) => {
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
