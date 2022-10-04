import { Box } from "@mui/material";
import { LaunchesCards } from "./LaunchesCards";

import { TopicHeader } from "../../UI/TopicHeader";

export const Launches = () => {
  return (
    <Box marginTop="1rem" id="launches">
      <TopicHeader>Spaceflight Launches</TopicHeader>
      <Box height="2rem"></Box>
      <LaunchesCards />
    </Box>
  );
};
