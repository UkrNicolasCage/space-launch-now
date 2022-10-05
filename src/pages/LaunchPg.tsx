import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LaunchHero from "../components/LaunchTape/LaunchHero";
import LaunchTape from "../components/LaunchTape/LaunchTape";
import { MainMargins } from "../components/Layout/MainMargins";
import { Page } from "../components/Layout/Page";
import { getLaunch } from "../lib/api";
import { Launch } from "../lib/interfaces";
import { useAppDispatch } from "../store";
import { loadData } from "../store/ui-slice";
import styles from "./Page.module.css";

export const LaunchPg = () => {
  const { launchId } = useParams<{ launchId: string }>();
  const [launchtData, setlaunchData] = useState<Launch>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchLaunchData = async () => {
      const data = await getLaunch(launchId as string);
      setlaunchData(data);
    };

    dispatch(loadData(fetchLaunchData));
  }, [dispatch, setlaunchData, launchId]);

  const heroData = {
    name: launchtData?.name!,
    startTime: launchtData?.window_start!,
  };

  const probability =
    launchtData?.pad.probability === null ||
    launchtData?.pad.probability === undefined
      ? "obscurely"
      : launchtData?.pad.probability! + "%";

  const video =
    launchtData?.vidURLs.length !== 0 ? launchtData?.vidURLs[0]! : null;
  const tapeData = {
    overview: {
      destination: launchtData?.mission.orbit!,
      mission: launchtData?.mission.type!,
      decription: launchtData?.mission.description!,
      complexName: launchtData?.pad.name!,
      centerName: launchtData?.pad.location.name!,
      probability,
    },
    details: {
      rocketId: launchtData?.rocket.configuration.id!,
      name: launchtData?.rocket.configuration.full_name!,
      familly: launchtData?.rocket.configuration.family!,
      configuration: launchtData?.rocket.configuration.variant!,
      description: launchtData?.rocket.configuration.description!,
    },
    video,
  };
  return (
    <>
      <Page className={styles["launch-pg"]}>
        <LaunchHero data={heroData} />
      </Page>
      <MainMargins>
        <LaunchTape data={tapeData} />
      </MainMargins>
    </>
  );
};
