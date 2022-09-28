import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";

import {Header} from "./UI/Header"
import { MainPg } from "./../pages/MainPg";
import { LaunchPg } from "../pages/LaunchPg";
import { RocketPg } from "../pages/RocketPg";
import { EventPg } from "../pages/EventPg";
import { Bottom } from "./UI/Bottom";
import { theme } from "./UI/theme";
import styles from "./App.module.css";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className={`${styles.bg}`}> 
        <Header />
        <Routes>
          <Route path="/" element={<MainPg />} />
          <Route path="/launch/:launchId" element={<LaunchPg />}/>
          <Route path="/rocket/:rocketId" element={<RocketPg />}/>
          <Route path="/event/:eventId" element={<EventPg />}/>
        </Routes>
        <Bottom />
      </Box>
    </ThemeProvider>
  );
}

export default App;
