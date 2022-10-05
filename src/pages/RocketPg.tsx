import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainMargins } from "../components/Layout/MainMargins";
import { Page } from "../components/Layout/Page";
import RocketHero from "../components/RocketTape/RocketHero";
import RocketTape from "../components/RocketTape/RocketTape";
import { getRocket } from "../lib/api";
import { Rocket } from "../lib/interfaces";
import { useAppDispatch} from "../store";
import { loadData } from "../store/ui-slice";
import styles from "./Page.module.css";

 const RocketPg = () => {
  const dispatch = useAppDispatch();

  const [rocketData, setRocketData] = useState<Rocket>();
  const { rocketId } = useParams<{ rocketId: string }>();

  useEffect(() => {
    const fetchRocketData = async () => {
      const data = await getRocket(rocketId as string);
      setRocketData(data);
    };
    dispatch(loadData(fetchRocketData));
  }, [dispatch, rocketId]);

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
    diameter: rocketData?.diameter!,
    fairlingDiamentr: "-"!,
    family: rocketData?.family!,
    launchMass: rocketData?.launch_mass!,
    thrust: rocketData?.to_thrust!,
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
      <Page className={styles["rocket-pg"]}>
        <RocketHero data={heroData} />
      </Page>
      <MainMargins>
        <RocketTape
          bodyData={bodyData}
          btnData={bodyBtnData}
        />
      </MainMargins>
    </Fragment>
  );
};

export default RocketPg;