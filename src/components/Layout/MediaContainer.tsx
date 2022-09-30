import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const MediaContainerTop = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    margin: "2rem 0 3rem",
    height: "15rem",
  },

  [theme.breakpoints.up("sm")]: {
    margin: "3rem 0 5rem",
    height: "20rem",
  },

  [theme.breakpoints.up("sm")]: {
    margin: "0 0 5rem",
    height: "20",
  },

  [theme.breakpoints.up("lg")]: {
    margin: "0 0 8rem",
    height: "35rem",
  },
}));

const MediaContainerBottom = styled(MediaContainerTop)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    margin: "2rem 0 3rem",
  },

  [theme.breakpoints.up("sm")]: {
    margin: "3rem 0 5rem",
  },

  [theme.breakpoints.up("sm")]: {
    margin: "4rem 0 0",
  },

  [theme.breakpoints.up("lg")]: {
    margin: "6rem 0 0",
  },
}));

export { MediaContainerTop, MediaContainerBottom };
