import { createStore } from "redux";
import addReducer  from "./reduserAdd";
export const store = createStore(addReducer)