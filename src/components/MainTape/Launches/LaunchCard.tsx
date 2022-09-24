import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import styles from "./Launches.module.css";

export const LaunchCard = () => {
  return (
    <Card className={styles.card}>
      <Box className={styles["image-container"]}>
        <CardMedia
          component="img"
          sx={{ height: "16.5rem", width: "23.75rem" }}
          image="https://source.unsplash.com/random"
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
          Dec. 6, 2020, 6:17 p.m.
        </Button>
      </Box>

      <Typography variant="h3">
        Falcon 9 Block 5 |1
      </Typography>
    </Card>
  );
};
