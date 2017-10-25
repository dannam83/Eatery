import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

// import Root from './components/root';
// import { fetchBenches } from './util/bench_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});


// if (window.currentUser) {
//   const preloadedState = { session: { currentUser: window.currentUser } };
//   store = configureStore(preloadedState);
//   delete window.currentUser;
// } else {
//   store = configureStore();
// }
// window.store = store;
// window.fetchBenches = fetchBenches();

// window.dispatch = store.dispatch; // just for testing!
