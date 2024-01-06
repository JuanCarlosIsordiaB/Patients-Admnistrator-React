export const AppReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_PATIENT':
        return {
          ...state,
          patients: [...state.patients, action.payload],
        };
      case 'DELTE_PATIENT':
        return {
          ...state,
          patients: state.patients.filter((patient) => patient.id !== action.payload),
        };
      case 'EDIT_PATIENT':
        const editedPatients = state.patients.map((patient) =>
          patient.id === action.payload.id ? action.payload : patient
        );
  
        return {
          ...state,
          patients: editedPatients,
        };
      case 'SET_EDITING_PATIENT':
        return {
          ...state,
          editingPatient: action.payload,
        };
      default:
        return state;
    }
  };