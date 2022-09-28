import { Box } from "@mui/material";
import { EventHero } from "../components/EventTape/EventHero";
import { EventTape } from "../components/EventTape/EventTape";
import styles from "./Page.module.css";

export const EventPg = () => {
  return (
    <>
      <Box className={`${styles["event-pg"]} ${styles.page}`}>
        <EventHero />
      </Box>
      <Box className={styles.center}>
        <EventTape />
      </Box>
    </>
  );
};
