import React from "react";
import { Box } from "@mui/material";
import ReactDOM from "react-dom";
import Services from "./components/Services";
import "./index.css";

const App = () => (
  <Box>
    <Services />
  </Box>
);
ReactDOM.render(<App />, document.getElementById("app"));
