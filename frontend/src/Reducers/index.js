import authReducer from "./authReducer";
import textReducer from "./textReducer";
import { combineReducers } from 'redux'

const reducers = combineReducers({
  authReducer,
  textReducer
})

export default reducers;
