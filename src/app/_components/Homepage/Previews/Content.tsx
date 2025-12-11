import { Box, Container, Card, Typography, CardContent } from "@mui/material";
import { Carousel } from "./Carousel";

export type ContentProps = {
  setActiveIndex?: (index: number) => void;
  activeIndex?: number;
};

export const Content = ({ activeIndex, setActiveIndex }: ContentProps) => {
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backdropFilter: "blur(40px)",
        background:
          "radial-gradient(circle, rgb(0, 0, 0, 20%) 0%, rgb(0, 0, 0, 80%) 60%, rgb(0, 0, 0, 100%) 100%)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            color: "white",
          }}
        >
          <Typography
            variant="h3"
            fontFamily="var(--font-bebas-neue)"
            sx={{
              fontSize: { lg: 56, md: 48, xs: 40 },
            }}
          >
            Previews
          </Typography>
          <Typography variant="body1" fontSize={36}>
            R99tz
          </Typography>
        </Box>
        <Carousel
          items={items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </Container>
    </CardContent>
  );
};
