import { Paper } from "@mui/material";

import { theme } from "../../theme";
import styles from "./MainTape.module.css";
import { RecentEvents } from "../RecentEvents/RecentEvents";
import { Launches } from "./Launches/Launches";

export const MainTape = () => {
  return (
    <Paper
      className={styles["main-tape"]}
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <RecentEvents />
      <Launches/>
    </Paper>
  );
};
