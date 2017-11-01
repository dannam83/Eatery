import { RECEIVE_BIZ } from '../actions/biz_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BIZ:
      return action.biz.reviews;
    default:
      return state;
  }
};

export default ReviewsReducer;
