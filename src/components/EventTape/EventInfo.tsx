import { Box, Button, Grid, Skeleton, Typography } from "@mui/material";

export const EventInfo = () => {
  return (
    <>
      <Box margin="0rem 0rem 6rem">
        <Skeleton height="35rem" variant="rectangular"></Skeleton>
      </Box>
      <Box textAlign="center">
        <Typography variant="h2" marginBottom="2rem">
          Related Information
        </Typography>
        <Grid
          container
          direction={{ xs: "column", lg: "row" }}
          spacing={3}
          marginBottom="2rem"
        >
          <Grid item xs={12} lg={6}>
            <Skeleton
              variant="rectangular"
              width="580px"
              height="100%"
            ></Skeleton>
          </Grid>
          <Grid item textAlign="left" xs={12} lg={6}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="h3">
                  Long March 3B/E | Gaofen 14
                </Typography>
              </Grid>
              <Grid item marginBottom="1rem">
                <Button variant="contained" size="small">
                  Dec. 6, 2020, 6:17 p.m.
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="body1" fontWeight={700}>
                  Destination:
                </Typography>
                <Typography variant="body1">Low Earth Orbit</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" fontWeight={700}>
                  Mission:
                </Typography>
                <Typography variant="body1">Resupply</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  SpaceX will launch the first cargo variant of its Dragon 2
                  spacecraft on their 21st commercial resupply services mission
                  to the International Space Station. The flight will be
                  conducted under the second Commercial Resupply Services
                  contract with NASA. Dragon will be filled with supplies
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
