import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const Hero = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  "& *": {
    marginLeft: "auto",
    marginRight: "auto",
  },
  [theme.breakpoints.up("xs")]: {
    marginBottom: "80vh",
    padding: "6rem 0 0 0",
    "& h1": {
      fontSize: "2.75rem",
    },
    "& div": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  [theme.breakpoints.up("sm")]: {
    marginBottom: "80vh",
  },

  [theme.breakpoints.up("md")]: {
    marginBottom: "47.5vh",
    padding: "0rem 5% 0 10%",
    "& h1": {
      fontSize: "4rem",
    },
  },

  [theme.breakpoints.up("lg")]: {
    width: "100%",
    textlign: "center",
    marginBottom: "51.7vh",

    padding: "0",
    "& h1": {
      fontSize: "76px",
    },
  },
}));

const ALHero = styled(Hero)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    justifyContent: "center",
    padding: "7rem 0 0 0",
    textAlign: "center",
    "& h1": {
      fontSize: "3.25rem",
    },
    "& div": {
      marginLeft: "0",
      marginRight: "0",
    },
    
  },
  [theme.breakpoints.up("sm")]: {
    justifyContent: "start",
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
    padding: "1rem 2% 0 10%",
    "& h1": {
      fontSize: "76px",
    },
  },
}));

export { Hero, ALHero };
