const initialState = {
    childrenList: []
}


 const addChildrenReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CHILDREN":
            return { ...state, childrenList: [...state.childrenList, action.payload] }
        case "DELETE_CHILDREN":
            return { ...state, childrenList:state.childrenList.filter((el, i)=>i!==action.payload) }
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
export default addChildrenReducer