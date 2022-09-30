import { RecentEvents } from "../RecentEvents/RecentEvents";
import { Launches } from "./Launches/Launches";
import { Tape } from "../Layout/Tape";

export const MainTape = () => {
  return (
    <Tape>
      <RecentEvents />
      <Launches/>
    </Tape>
  );
};
