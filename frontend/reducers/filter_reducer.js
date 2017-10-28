import { UPDATE_BOUNDS } from '../actions/filter_actions';
import merge from 'lodash/merge';

const FilterReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case UPDATE_BOUNDS:
      return merge(newState, {bounds: action.bounds});
    default:
      return state;
  }
};

export default FilterReducer;
