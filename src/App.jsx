import React from "react";
import { Box } from "@mui/material";
import ReactDOM from "react-dom";
import Service from "./components/Service";
import "./index.css";

const App = () => (
  <Box>
    <Service />
  </Box>
);
ReactDOM.render(<App />, document.getElementById("app"));
