import { Box, Card } from "@mui/material";
import { Content } from "./Content";

export const HowItWorks = () => (
  <Box
    id="approach-section"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      pt: 6,
      pb: 32,
    }}
  >
    <Card
      elevation={0}
      sx={{
        width: "100%",
        backgroundColor: "inherit",
      }}
    >
      <Content />
    </Card>
  </Box>
);
