import { Box, Grid } from "@mui/material";
import { memo } from "react";

import logo from "../../assets/logo.svg";

const Bottom = () => {
  return (
    <Box padding="4rem 15% 5rem">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={6}>
          <img src={logo} alt="logo" width="45px" height="53px" />
        </Grid>
        <Grid item xs={6} textAlign="end">
          <Box component="span" color="#C0C0C0">
            &copy; 2022 Copyright 
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default memo(Bottom);