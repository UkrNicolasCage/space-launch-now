import { Box } from "@mui/material";
// import { LaunchHero } from "../components/LaunchTape/LaunchHero";
import styles from "./Page.module.css";

export const LaunchPg = () => {
  return (
    <>
      <Box className={`${styles["launch-pg"]} ${styles.page}`}>
        {/* <LaunchHero /> */}
      </Box>
      <Box></Box>
    </>
  );
};
