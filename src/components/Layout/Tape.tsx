import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Tape = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    padding: "0 0.5rem",
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: "6rem 4.5rem",
  },
  [theme.breakpoints.up("lg")]: {
  },
}));
