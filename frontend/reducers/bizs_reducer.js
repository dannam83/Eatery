import { RECEIVE_BIZS, RECEIVE_BIZ } from '../actions/biz_actions';
import merge from 'lodash/merge';

const BizsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BIZS:
      return action.bizs;
    case RECEIVE_BIZ:
      return merge(newState, {[action.biz.id]:action.biz});
    default:
      return state;
  }
};

export default BizsReducer;
