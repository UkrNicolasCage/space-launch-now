import { Box, styled } from "@mui/material";

export const MainMargins = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "90%",
    margin: "-60% auto 0",
  },
  [theme.breakpoints.up("sm")]: {
    width: "83%",
    margin: "-15% auto 0",
  },
  [theme.breakpoints.up("md")]: {
    width: "77%",
    margin: "-13% auto 0",
  },
  [theme.breakpoints.up("lg")]: {
    width: "75%",
    margin: "-10% auto 0",
  },
}));
