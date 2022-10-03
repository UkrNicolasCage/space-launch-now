import { Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store";

import { TimerContainer } from "./TimerContainer";

interface Props {
  time: string;
}

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

export const Timer = (props: Props) => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const placeHolder = (
    <Skeleton variant="rounded" height="4.5rem" width="35rem" />
  );

  useEffect(() => {
    if (!isLoading) {
      const timeSec = calcDate(props.time);
      if (!Number.isNaN(timeSec)) {
        setTime(timeSec);
        setStartTimer(true);
      }
    }
  }, [props.time, isLoading]);

  useEffect(() => {
    
      const interval = setInterval(() => {
        setTime((prev) =>{ 
          return prev - 1});

      }, 1000);
    if (startTimer) {
      clearInterval(interval);
    }
  }, [startTimer]);

  
  const formattedTime = formatOutput(time);
  return (
    <TimerContainer>
      {isLoading ? (
        placeHolder
      ) : (
        <Typography variant="h1">
          {formattedTime.days} : {formattedTime.hours} : {formattedTime.minutes}{" "}
          : {formattedTime.seconds}
        </Typography>
      )}
    </TimerContainer>
  );
};
