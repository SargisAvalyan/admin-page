const initialState = {
    teacherList: []
}


 const addTeacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TEACHER":
            return { ...state, teacherList: [...state.teacherList, action.payload] }
        case "DELETE_TEACHER":
            return { ...state, teacherList:state.teacherList.filter((el, i)=>i!==action.payload) }
            // case 'EDIT_SCHOOL':
            //     {
                   
            //         const newUpdatedSchools = state.schoolList.map((item, i) => {
            //             if (action.payload.index === i) {
            //                 item = action.payload.schoolData
            //             }
            //             return item
            //         })
            //         return {...state, schoolList: newUpdatedSchools }
            //     }
        default:
            return state
    }
}
export default addTeacherReducer