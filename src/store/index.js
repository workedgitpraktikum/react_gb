import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile/reducer";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
