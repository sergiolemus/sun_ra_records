import { Box, Card } from "@mui/material";
import { Content } from "./Content";

export const Waitlist = () => (
  <Box
    id="waitlist-section"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      height: { lg: "900px", md: "900px", sm: "900px", xs: "900px" },
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
