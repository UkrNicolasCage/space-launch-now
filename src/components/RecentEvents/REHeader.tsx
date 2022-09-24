import {
  AppBar,
  Grid,
  IconButton,
  StyledEngineProvider,
  Toolbar,
  Typography,
} from "@mui/material";

import backArrowIcon from "../../assets/arrow-previous.svg";
import nextArrowIcon from "../../assets/arrow-next.svg";
import styles from "./RecentEvents.module.css";

import { useAppDispatch, useAppSelector } from "../../store";
import { getEventCardsData } from "../../store/event-slice";

export const REHeader = () => {
  const dispatch = useAppDispatch();
  const lastIndex = useAppSelector((state) => state.event.lastIndex);

  const nextBtnHandler = () => {
    dispatch(getEventCardsData(lastIndex, "next", 3));
  }
  const backBtnHandler = () => {
     dispatch(getEventCardsData(lastIndex, "back", -3));
  };

  return (
    <StyledEngineProvider injectFirst>
      <AppBar position="static" className={styles.header}>
        <Toolbar disableGutters>
          <Grid container justifyContent="space-between" padding="2rem 0">
            <Grid item>
              <Typography variant="h2" component="span">
                Recent Events
              </Typography>
            </Grid>
            <Grid item className={styles["header-arows"]}>
              <IconButton
                disabled={lastIndex < 3 ? true : false}
                onClick={backBtnHandler}
              >
                <img src={backArrowIcon} alt="back button" />
              </IconButton>
              <IconButton onClick={nextBtnHandler}>
                <img src={nextArrowIcon} alt="next button" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </StyledEngineProvider>
  );
};
