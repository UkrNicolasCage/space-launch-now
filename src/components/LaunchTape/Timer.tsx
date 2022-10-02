import { Skeleton,Typography } from "@mui/material";

import { TimerContainer } from "./TimerContainer";

const calcDate = (startDate: string) => {
  const today = new Date();
  const target = new Date(startDate);

  return (+target - +today) / 1000;
};

const formatOutput = (timeLeft: number) => {
  let days = Math.floor(timeLeft / (60 * 60 * 24));
  let hours = Math.floor(timeLeft / (60 * 60)) - days * 24;
  let minutes = Math.floor(timeLeft / 60) - (hours * 60 + days * 24 * 60);
  let seconds = Math.floor(
    timeLeft - (hours * 60 + days * 24 * 60 + minutes) * 60
  );
  return {
    days: days.toString().padStart(2, "0"),
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  };
};

export const Timer = () => {

  const placeHolder = (
    <Skeleton variant="rounded" height="4.5rem" width="35rem" />
  );

 
  return (
    <TimerContainer>
      {!false? (
        placeHolder
      ) : (
        <Typography variant="h1">
          {" "}
          {/* {time.days} : {time.hours} : {time.minutes} : {time.seconds} */}
        </Typography>
      )}
    </TimerContainer>
  );
};
