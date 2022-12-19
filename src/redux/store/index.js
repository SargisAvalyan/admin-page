import { createStore, combineReducers } from "redux";
import addSchoolReducer  from "./reducers/reduserAdd";
import addChildrenReducer from "./reducers/addChildrenReducer";
import addTeacherReducer from "./reducers/addTeacherReducer"
const rootReducer = combineReducers({
    addSchoolReducer,
    addChildrenReducer,
    addTeacherReducer

    
})






export const store = createStore(rootReducer)