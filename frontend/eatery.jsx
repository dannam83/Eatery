import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';

// import Root from './components/root';
// import { fetchBenches } from './util/bench_api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  const store = configureStore();
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<h2>hi again</h2>, root);
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
