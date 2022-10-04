import styles from "./Page.module.css";
import { MainTape } from "../components/MainTape/MainTape";
import { MainHero } from "../components/MainTape/MainHero";
import { Page } from "../components/Layout/Page";
import { MainMargins } from "../components/Layout/MainMargins";
import { useRef, forwardRef, } from "react";

export const MainPg = () => {
  const scroll = useRef(null);

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
