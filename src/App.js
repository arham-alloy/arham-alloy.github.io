import React from 'react';
import {
  BrowserRouter as DefaultRouter,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <DefaultRouter basename={`${process.env.PUBLIC_URL}/`}>
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
      </Switch>
    </DefaultRouter>
  );
};

export default App;
