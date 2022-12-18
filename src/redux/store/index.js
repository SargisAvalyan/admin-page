import { createStore, combineReducers } from "redux";
import addSchoolReducer  from "./reducers/reduserAdd";

const rootReducer = combineReducers({
    addSchoolReducer

    
})






export const store = createStore(rootReducer)