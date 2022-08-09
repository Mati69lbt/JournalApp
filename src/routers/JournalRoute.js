import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";

const JournalRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalScreen />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default JournalRoute;
