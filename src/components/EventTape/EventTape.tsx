import { RecentEvents } from "../RecentEvents/RecentEvents";
import { theme } from "../../theme";

import { EventInfo } from "./EventInfo";
import { Tape } from "../Layout/Tape";

export const EventTape = () => {
  return (
    <Tape>
      <EventInfo />
      <RecentEvents />
    </Tape>
  );
};
