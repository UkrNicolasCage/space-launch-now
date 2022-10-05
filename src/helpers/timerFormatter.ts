export const timerFormatter = (timeLeft: number) => {
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
