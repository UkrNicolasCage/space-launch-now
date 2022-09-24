import { Event } from "./interfaces";
import noImg from "../assets/no-img.png"

const adress = "https://spacelaunchnow.me/api/3.3.0/";

const getRecentEvents = async (startIndex: number) => {
  const response = await fetch(
    adress + `event/upcoming/?limit=3&offset=${startIndex}`
  );
  if (!response.ok) {
    throw new Error("Not found");
  }
  const data = await response.json();
  // console.log(data.results);

  return data.results.map((event: Event) => {
    const date = new Date(event.date).toLocaleDateString("en-gb", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      localeMatcher: "best fit",

      hour12: true,
      // timeZone: "UTC",
    });
    let logo = event.feature_image;
    if (
      event.feature_image ===
        "https://nyc3.digitaloceanspaces.com/spacelaunchnow-prod-east/media/event_images/default.png" ||
      !event
    ){
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

export { getRecentEvents };
