import React from 'react';
import HomeHeaderCon from './home_header_con';
import MainHeaderCon from './main_header_con';
import SessionHeaderCon from './session_header_con';
import SessionFormContainer from './session_form_container';
import SearchContainer from './search_container';
import FooterContainer from './footer_container';
import BizContainer from './biz_container';
import ReviewFormContainer from './review_form_container';
import { AuthRoute } from '../util/route_util.js';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

// const Header = this.props.location === '/' ? HomeHeaderCon : MainHeaderCon;

const App = () => (
  <div>
    <header>
      <Switch>
        <Route exact path="/" component={HomeHeaderCon} />
        <Route exact path="/login" component={SessionHeaderCon} />
        <Route exact path="/signup" component={SessionHeaderCon} />
        <Route exact path="/guest" component={SessionHeaderCon} />
        <Route path="/" component={MainHeaderCon} />
      </Switch>
    </header>

    <AuthRoute exact path="/login" component={SessionFormContainer} />
    <AuthRoute exact path="/signup" component={SessionFormContainer} />
    <AuthRoute exact path="/guest" component={SessionFormContainer} />
    <Route exact path="/search" component={SearchContainer} />
    <Route exact path="/bizs/:bizId" component={BizContainer} />
    <Route exact path="/bizs/:bizId/reviews" component={ReviewFormContainer} />

    <Route path="/" component={FooterContainer} />
  </div>
);

export default App;

// SCSS
// put header into component
