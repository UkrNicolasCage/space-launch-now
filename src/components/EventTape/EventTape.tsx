import { RecentEvents } from "../RecentEvents/RecentEvents";
import { EventInfo } from "./EventInfo";
import { Tape } from "../Layout/Tape";

interface Props {
  data: {
    video: string;
    launchName: string;
    date: string;
    destination: string;
    mission: string;
    description: string;
    img: string;
  };
}

export const EventTape = (props: Props) => {
  return (
    <Tape>
      <EventInfo data={props.data}/>
      <RecentEvents />
    </Tape>
  );
};
