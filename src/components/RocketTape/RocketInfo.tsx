import { Grid, Typography } from "@mui/material";
import { memo } from "react";

import icon1 from "../../assets/rocket-icon-1.svg";
import icon2 from "../../assets/rocket-icon-2.svg";
import icon3 from "../../assets/rocket-icon-3.svg";
import RocketInfoFiled from "./RocketInfoField";

interface Props {
  data: {
    name: string;
    variant: string;
    fullName: string;
    allias: string;
    minStage: number;
    maxStage: number;
    length: number;
    diameter: number;
    fairlingDiamentr: string;
    family: string;
    launchMass: number;
    thrust: number;
    apogee: number;
    launchCost: string;
    leo: number;
    gto: string;
    directGeo: string;
  };
}

const checkData = (data: string | number) => {
  return data === 0 || data === "" || data === null || data === undefined;
};

const RocketInfo = (props: Props) => {
  const { data } = props;

  const outputData = {
    name: checkData(data.name) ? "-" : data.name,
    variant: checkData(data.variant) ? "-" : data.variant,
    fullName: checkData(data.fullName) ? "-" : data.fullName,
    allias: checkData(data.allias) ? "-" : data.allias,
    minStage: checkData(data.minStage) ? "-" : data.minStage,
    maxStage: checkData(data.maxStage) ? "-" : data.maxStage,
    length: checkData(data.length) ? "-" : data.length + " m",
    diameter: checkData(data.diameter) ? "-" : data.diameter + " m",
    fairlingDiamentr: checkData(data.fairlingDiamentr)
      ? "-"
      : data.fairlingDiamentr,
    family: checkData(data.family) ? "-" : data.family,
    launchMass: checkData(data.launchMass) ? "-" : data.launchMass + " T",
    thrust: checkData(data.thrust) ? "-" : data.thrust + " kN",
    apogee: checkData(data.apogee) ? "-" : data.apogee + " km",
    launchCost: checkData(data.launchCost) ? "-" : data.launchCost,
    leo: checkData(data.leo) ? "-" : data.leo + " kg",
    gto: checkData(data.gto) ? "-" : data.gto + " kg",
    directGeo: checkData(data.directGeo) ? "-" : data.directGeo,
  };

  return (
    <Grid item>
      <Grid
        container
        columnGap={10}
        rowGap={10}
        justifyContent="space-between"
        direction={{ sx: "column", lg: "row" }}
      >
        <Grid item xs={12} md={6} lg={3}>
          <Grid
            container
            direction="column"
            alignItems="center"
            rowGap={1.5}
            textAlign="center"
          >
            <Grid item>
              <img src={icon1} alt="rocket icon" />
              <Typography variant="h3" marginTop="2rem">
                Family
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Name</Typography>
              <RocketInfoFiled>{outputData.name}</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">Variant</Typography>
              <RocketInfoFiled>{outputData.variant}</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">Full Name</Typography>
              <RocketInfoFiled>{outputData.fullName}</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">Alias</Typography>
              <RocketInfoFiled>{outputData.allias}</RocketInfoFiled>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Grid
            container
            direction="column"
            alignItems="center"
            textAlign="center"
            rowGap={1.5}
          >
            <Grid item>
              <img src={icon2} alt="docs icon" />
              <Typography variant="h3" marginTop="2rem">
                Specifications
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">minimum stage</Typography>
              <RocketInfoFiled>{outputData.minStage}</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">max stage</Typography>
              <RocketInfoFiled>{outputData.maxStage}</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">length</Typography>
              <RocketInfoFiled>{outputData.length}</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">diametr</Typography>
              <RocketInfoFiled>{outputData.diameter}</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">fairing diametr</Typography>
              <RocketInfoFiled>{outputData.fairlingDiamentr}</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">launch mass</Typography>
              <RocketInfoFiled>{outputData.launchMass}</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">thrust</Typography>
              <RocketInfoFiled>{outputData.thrust}</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">apogee (sub-Orbiral)</Typography>
              <RocketInfoFiled>{outputData.apogee}</RocketInfoFiled>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Grid
            container
            direction="column"
            alignItems="center"
            textAlign="center"
            rowGap={1.5}
          >
            <Grid item>
              <img src={icon3} alt="launch icon" />
              <Typography variant="h3" marginTop="2rem">
                PayLoad Capacity
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">launch cost</Typography>
              <RocketInfoFiled>-</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">low earth orbit</Typography>
              <RocketInfoFiled>{outputData.leo}</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">Geostationary Transfer Orbit</Typography>
              <RocketInfoFiled>{outputData.gto}</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">Direct Geostationary</Typography>
              <RocketInfoFiled>-</RocketInfoFiled>
            </Grid>
            <Grid item>
              <Typography variant="h5">Sub-Synchronous Capacity</Typography>
              <RocketInfoFiled>-</RocketInfoFiled>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(RocketInfo);
