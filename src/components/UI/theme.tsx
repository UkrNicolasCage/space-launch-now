import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    gradient: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    gradient?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(28, 32, 86, 1)",
    },
    secondary: {
      main: "rgba(74, 0, 224, 1)",
    },
    gradient: {
      main: "linear-gradient(93.72deg, rgb(142, 45, 226) 9.41%, rgb(74, 0, 224) 86.1%)",
    },
  },
  typography: {
    fontFamily: '"Roboto"',
    h1: {
      fontFamily: "Montserrat",
      fontWeight: 800,
      fontSize: "4.5rem",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          height: "6rem",
          overflow: "visible",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          overflow: "hidden",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          fontSize: "1.25rem",
          padding: "1rem 2.5rem",
          fontFamily: "Montserrat",
          borderRadius: "50px",
          fontWeight: 700,
          textTransform: "capitalize",
          background:
            "linear-gradient(93.72deg, rgb(142, 45, 226), rgb(74, 0, 224))",
        },
        root: {},
      },
    },
  },
});
