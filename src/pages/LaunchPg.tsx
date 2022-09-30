import { LaunchHero } from "../components/LaunchTape/LaunchHero";
import { LaunchTape } from "../components/LaunchTape/LaunchTape";
import { MainMargins } from "../components/Layout/MainMargins";
import { Page } from "../components/Layout/Page";
import styles from "./Page.module.css";

export const LaunchPg = () => {
  return (
    <>
      <Page className={styles["launch-pg"]}>
        <LaunchHero />
      </Page>
      <MainMargins>
        <LaunchTape />
      </MainMargins>
    </>
  );
};
