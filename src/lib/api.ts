import { Event, Launch, Rocket } from "./interfaces";
import noImg from "../assets/no-img.png";

const url = "https://spacelaunchnow.me/api/3.3.0/";

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-gb", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    localeMatcher: "best fit",
    hour12: true,
  });
};
const getRecentEvents = async (startIndex: number) => {
  const response = await fetch(
    url + `event/upcoming/?limit=3&offset=${startIndex}`
  );
  if (!response.ok) {
    throw new Error("Not found");
  }
  const data = await response.json();

  return data.results.map((event: Event) => {
    const date = formatDate(new Date(event.date));

    let logo = event.feature_image;
    if (
      event.feature_image ===
        "https://nyc3.digitaloceanspaces.com/spacelaunchnow-prod-east/media/event_images/default.png" ||
      !event
    ) {
      logo = noImg;
    }
    return {
      id: event.id,
      logo,
      date,
      name: event.name,
    };
  });
};

const getLaunches = async (startIndex: number, number: number) => {
  const response = await fetch(
    url + `launch/upcoming/?limit=${number}&offset=${startIndex}`
  );

  if (!response.ok) {
    throw new Error("Not found");
  }
  const data = await response.json();
  return data.results.map((launch: Launch) => {
    const date = formatDate(new Date(launch.window_start));
    return {
      id: launch.id,
      logo: launch.image_url,
      date,
      name: launch.name,
      rocketId: launch.rocket.configuration.id,
    };
  });
};

const getRocket = async (id: string) => {
  const response = await fetch(url + "config/launcher/" + id);

  if (!response.ok) {
    throw new Error("Not found");
  }
  const data: Rocket = await response.json()!;
  return data;
};

const getEvent = async (id: string) => {
  const response = await fetch(url + "event/" + id);
  if (!response.ok) {
    throw new Error("Not found");
  }

  const data: Event = await response.json()!;
  return data;
};

const getLaunch = async (id: string) => {
  const response = await fetch(url + "launch/" + id);
  if (!response.ok) {
    throw new Error("Not found");
  }

  const data: Launch = await response.json();
  return data;
};

export { getRecentEvents, getLaunches, getRocket, getEvent, getLaunch, formatDate };
