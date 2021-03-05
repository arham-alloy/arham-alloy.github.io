import React from 'react';
import {
  BrowserRouter as DefaultRouter,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <DefaultRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return <>Hello World!</>;
          }}
        />
      </Switch>
    </DefaultRouter>
  );
};

export default App;
