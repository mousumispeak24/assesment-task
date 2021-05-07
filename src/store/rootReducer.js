import { combineReducers } from "redux";
import { productDataReducer } from "../containers/auth/state/reducers";
export const rootReducer = combineReducers({
  auth: productDataReducer,
});
