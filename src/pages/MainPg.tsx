import styles from "./Page.module.css";
import { MainTape } from "../components/MainTape/MainTape";
import { MainHero } from "../components/MainTape/MainHero";
import { Page } from "../components/Layout/Page";
import { MainMargins } from "../components/Layout/MainMargins";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    gradient: true;
  }
}

export const MainPg = () => {
  return (
    <>
      <Page className={styles["main-pg"]}>
        <MainHero/>
      </Page>
      <MainMargins>
        <MainTape />
      </MainMargins>
    </>
  );
};
