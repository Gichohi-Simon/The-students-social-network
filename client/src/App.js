import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../src/components/Landing/Landing";
import Auth from "../src/components/Auth/Auth";

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
          <Route path='/' exact component={Landing}>
            <Landing />
          </Route>
          <Route path='/auth' exact component={Auth}>
            <Auth />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
