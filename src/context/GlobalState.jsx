import { createContext, useContext, useEffect, useReducer } from "react"
import { AppReducer } from "./AppReducer";


export const Context = createContext();

export const useGlobalState = () => {
    const data = useContext(Context);
    return data;
}

const initalState = {
    patients: JSON.parse(localStorage.getItem('patients')) || [],
    editingPatient: null
}

export const GloabalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initalState);

    useEffect(() => {
        localStorage.setItem('patients', JSON.stringify(state.patients));
    }, [state.patients]);
    

    const addPatient = (patient) => {
        dispatch({
            type: 'ADD_PATIENT',
            payload: patient
        })
        
    }

    const deletePatient = (id) => {
        dispatch({
            type: 'DELTE_PATIENT',
            payload: id
        })
    }

    const editPatient = (patient) => {
        dispatch({
            type: 'EDIT_PATIENT',
            payload: patient
        })
    }
    const setEditingPatient = (patient) => {
        dispatch({ type: 'SET_EDITING_PATIENT', payload: patient });
      };

  return (
    <Context.Provider value={{
        patients: state.patients,
        editingPatient: state.editingPatient,
        addPatient,
        deletePatient,
        editPatient,
        setEditingPatient,
      }}>
        {children}
    </Context.Provider>
  )
}
