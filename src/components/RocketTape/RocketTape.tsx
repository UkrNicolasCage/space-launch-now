import { Button, Grid } from "@mui/material";

import { RocketInfo } from "./RocketInfo";
import { Tape } from "../Layout/Tape";

interface Props {
  bodyData: {
    name: string;
    variant: string;
    fullName: string;
    allias: string;
    minStage: number;
    maxStage: number;
    length: number;
    diametr: number;
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

  btnData: { family: string; type: string };
}

export const RocketTape = (props: Props) => {
  return (
    <Tape>
      <Grid
        container
        direction="column"
        rowGap={5}
        width="80%"
        margin=" 0 auto"
        marginBottom="3rem"
      >
        <Grid item alignSelf="center" marginTop="2rem" textAlign="center">
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
              margin: "1rem  0.7rem",
              background:
                "linear-gradient(93.72deg, rgb(142, 45, 226) 9.41%, rgb(74, 0, 224) 86.1%)",
            }}
          >
            {props.btnData.type}
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
            {props.btnData.family}
          </Button>
        </Grid>
        <RocketInfo data={props.bodyData} />
      </Grid>
    </Tape>
  );
};
