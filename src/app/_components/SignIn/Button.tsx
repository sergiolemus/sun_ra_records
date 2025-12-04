import { Box, Button as MuiButton } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export const Button = () => (
  <Box sx={{ display: "none" }}>
    <MuiButton
      variant="contained"
      color="primary"
      sx={{ display: { xs: "none", md: "none", lg: "block" } }}
    >
      Sign In
    </MuiButton>
    <MuiButton
      variant="contained"
      color="primary"
      sx={{ display: { lg: "none" }, p: 0, minWidth: 42, minHeight: 42 }}
    >
      <PersonOutlineIcon aria-hidden="true" />
    </MuiButton>
  </Box>
);
