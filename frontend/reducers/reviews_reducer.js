import { RECEIVE_BIZ } from '../actions/biz_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  const reviews = action.biz.reviews;
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BIZ:
      if (reviews) {
        return reviews;
      } else {
        return [];
      } break;
    default:
      return state;
  }
};

export default ReviewsReducer;
