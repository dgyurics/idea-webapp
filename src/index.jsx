import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './components/home-page/HomePage.js'
import IdeaPage from './components/idea-page/IdeaPage.js'
import ConversationPage from './components/conversation-page/ConversationPage.js'

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/idea" component={IdeaPage} />
        <Route path="/conversation/:conversationId" component={ConversationPage} />
      </Switch>
    </Router>,
  document.getElementById('react-div')
);
