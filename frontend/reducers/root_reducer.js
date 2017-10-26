import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import ErrorsReducer from './errors_reducer.js';
import EntitiesReducer from './entities_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  entities: EntitiesReducer,
});

export default RootReducer;
