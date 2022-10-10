import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Box, CircularProgress, ThemeProvider } from "@mui/material";

import { lazy, useEffect, Suspense } from "react";
import Header from "./Layout/Header";
import Bottom from "./Layout/Bottom";
import { theme } from "../theme";
import styles from "./App.module.css";

const MainPg = lazy(() => import("./../pages/MainPg"));
const RocketPg = lazy(() => import("../pages/RocketPg"));
const EventPg = lazy(() => import("../pages/EventPg"));
const LaunchPg = lazy(() => import("../pages/LaunchPg"));


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <Box className={`${styles.bg}`}>
        <Suspense fallback={<CircularProgress />}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPg />} />
          <Route path="/launch/:launchId" element={<LaunchPg />} />
          <Route path="/rocket/:rocketId" element={<RocketPg />} />
          <Route path="/event/:eventId" element={<EventPg />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Bottom />
        </Suspense>
      </Box>
    </ThemeProvider>
  );
}

export default App;
