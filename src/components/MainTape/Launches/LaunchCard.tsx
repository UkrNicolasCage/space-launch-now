import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";

import styles from "./Launches.module.css";
import noImage from "../../../assets/no-img.png"

type Props = {
  id: string;
  logo: string;
  children?: JSX.Element;
  launchName: string;
  date: string;
};

export const LaunchCard = (props: Props) => {
  return (
    <Grid item key={props.id} className={styles["card-container"]}>
      <Card className={styles.card} key={props.id}>
        <Box className={styles["image-container"]}>
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

        <Typography variant="h3" textAlign="center">{props.launchName}</Typography>
      </Card>
    </Grid>
  );
};
