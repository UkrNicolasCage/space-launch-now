import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Center = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "95%",
    margin: "5% auto 0",
  },
  [theme.breakpoints.up("sm")]: {
    width: "85%",
    margin: "15% auto 0",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
    margin: "25% auto 0",
  },
  [theme.breakpoints.up("lg")]: {
    width: "75%",
    margin: "15% auto 0",
  },
}));
