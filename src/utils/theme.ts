"use client";
// When using TypeScript 4.x and above
import type {} from "@mui/lab/themeAugmentation";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTimeline: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});
export default theme;
