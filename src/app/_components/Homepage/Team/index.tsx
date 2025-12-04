import { Box, Card } from "@mui/material";
import { Content } from "./Content";

export const Team = () => (
  <Box
    id="team-section"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: { lg: "800px", md: "800px", sm: "800px", xs: "1200px" },
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
