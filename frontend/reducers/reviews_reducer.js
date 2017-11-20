import { RECEIVE_BIZ } from '../actions/biz_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BIZ:
      if (action.biz.reviews) {
        return action.biz.reviews;
      } else {
        return [];
      } break;
    default:
      return state;
  }
};

export default ReviewsReducer;
