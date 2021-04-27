import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../src/components/Landing/Landing";
import Auth from "../src/components/Auth/Auth";
import Home from "../src/components/Home/Home";
import Profiles from "../src/components/Profiles/Profiles";

import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";


const theme = createMuiTheme({
  palette: {
    primary: {
      // main:'#OOACEE'
      main: "#64b5f6",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing}>
            <Landing />
          </Route>
          <Route path="/auth" exact component={Auth}>
            <Auth />
          </Route>
          <Route path="/newsfeed" exact component={Home}>
            <Home />
          </Route>
          <Route path="/profile" exact component={Profiles}>
            <Profiles />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
