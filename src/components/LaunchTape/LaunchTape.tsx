import { Box, Paper, Skeleton } from "@mui/material";
import { theme } from "../../theme";

import styles from "./Launch.module.css";
import { LaunchDetails } from "./LaunchDetails";
import { LaunchOverview } from "./LaunchOverview";

export const LaunchTape = () => {
  return (
    <Paper
      className={styles["main-tape"]}
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <Box margin="0rem 0rem 8rem">
        <Skeleton height="35rem" variant="rectangular"></Skeleton>
      </Box>
      <LaunchOverview />
      <LaunchDetails />
      <Box margin="8rem 0rem 0rem ">
        <Skeleton height="35rem" variant="rectangular"></Skeleton>
      </Box>
    </Paper>
  );
};
