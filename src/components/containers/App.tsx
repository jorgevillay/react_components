import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import '../styles/general.css';
import MainNavigation from './MainNavigation';
import FocusableTextInput from './FocusableTextInput';
import VotingInterface from './VotingInterface';
import RegisterForm from './RegisterForm';
import GenericNotFound from '../GenericNotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainNavigation} />
        <Route exact path="/focusable-input" component={FocusableTextInput} />
        <Route exact path="/voting-list/:candidates" component={VotingInterface} />
        <Route exact path="/register-form" component={RegisterForm} />
        <Route exact path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;