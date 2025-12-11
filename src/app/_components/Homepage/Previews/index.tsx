import { Box, Card } from "@mui/material";
import { Content } from "./Content";

export const Previews = () => (
  <Box
    id="approach-section"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      height: { lg: "100vh", md: "1000px", sm: "1000px", xs: "1000px" },
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
