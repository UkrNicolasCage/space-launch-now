import { AppBar, Box, StyledEngineProvider, Typography } from "@mui/material";
import { LaunchesCards } from "./LaunchesCards";

import styles from "./Launches.module.css";

export const Launches = () => {
  return (
    <Box className={styles.launches}>
      <StyledEngineProvider injectFirst>
        <AppBar position="static" className={styles.header}>
          <Typography variant="h2" component="span">
            Spaceflight Launches
          </Typography>
        </AppBar>
      </StyledEngineProvider>
      <LaunchesCards />
    </Box>
  );
};
