import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AboutPageComponent from "./pages/AboutPageComponent";
import ErrorPage from "./pages/ErrorPage";
import HomepageComponent from "./pages/HomePageComponent";

function App() {
  return (
    <Router>
      <div className="container text-center my-5">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={HomepageComponent} />
          <Route path="/about" component={AboutPageComponent} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
