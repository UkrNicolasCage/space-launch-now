import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const BigBtn = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  padding: theme.spacing(1),
  [theme.breakpoints.down("lg")]: {
    padding: "0.75rem 3.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "1.25rem 4.5rem",
  },
  
}));

