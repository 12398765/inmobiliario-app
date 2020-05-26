import React from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import Listainmuebles from "./Componentes/Vistas/Listainmuebles";
import AppNavBar from "./Componentes/Layout/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";

function App() {
    return ( <
        Router >
        <
        MuiThemeProvider theme = { theme } >
        <
        AppNavBar / >
        <
        Grid container >
        <
        Switch >
        <
        Route path = "/"
        component = { Listainmuebles } > { " " } <
        /Route>{" "} <
        /Switch>{" "} <
        /Grid>{" "} <
        /MuiThemeProvider>{" "} <
        /Router>
    );
}

export default App;
