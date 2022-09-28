import { Paper } from "@mui/material";
import { RecentEvents } from "../RecentEvents/RecentEvents";
import { theme } from "../../theme";

import styles from "./Event.module.css";
import { EventInfo } from "./EventInfo";

export const EventTape = () => {
  return <Paper
    className={styles["main-tape"]}
    style={{ backgroundColor: theme.palette.primary.main }}
  >
    <EventInfo/>
    <RecentEvents/>
  </Paper>;
};
