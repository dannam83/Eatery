import React from 'react';
import ReactDOM from 'react-dom';
// import { signUp, logIn, logOut } from './actions/session_actions';
// import Root from './components/root';
// import configureStore from './store/store';
// import { fetchBenches } from './util/bench_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h2>testing</h2>, root);
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
// window.getState = store.getState;

// window.dispatch = store.dispatch; // just for testing!
// window.signUp = signUp;
// window.logIn = logIn;
// window.logOut = logOut;
