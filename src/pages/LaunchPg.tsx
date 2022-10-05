import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LaunchHero from "../components/LaunchTape/LaunchHero";
import LaunchTape from "../components/LaunchTape/LaunchTape";
import { MainMargins } from "../components/Layout/MainMargins";
import { Page } from "../components/Layout/Page";
import { nullCheck } from "../helpers/nullCheck";
import { getLaunch } from "../lib/api";
import { Launch } from "../lib/interfaces";
import { useAppDispatch } from "../store";
import { loadData } from "../store/ui-slice";
import styles from "./Page.module.css";

const LaunchPg = () => {
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

  const mission =
    launchtData?.mission! !== null && launchtData?.mission! !== undefined
      ? launchtData?.mission!
      : {
          orbit: null,
          type: null,
          description: null,
        };

  const tapeData = {
    overview: {
      destination: nullCheck(mission.orbit, "No info"),
      mission: nullCheck(mission.type, "No info"),
      decription: nullCheck(mission.description, "No description"),
      complexName: nullCheck(launchtData?.pad.name!, "no info"),
      centerName: nullCheck(launchtData?.pad.location.name!, "no info"),
      probability,
    },
    details: {
      rocketId: launchtData?.rocket.configuration.id!,
      name: nullCheck(launchtData?.rocket.configuration.full_name!, "no info"),
      familly: nullCheck(launchtData?.rocket.configuration.family!, "no info"),
      configuration: nullCheck(
        launchtData?.rocket.configuration.variant!,
        "no info"
      ),
      description: nullCheck(
        launchtData?.rocket.configuration.description!,
        ""
      ),
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

export default LaunchPg;
