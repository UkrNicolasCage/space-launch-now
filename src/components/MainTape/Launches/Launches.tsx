import { Box } from "@mui/material";
import LaunchesCards from "./LaunchesCards";

import { TopicHeader } from "../../UI/TopicHeader";
import { memo } from "react";

const Launches = () => {
  return (
    <Box marginTop="1rem" id="launches">
      <TopicHeader>Spaceflight Launches</TopicHeader>
      <Box height="2rem"></Box>
      <LaunchesCards />
    </Box>
  );
};

export default memo(Launches);