import { Box } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RocketHero } from "../components/RocketTape/RocketHero";
import { RocketTape } from "../components/RocketTape/RocketTape";
import { getRocket } from "../lib/api";
import { Rocket } from "../lib/interfaces";
import styles from "./Page.module.css";

export const RocketPg = () => {
  const [rocketData, setRocketData] = useState<Rocket>();
  const { rocketId } = useParams<{ rocketId: string }>();
  useEffect(() => {
    const fetchRocketData = async () => {
      const data = await getRocket(rocketId as string);
      setRocketData(data);
    };
    fetchRocketData();
  }, []);

  const heroDate = new Date(rocketData?.maiden_flight!).toLocaleDateString(
    "en-gb",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
      localeMatcher: "best fit",
      hour12: true,
    }
  );
  console.log(rocketData);
  const heroData = {
    name: rocketData?.full_name!,
    description: rocketData?.description!,
    date: heroDate,
    providerName: rocketData?.launch_service_provider.name!,
    provederAbbrev: rocketData?.launch_service_provider.abbrev!,
  };

  const bodyData = {
    name: rocketData?.full_name!,
    variant: rocketData?.variant!,
    fullName: rocketData?.full_name!,
    allias: rocketData?.alias!,
    minStage: rocketData?.min_stage!,
    maxStage: rocketData?.max_stage!,
    length: rocketData?.length!,
    diametr: rocketData?.diametr!,
    fairlingDiamentr: "-"!,
    family: rocketData?.family!,
    launchMass: rocketData?.launch_mass!,
    thrust: rocketData?.to_thurst!,
    apogee: rocketData?.apogee!,
    launchCost: "-"!,
    leo: rocketData?.leo_capacity!,
    gto: rocketData?.gto_capacity!,
    directGeo: "-"!,
  };
  const bodyBtnData = {
    family: rocketData?.family!,
    type: rocketData?.launch_service_provider.type!,
  };
  return (
    <Fragment>
      <Box className={`${styles["rocket-pg"]} ${styles.page}`}>
        <RocketHero data={heroData} />
      </Box>
      <Box className={styles.center}>
        <RocketTape bodyData={bodyData} btnData={bodyBtnData }/>
      </Box>
    </Fragment>
  );
};
