import { combineReducers } from 'redux';
import BizsReducer from './bizs_reducer';

const EntitiesReducer = combineReducers({
    bizs: BizsReducer,
  }
);

export default EntitiesReducer;
