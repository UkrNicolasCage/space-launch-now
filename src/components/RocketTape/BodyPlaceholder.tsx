import { Skeleton, styled } from "@mui/material";

export const BodyPlaceholder = styled(Skeleton)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    height: "60rem",
    width: "15rem",
  },
  [theme.breakpoints.up("sm")]: {
    height: "25rem",
    width: "60rem",
  },
  [theme.breakpoints.up("lg")]: {
    height: "25rem",
    width: "60rem",
  },
}));