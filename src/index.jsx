import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './style/index.css';
import './style/normalize.css';
import './style/skeleton.css';

import { Provider } from 'react-redux';
import store from './store';

import HomePage from './components/home-page/HomePage';
import AuthPage from './components/authentication-page/AuthenticationPage';
import ResourcePage from './components/resource-page/ResourcePage';
import ContactPage from './components/contact-page/ContactPage';
import NotFoundPage from './components/not-found-page/NotFoundPage';

import './style/favicon.ico';

import { init } from './actions/auth';

store.dispatch(init());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/authentication/:userId([0-9]*)" component={AuthPage} />
        <Route path="/authentication" component={AuthPage} />
        <Route path="/resource" component={ResourcePage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById('react-div'),
);
