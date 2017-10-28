import { combineReducers } from 'redux';
import FilterReducer from './filter_reducer';

const uiReducer = combineReducers ({
  filters: FilterReducer,
});

export default uiReducer;
