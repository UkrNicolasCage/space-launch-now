import {
  AppBar,
  Grid,
  IconButton,
  styled,
  StyledEngineProvider,
  Toolbar,
} from "@mui/material";

import backArrowIcon from "../../assets/arrow-previous.svg";
import nextArrowIcon from "../../assets/arrow-next.svg";
import { useAppDispatch, useAppSelector } from "../../store";
import { getEventCardsData } from "../../store/event-slice";
import { HeaderText } from "../UI/TopicHeader";
import { memo } from "react";

const Header = styled(AppBar)(({ theme }) => ({
  height: "auto",
  background: "transparent",
  boxShadow: "none",

  [theme.breakpoints.down("sm")]: {
    "& div div": {
      justifyContent: "center",
    },
    "& div div div h2": {
      display: "none",
    },
  },
}));

const REHeader = () => {
  const dispatch = useAppDispatch();
  const lastIndex = useAppSelector((state) => state.event.lastIndex);

  const nextBtnHandler = () => {
    dispatch(getEventCardsData(lastIndex, "next", 3));
  };
  const backBtnHandler = () => {
    dispatch(getEventCardsData(lastIndex, "back", -3));
  };

  return (
    <StyledEngineProvider injectFirst>
      <Header position="static">
        <Toolbar disableGutters>
          <Grid container justifyContent="space-between" padding="2rem 0">
            <Grid item>
              <HeaderText variant="h2">Recent Events</HeaderText>
            </Grid>
            <Grid item>
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
      </Header>
    </StyledEngineProvider>
  );
};

export default memo(REHeader);