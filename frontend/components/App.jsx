import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../util/route_util.js';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Eatery</h1>
      <GreetingContainer />
    </header>

  <AuthRoute exact path="/login" component={SessionFormContainer} />
  <AuthRoute exact path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
