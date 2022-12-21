const initialState = {
    teacherList: []
}


const addTeacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TEACHER":
            return { ...state, teacherList: [...state.teacherList, action.payload] }
        case "DELETE_TEACHER":
            return { ...state, teacherList: state.teacherList.filter((el, i) => i !== action.payload) }
        case 'EDIT_TEACHER': {
            const newUpdatedTeachers = state.teacherList.map((item, i) => {
                if (action.payload.index === i) {
                    item = action.payload.teacher
                }
                return item
            })
            return { ...state, teacherList: newUpdatedTeachers }
        }
        default:
            return state
    }
}
export default addTeacherReducer