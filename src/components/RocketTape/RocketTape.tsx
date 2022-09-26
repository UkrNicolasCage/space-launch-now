import {
  Button,
  Grid,
  Paper,
  StyledEngineProvider,
  Typography,
} from "@mui/material";

import { theme } from "../UI/theme";
import styles from "./RocketTape.module.css";
import icon1 from "../../assets/rocket-icon-1.svg";
import icon2 from "../../assets/rocket-icon-2.svg";
import icon3 from "../../assets/rocket-icon-3.svg";
import { RocketInfo } from "./RocketInfo";

export const RocketTape = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Paper
        className={styles["main-tape"]}
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <Grid
          container
          direction="column"
          rowGap={5}
          width="80%"
          margin=" 0 auto"
        >
          <Grid item alignSelf="center">
            <Button
              size="small"
              variant="contained"
              disabled
              style={{
                background:
                  "linear-gradient(93.72deg, rgb(142, 45, 226) 9.41%, rgb(74, 0, 224) 86.1%)",
                textTransform: "uppercase",
                margin: "0 0.7rem",
              }}
            >
              Active
            </Button>
            <Button
              size="small"
              variant="contained"
              disabled
              style={{
                textTransform: "uppercase",
                margin: "0 0.7rem",
                background:
                  "linear-gradient(93.72deg, rgb(142, 45, 226) 9.41%, rgb(74, 0, 224) 86.1%)",
              }}
            >
              Re-usable
            </Button>
            <Button
              size="small"
              variant="contained"
              disabled
              style={{
                textTransform: "uppercase",
                margin: "0 0.7rem",
                background:
                  "linear-gradient(93.72deg, rgb(142, 45, 226) 9.41%, rgb(74, 0, 224) 86.1%)",
              }}
            >
              Falcon
            </Button>
          </Grid>
          <RocketInfo/>
        </Grid>
      </Paper>
    </StyledEngineProvider>
  );
};
