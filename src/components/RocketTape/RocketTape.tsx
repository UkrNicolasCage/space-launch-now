import { Grid, Skeleton } from "@mui/material";

import RocketInfo from "./RocketInfo";
import { Tape } from "../Layout/Tape";
import { TextBtn } from "../UI/TextBtn";
import { useAppSelector } from "../../store";
import { memo } from "react";

interface Props {
  bodyData: {
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
  btnData: { family: string; type: string };
}

const RocketTape = (props: Props) => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

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
          {isLoading ? (
            <Skeleton variant="rounded" width="40rem" height="3rem" />
          ) : (
            <>
              <TextBtn>Active</TextBtn>
              <TextBtn>{props.btnData.type}</TextBtn>
              <TextBtn>{props.btnData.family}</TextBtn>
            </>
          )}
        </Grid>
        <RocketInfo data={props.bodyData} />
      </Grid>
    </Tape>
  );
};

export default memo(RocketTape);
