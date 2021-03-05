import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      Hello from homepage..
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return <>Index!</>;
          }}
        />
        <Route
          exact
          path="/test"
          component={() => {
            return <>Test!</>;
          }}
        />
        <Route
          component={() => {
            return <>404!</>;
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
