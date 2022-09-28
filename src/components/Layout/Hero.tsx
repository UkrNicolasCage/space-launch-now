import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const Hero = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    padding: "10rem 0 0 0",
    textAlign: "center",
    "& h1": {
      fontSize: "3.5rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },

  [theme.breakpoints.up("md")]: {
    padding: "0rem 5% 0 10%",
    "& h1": {
      fontSize: "4.5rem",
    },
  },

  [theme.breakpoints.up("lg")]: {
    padding: "1rem 27% 0 10%",
    "& h1": {
      fontSize: "76px",
    },
  },
}));

const ALHero = styled(Hero)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    padding: "8rem 0 0 0",
    textAlign: "center",
    "& h1": {
      fontSize: "3rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
    fontSize: "3.5rem",
  },

  [theme.breakpoints.up("md")]: {
    padding: "0rem 5% 0 10%",
    "& h1": {
      fontSize: "4.5rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    padding: "1rem 27% 0 10%",
    "& h1": {
      fontSize: "76px",
    },
  },
}));

export {Hero, ALHero}