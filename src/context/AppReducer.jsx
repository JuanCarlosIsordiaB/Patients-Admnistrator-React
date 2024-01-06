

export const AppReducer = (state, action) => {
    
    switch(action.type){
        case 'ADD_PATIENT':
            return {
                ...state,
                patients: [...state.patients, action.payload]
            }
        case 'DELETE_PATIENT':
            return []
        case 'EDIT_PATIENT':
            return []
    }
}
