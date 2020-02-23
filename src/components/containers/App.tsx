import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import FocusableTextInput from './FocusableTextInput';
import VotingList from './VotingList';
import RegisterForm from './RegisterForm';
import GenericNotFound from '../GenericNotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainNavigation} />
        <Route exact path="/focusable-input" component={FocusableTextInput} />
        <Route exact path="/voting-list/:candidates" component={VotingList} />
        <Route exact path="/register-form" component={RegisterForm} />
        <Route exact path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;