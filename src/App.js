import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Topbar from './components/Topbar';

import Login from './pages/Login';
import Register from './pages/Register';
// import AddContact from './AddContact';

const App = () => {
  return (
    <Router>
      <Topbar />
      <Switch>
        {/* <Route exact path="/" component={AddContact} /> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
