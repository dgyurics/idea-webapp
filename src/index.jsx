import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { Provider } from "react-redux"
import store from "./rdx/index"

import App from './App'
import Home from './HomePage'
import IdeaPage from './components/idea-page/idea.js'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/idea" component={IdeaPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('react-div')
);
