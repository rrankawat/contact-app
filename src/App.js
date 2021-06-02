import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Topbar from './components/Topbar';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="container py-5">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
