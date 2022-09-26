import { Box } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RocketHero } from "../components/RocketTape/RocketHero";
import { RocketTape } from "../components/RocketTape/RocketTape";
import { getRocket } from "../lib/api";
import styles from "./Page.module.css";

export const RocketPg = () => {
  const {rocketId} = useParams<{ rocketId: string }>();
  useEffect(()=>{
    getRocket(rocketId as string);
  }, [])
  
  return (
    <Fragment>
      <Box className={`${styles["rocket-pg"]} ${styles.page}`}>
        <RocketHero />
      </Box>
      <Box className={styles.center}>
        <RocketTape />
      </Box>
    </Fragment>
  );
};
