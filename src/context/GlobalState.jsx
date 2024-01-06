import { createContext, useContext, useReducer } from "react"
import { AppReducer } from "./AppReducer";


export const Context = createContext();

export const useGlobalState = () => {
    const data = useContext(Context);
    return data;
}

const initalState = {
    patients: []
}

export const GloabalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initalState);

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

    const editPatient = (id) => {
        dispatch({
            type: 'EDIT_PATIENT',
            payload: id
        })
    }

  return (
    <Context.Provider value={{
        patients: state.patients,
        addPatient,
        deletePatient
    }}>
        {children}
    </Context.Provider>
  )
}
