import { EventHero } from "../components/EventTape/EventHero";
import { EventTape } from "../components/EventTape/EventTape";
import { MainMargins } from "../components/Layout/MainMargins";
import { Page } from "../components/Layout/Page";
import styles from "./Page.module.css";

export const EventPg = () => {
  return (
    <>
      <Page className={styles["event-pg"]}>
        <EventHero />
      </Page>
      <MainMargins>
        <EventTape />
      </MainMargins>
    </>
  );
};
