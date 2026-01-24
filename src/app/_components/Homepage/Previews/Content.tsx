import { Box, Container, Typography, CardContent } from "@mui/material";
import { Carousel } from "./Carousel";
import {
  AppleMusicIcon,
  InstagramIcon,
  SpotifyIcon,
  YouTubeIcon,
} from "../../Icons";

export type ContentProps = {
  items: {
    title: string;
    artist: string;
    src: string;
    song: string;
  }[];
  setActiveIndex?: (index: number) => void;
  activeIndex?: number;
};

export const Content = ({
  items,
  activeIndex,
  setActiveIndex,
}: ContentProps) => {
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
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "column", xs: "column" },
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            mx: { lg: 18, md: 8, xs: 4 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 2,
              flexDirection: "column",
              justifyContent: "flex-start",
              height: "100%",
              color: "white",
              mr: 2,
              my: 8,
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
              R99tz Trismegistus
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mb: 2 }}>
              <InstagramIcon href="https://www.instagram.com/r99tztrismegistus?igsh=MTg1bDN6MG9jd255cw==" />
              <SpotifyIcon href="https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm?si=fhMH46CCTmues7jgrQnxKQ" />
              <AppleMusicIcon href="https://music.apple.com/us/artist/michael-jackson/32940" />
              <YouTubeIcon href="https://www.youtube.com/channel/UC5OrDvL9DscpcAstz7JnQGA" />
            </Box>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Rootz Trismegistus is the greatest living creator of our time,
              acting not just as a musician but as the architect of a new sonic
              reality.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Carousel
              items={items}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </Box>
        </Box>
      </Container>
    </CardContent>
  );
};
