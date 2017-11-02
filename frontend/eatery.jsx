import React from 'react';
import ReactDOM from 'react-dom';
// import { fetchBizs } from './actions/biz_actions';
import configureStore from './store/store';
import Root from './components/root';
// import { createReview } from './actions/review_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});

// window.fetchBizs = fetchBizs;
// window.createReview = createReview;
