import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Privacy from "./pages/Privacy";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";

import TheNav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <TheNav />
      <div className="page-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/dashboard" component={Dashboard} />

          <Route component={NoMatch} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
