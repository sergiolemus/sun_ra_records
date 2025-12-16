import {
  Box,
  Container,
  Typography,
  CardContent,
  IconButton,
} from "@mui/material";
import { Carousel } from "./Carousel";
import {
  AppleMusicIcon,
  InstagramIcon,
  SpotifyIcon,
  YouTubeIcon,
} from "../../Icons";
import App from "next/app";

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
      song: "/preview_1.mp3",
    },
    {
      title: "absolute",
      artist: "R99tz",
      src: "/preview_2.png",
      song: "/preview_2.mp3",
    },
    {
      title: "Jump the Void",
      artist: "R99tz",
      src: "/preview_3.png",
      song: "/preview_3.mp3",
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
              mb: 4,
            }}
          >
            Previews
          </Typography>
          <Typography variant="body1" fontSize={36} sx={{ mb: 2 }}>
            R99tz
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mb: 2 }}>
            <InstagramIcon href="https://www.instagram.com/r99tztrismegistus?igsh=MTg1bDN6MG9jd255cw==" />
            <SpotifyIcon href="https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm?si=fhMH46CCTmues7jgrQnxKQ" />
            <AppleMusicIcon href="https://music.apple.com/us/artist/michael-jackson/32940" />
            <YouTubeIcon href="https://www.youtube.com/channel/UC5OrDvL9DscpcAstz7JnQGA" />
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
            augue vitae magna rhoncus tempus. Sed euismod turpis in eros
            venenatis, nec facilisis nunc sollicitudin. Praesent molestie sapien
            vel diam ullamcorper, id hendrerit ligula consectetur.
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
