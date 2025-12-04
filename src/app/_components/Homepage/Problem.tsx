import { Box, Card, CardContent, Container } from "@mui/material";
import { Button as EarlyAccessButton } from "../Subscriptions/Button";
import { ScrollTypography } from "../ScrollTypography";

export const Problem = () => (
  <Box
    id="problem-section"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      backgroundColor: "transparent",
      pt: 24,
    }}
  >
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "start",
        backgroundColor: "inherit",
      }}
    >
      <Card elevation={0} sx={{ backgroundColor: "inherit" }}>
        <CardContent
          sx={{
            pt: 3,
            display: "flex",
            flexDirection: { lg: "row", md: "column", xs: "column" },
            gap: 4,
          }}
        >
          <Box sx={{ flex: 3 }}>
            <ScrollTypography
              variant="h3"
              fontFamily="var(--font-alkatra)"
              sx={{
                fontSize: { lg: 56, md: 48, xs: 40 },
                mt: 1,
              }}
              colors={["#666", "#666", "#999", "#CCC", "#FFF"]}
              offset={["start 90%", "end 80%"]}
            >
              Music creators face an impossible choice
            </ScrollTypography>
            <ScrollTypography
              variant="body1"
              sx={{
                fontSize: { lg: 48, md: 40, xs: 32 },
                mt: 1,
              }}
              colors={["#666", "#666", "#999", "#CCC", "#FF9F00"]}
              offset={["start 70%", "end 60%"]}
            >
              Work in isolation with tools that lack presence, empathy, or
              continuity, or surrender the majority of your royalties to labels
              and AI platforms that offer functionality but not partnership.
              Artists remain underpaid and underpowered while true collaboration
              stays out of reach.
            </ScrollTypography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <EarlyAccessButton sx={{ display: "none" }} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  </Box>
);
