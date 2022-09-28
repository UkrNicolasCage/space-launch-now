import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import styles from "./RocketTape.module.css";

interface Props {
  data:{
    name: string;
    description: string;
    date: string;
    providerName: string;
    provederAbbrev: string;
  }
}

export const RocketHero = (props: Props) => {
  return (
    <Box className={styles.center}>
      <Grid
        container
        className={styles.hero}
        rowSpacing={3}
        direction="column"
        alignContent="center"
      >
        <Grid item>
          <Typography variant="h1">{props.data.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" fontWeight="400">
            {props.data.providerName} ({props.data.provederAbbrev})
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">{props.data.date}</Typography>
        </Grid>
        <Grid item marginTop="2rem" className={styles.description}>
          <Typography variant="body1" textAlign="center">
          {props.data.description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
