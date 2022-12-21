const initialState = {
  schoolList: []
}


const addSchoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SCHOOL":
      return {...state, schoolList: [...state.schoolList, action.payload]}
    case "DELETE_SCHOOL":
      return {...state, schoolList: state.schoolList.filter((el, i) => i !== action.payload)}
    case 'EDIT_SCHOOL': {

       

      const newUpdatedSchools = state.schoolList.map((item, i) => {
        if (action.payload.index === i) {
          item = action.payload.school
        }
        return item
      })
      return {...state, schoolList: newUpdatedSchools}
    }
    default:
      return state
  }
}
export default addSchoolReducer