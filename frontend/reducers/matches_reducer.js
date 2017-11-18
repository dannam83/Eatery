import { RECEIVE_MATCHES } from '../actions/filter_actions';
import merge from 'lodash/merge';

const MatchesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MATCHES:
      return action.matches;
    default:
      return state;
  }
};
// return merge(newState, {[action.biz.id]:action.biz});

export default MatchesReducer;
