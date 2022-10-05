import { Box, styled } from "@mui/material";

export const TimerContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  marginTop: "1.5rem",
  "& *": {
    margin: "0 auto"
  },
  [theme.breakpoints.up("xs")]: {
    width: "18.6rem",
    padding: "0.5rem 0.75rem",
    "& h1": {
      fontSize: "2.3rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    width: "26rem",
    padding: "1rem 1.5rem",
    "& h1": {
      fontSize: "2.75rem",
    },
  },
  [theme.breakpoints.up("md")]: {
    width: "34rem",
    padding: "1.5rem 2.25rem",
    "& h1": {
      fontSize: "3.5rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    width: "38rem",
    padding: "3rem 3.5rem",
    "& h1": {
      fontSize: "4.5rem",
    },
  },
}));
