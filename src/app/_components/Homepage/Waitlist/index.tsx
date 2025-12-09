import { Box, Card } from "@mui/material";
import { Content } from "./Content";

export const Waitlist = () => (
  <Box
    id="waitlist-section"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: { lg: "800px", md: "800px", sm: "800px", xs: "1000px" },
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
      <Content />
    </Card>
  </Box>
);
