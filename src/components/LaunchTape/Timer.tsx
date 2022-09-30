import { Box, styled, Typography } from "@mui/material";

const TimerContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  width: "fit-content",
  marginTop: "1.5rem",
  [theme.breakpoints.up("xs")]: {
    padding: "0.5rem 0.75rem",
    "& h1": {
      fontSize: "2.5rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    padding: "1rem 1.5rem",
    "& h1": {
      fontSize: "2.75rem",
    },
  },
  [theme.breakpoints.up("md")]: {
    padding: "1.5rem 2.25rem",
    "& h1": {
      fontSize: "3.5rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    padding: "2rem 3.5rem",
    "& h1": {
      fontSize: "4.5rem",
    },
  },
}));

export const Timer = () => {
  return (
    <TimerContainer>
      <Typography variant="h1">00 : 00 : 27: 41</Typography>
    </TimerContainer>
  );
};
