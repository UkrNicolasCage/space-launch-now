import { Navigate, Route, Routes } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";

import { Header } from "./Layout/Header";
import { MainPg } from "./../pages/MainPg";
import { LaunchPg } from "../pages/LaunchPg";
import { RocketPg } from "../pages/RocketPg";
import { EventPg } from "../pages/EventPg";
import { Bottom } from "./Layout/Bottom";
import { theme } from "../theme";
import styles from "./App.module.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className={`${styles.bg}`}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPg />} />
          <Route path="/launch/:launchId" element={<LaunchPg />} />
          <Route path="/rocket/:rocketId" element={<RocketPg />} />
          <Route path="/event/:eventId" element={<EventPg />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Bottom />
      </Box>
    </ThemeProvider>
  );
}

export default App;
