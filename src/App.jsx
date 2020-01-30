import React from "react";
import {ThemeProvider} from "styled-components";
import {SimulationView} from "./components/simulation/SimulationView";

const theme = {
    primary: "#e1dada",
    secondary: "#e3a787",
    success: "#b6b88e",
    failure: "#e3a787",
    highlight: "#fff0cb",
    border: "#849089"
};

const App = () => (
    <ThemeProvider theme={theme}>
        <SimulationView/>
    </ThemeProvider>
);

export default App;
