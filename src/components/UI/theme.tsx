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
      main: "#1C2056",
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
      color: "#F1EBFF",
    },
    h2: {
      fontFamily: "Montserrat",
      fontWeight: 800,
      fontSize: "3rem",
      color: "#F1EBFF",
    },
    h3: {
      fontFamily: "Montserrat",
      fontWeight: 700,
      fontSize: "1.5rem",
      color: "#F1EBFF",
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
        containedSizeLarge: {
          fontSize: "1.25rem",
          padding: "1rem 2.5rem",
          fontFamily: "Montserrat",
          borderRadius: "50px",
          fontWeight: 700,
          textTransform: "capitalize",
          background:
            "linear-gradient(93.72deg, rgb(142, 45, 226), rgb(74, 0, 224))",
        },
        containedSizeSmall: {
          padding: "0.25rem 2rem",
          fontWeight: 500,
          fontFamily: "Montserrat",
          fontStyle: "italic",
          fontSize: "1.125rem",
          background: "rgba(74, 0, 224, 1)",
          borderRadius: "50px",
          textTransform: "none",
          color: "#F1EBFF",
          ":disabled": {
            color: "#F1EBFF",
            background: "rgba(74, 0, 224, 1)",
            
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "transparent",
          borderRadius: 0,
          boxShadow: "none",
        },
      },
    },
  },
});
