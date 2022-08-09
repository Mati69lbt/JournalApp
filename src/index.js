import React from "react";
import ReactDOM from "react-dom/client";
import JournalApp from "./JournalApp";
import { BrowserRouter } from "react-router-dom";
import "./styles/styless.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>
  </React.StrictMode>
);
