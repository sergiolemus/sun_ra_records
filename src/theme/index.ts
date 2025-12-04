"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    red: Palette["primary"];
    green: Palette["primary"];
    blue: Palette["primary"];
    yellow: Palette["primary"];
  }
  interface PaletteOptions {
    red?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#000",
    },
    yellow: {
      main: "#FF9F00",
    },
    red: {
      main: "#CB0404",
    },
    green: {
      main: "#00AF91",
    },
    blue: {
      main: "#003092",
    },
  },
  typography: {
    fontFamily: ["var(--font-roboto)", "var(--font-bebas-neue)"].join(","),
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: 16,
          borderRadius: 30,
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            color: "white",
            borderRadius: 8,
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.7)",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white",
          },
          "& .MuiFormHelperText-root": {
            color: "rgba(255, 255, 255, 0.5)",
          },
        },
      },
    },
  },
});
