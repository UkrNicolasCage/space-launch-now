import { Box } from "@mui/material";
import { LaunchesCards } from "./LaunchesCards";

import { TopicHeader } from "../../UI/TopicHeader";

export const Launches = () => {
  return (
    <Box marginTop="1rem">
      <TopicHeader>Spaceflight Launches</TopicHeader>
      <LaunchesCards />
    </Box>
  );
};
