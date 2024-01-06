

export const AppReducer = (state, action) => {
    
    switch(action.type){
        case 'ADD_PATIENT':
            return {
                ...state,
                patients: [...state.patients, action.payload]
            }
        case 'DELTE_PATIENT':
            return {
                ...state,
                patients: state.patients.filter( patient =>
                    patient.id !== action.payload
                )
            }
        case 'EDIT_PATIENT':
            return []
    }
}
