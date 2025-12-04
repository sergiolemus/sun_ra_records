import { Box, Card } from "@mui/material";
import { Content } from "./Content";
import { Background } from "./Background";

export const Pricing = () => (
  <Box
    id="pricing-section"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: { lg: "1000px", md: "1000px", sm: "1000px", xs: "1200px" },
      backgroundColor: "transparent",
    }}
  >
    <Card
      square
      elevation={0}
      sx={{
        flexGrow: 1,
        position: "relative",
        width: "100%",
        backgroundColor: "inherit",
      }}
    >
      <Background />
      <Content />
    </Card>
  </Box>
);
