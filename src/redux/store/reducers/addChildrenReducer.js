const initialState = {
    childrenList: []
}


 const addChildrenReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CHILDREN":
            return { ...state, childrenList: [...state.childrenList, action.payload] }
        case "DELETE_CHILDREN":
            return { ...state, childrenList:state.childrenList.filter((el, i)=>i!==action.payload) }
            case 'EDIT_CHILDREN': {
                const newUpdatedChildren = state.childrenList.map((item, i) => {
                    if (action.payload.index === i) {
                        item = action.payload.children
                    }
                    return item
                })
                return { ...state, childrenList: newUpdatedChildren }
            }
        default:
            return state
    }
}
export default addChildrenReducer