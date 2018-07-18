import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import apiDiscovery from "./components/apiDiscovery/apiDiscovery";
import frame from "./components/SignIn/SignIn";

class App extends Component {
  render() {
    return (
      <div className="App">
        <frame>
          <Router>
            <React.Fragment>
              <Route exact path="/" component={SignIn} />,
              <Route exact path="/api" apiDiscovery={apiDiscovery} />
            </React.Fragment>
          </Router>
        </frame>
      </div>
    );
  }
}

export default App;
