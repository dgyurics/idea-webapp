import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './style/index.css';
import './style/normalize.css';
import './style/skeleton.css';

import HomePage from './components/home-page/HomePage';
import AuthPage from './components/authentication/Authentication';
import ContactPage from './components/contact-page/ContactPage';

import './style/favicon.ico';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/authentication" component={AuthPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  </Router>,
  document.getElementById('react-div'),
);
