import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  EventHero  from "../components/EventTape/EventHero";
import  EventTape  from "../components/EventTape/EventTape";
import { MainMargins } from "../components/Layout/MainMargins";
import { Page } from "../components/Layout/Page";
import { formatDate, getEvent, getLaunch } from "../lib/api";
import { Event, Launch } from "../lib/interfaces";
import { useAppDispatch } from "../store";
import { loadData } from "../store/ui-slice";
import styles from "./Page.module.css";

export const EventPg = () => {
  const {eventId} = useParams<{ eventId: string }>()
  const [eventData, setEventData] = useState<Event>();
  const [launchData, setLanchData] = useState<Launch>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchEventData = async () => {
      const eventData: Event = await getEvent(eventId as string);
      const launchData: Launch = await getLaunch(eventData.launches[0].id);
      setEventData(eventData);
      setLanchData(launchData);
    };

    dispatch(loadData(fetchEventData));
  }, [dispatch, eventId]);

  useEffect(() => {
    window.scrollTo({ top: 0 });

  }, [eventId]);

  const heroData = {
    name: eventData?.name!,
    date: formatDate(new Date(eventData?.date!)),
    description: eventData?.description!,
    siteUrl: eventData?.launches[0].slug!,
  };
  
  const tapeData = {
    video: eventData?.video_url!,
    launchName: eventData?.launches[0].name!,
    date: formatDate(new Date(eventData?.date!)),
    destination: launchData?.mission.orbit!,
    mission: launchData?.mission.type!,
    description: launchData?.mission.description!,
    img: eventData?.launches[0].image!,
  };

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
