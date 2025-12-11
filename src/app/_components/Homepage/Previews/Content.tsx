import { Box, Container, Card, Typography, CardContent } from "@mui/material";
import { Carousel } from "../../Carousel";

export const Content = () => {
  return (
    <CardContent
      sx={{
        px: 0,
        pt: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
            Artists
          </Typography>
          <Typography variant="h2">R99tz</Typography>
        </Box>
        <Carousel
          items={[
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                border: "none",
                borderRadius: 8,
                width: "75%",
              }}
            >
              <Box
                component="img"
                src="/preview_1.png"
                alt="R99tz Preview 1"
                sx={{ width: "100%" }}
              />
            </Card>,
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                border: "none",
                borderRadius: 8,
                width: "75%",
              }}
            >
              <Box
                component="img"
                src="/preview_2.png"
                alt="R99tz Preview 2"
                sx={{ width: "100%" }}
              />
            </Card>,
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                border: "none",
                borderRadius: 8,
                width: "75%",
              }}
            >
              <Box
                component="img"
                src="/preview_3.png"
                alt="R99tz Preview 3"
                sx={{ width: "100%" }}
              />
            </Card>,
          ]}
        />
      </Container>
    </CardContent>
  );
};
