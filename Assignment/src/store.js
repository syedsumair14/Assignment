import { createStore, combineReducers } from "redux";
import { dataReducer } from "./reducers";

const rootReducer = combineReducers({
  dataReducer
});

export const store = createStore(rootReducer);
