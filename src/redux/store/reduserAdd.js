const initialState = {
    schoolList: []
}


 const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SCHOOL":
            return { ...state, schoolList: [...state.schoolList, action.payload] }
        case "DELETE_SCHOOL":
            return { ...state, schoolList:state.schoolList.filter((el, i)=>i!==action.payload) }
        // case "EDIT_SCHOOL":
        //     return { ...state, schoolList: [...state.schoolList, action.payload] }
        default:
            return state
    }
}
export default addReducer