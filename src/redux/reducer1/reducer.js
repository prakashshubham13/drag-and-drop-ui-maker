const initialState = {
    dragData:{},
    dropData:[],
    editData:{},
    deleteData:false
};
export const uiReduder = (state=initialState, action) => {
    switch (action.type) {
        case "dragData":
            return {
                ...state,
                dragData:action.payload
            };
        case "dropData":
                return {
                    ...state,
                    dropData:action.payload
                };
        case "editData":
            return {
                ...state,
                editData:action.payload
            };
        case "deleteData":
                return {
                    ...state,
                    deleteData:action.payload
                };                
        default:
            return state;    
    }
}