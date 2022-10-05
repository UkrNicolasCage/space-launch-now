import { Skeleton, Typography } from "@mui/material";
import { memo, useEffect, useState } from "react";

import { timerFormatter } from "../../helpers/timerFormatter";
import { useAppSelector } from "../../store";
import { TimerContainer } from "./TimerContainer";

interface Props {
  time: string;
}

const calcDate = (startDate: string) => {
  const today = new Date();
  const target = new Date(startDate);
  const result = (+target - +today) / 1000;
  return result >= 1 ? result : 0;
};

const Timer = (props: Props) => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!isLoading) {
        const timeSec = calcDate(props.time);
        if (!Number.isNaN(timeSec)) {
          if (timeSec >= 1) {
            setTime(timeSec);
          } else {
            setTime(0);
          }
          setStartTimer(true);
        }
      }
    }, 500);
  }, [props.time, isLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        return prev - 1 > 0 ? prev - 1 : 0;
      });
    }, 1000);
    if (startTimer) {
      clearInterval(interval);
    }
  }, [startTimer]);

  const formattedTime = timerFormatter(time);

  const placeHolder = (
    <Skeleton variant="rounded" height="3.5rem" width="35rem" />
  );

  return (
    <TimerContainer>
      {isLoading || !startTimer ? (
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

export default memo(Timer);
