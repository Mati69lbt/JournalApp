import React from "react";
import NotesScreen from "../notes/NotesScreen";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import NothingSelected from "./NothingSelected";

const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>{active ? <NotesScreen /> : <NothingSelected />}</main>
    </div>
  );
};

export default JournalScreen;
