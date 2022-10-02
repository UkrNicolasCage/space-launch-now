import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EventHero } from "../components/EventTape/EventHero";
import { EventTape } from "../components/EventTape/EventTape";
import { MainMargins } from "../components/Layout/MainMargins";
import { Page } from "../components/Layout/Page";
import { getEvent } from "../lib/api";
import { Event } from "../lib/interfaces";
import { useAppDispatch } from "../store";
import { loadData } from "../store/ui-slice";
import styles from "./Page.module.css";

export const EventPg = () => {
  const {eventId} = useParams<{ eventId: string }>()
  const [eventData, setEventData] = useState<Event>();
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    const fetchEventData = async () => {
      const data: Event = await getEvent(eventId as string);
      setEventData(data);
    };

    dispatch(loadData(fetchEventData));
  }, [dispatch])

  const heroData={
    name: eventData?.name!,
    date: eventData?.date!,
    description: eventData?.description!,
    siteUrl: eventData?.launches[0].slug!,
  }
  const tapeData = {
    video: eventData?.video_url!,
    launchName: eventData?.launches[0].name!,
    date: eventData?.date!,
    destination: eventData?.launches[0].mission.orbit!,
    mission: eventData?.launches[0].mission.type!,
    description: eventData?.launches[0].mission.description!,
    img: eventData?.feature_image!,
  };

  console.log(tapeData);

  return (
    <>
      <Page className={styles["event-pg"]}>
        <EventHero data={heroData}/>
      </Page>
      <MainMargins>
        <EventTape data={tapeData}/>
      </MainMargins>
    </>
  );
};
