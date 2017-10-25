import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
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

  <Route exact path="/login" component={SessionFormContainer} />
  <Route exact path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
