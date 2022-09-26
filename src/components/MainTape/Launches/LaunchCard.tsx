import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";

import styles from "./Launches.module.css";
import noImage from "../../../assets/no-img.png";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";

type Props = {
  id: string;
  logo: string;
  children?: JSX.Element;
  launchName: string;
  date: string;
  rocketId: number;
};

export const LaunchCard = (props: Props) => {
  const navigate = useNavigate();

  const selectLaunchHandler = (event: MouseEvent<HTMLDivElement>) => {
    navigate("/launch/" + props.id);
  };

  const selectRocketHandler = (event: MouseEvent<HTMLDivElement>) => {
    navigate("/rocket/" + props.rocketId);
  };

  const [rocketName, launchName] = props.launchName.split("|");
  return (
    <Grid item key={props.id} className={styles["card-container"]}>
      <Card className={styles.card} key={props.id}>
        <Box
          className={styles["image-container"]}
          onClick={selectLaunchHandler}
        >
          <CardMedia
            component="img"
            sx={{ height: "16.5rem", width: "580px" }}
            image={noImage}
          />
          <Button
            variant="contained"
            size="small"
            disabled
            className={styles.date}
            style={{
              background:
                "linear-gradient(93.72deg, rgb(142, 45, 226) 9.41%, rgb(74, 0, 224) 86.1%)",
            }}
          >
            {props.date}
          </Button>
        </Box>

        <Typography variant="h3" textAlign="center">
          <Box
            component="span"
            onClick={selectRocketHandler}
            className={styles["hover-text"]}
          >
            {rocketName}
          </Box>
          <Box
            component="span"
            onClick={selectLaunchHandler}
            className={styles["hover-text"]}
          >
            |{launchName}
          </Box>
        </Typography>
      </Card>
    </Grid>
  );
};
