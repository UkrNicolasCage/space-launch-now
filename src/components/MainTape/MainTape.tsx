import { RecentEvents } from "../RecentEvents/RecentEvents";
import  Launches  from "./Launches/Launches";
import { Tape } from "../Layout/Tape";
import { memo } from "react";

const MainTape = () => {
  return (
    <Tape>
      <RecentEvents />
      <Launches/>
    </Tape>
  );
};

export default memo(MainTape);