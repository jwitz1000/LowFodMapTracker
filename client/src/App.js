import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";
import NoMatch from "./pages/NoMatch";

// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="page-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
