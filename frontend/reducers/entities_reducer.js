import { combineReducers } from 'redux';
import BizsReducer from './bizs_reducer';
import ReviewsReducer from './reviews_reducer';


const EntitiesReducer = combineReducers({
  bizs: BizsReducer,
  reviews: ReviewsReducer,
});

export default EntitiesReducer;
