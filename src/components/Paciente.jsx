

import React from 'react'
import { useGlobalState } from '../context/GlobalState'

export const Paciente = ({patient}) => {

  const {deletePatient} = useGlobalState();

  const handleDelete = (id) => {
    //console.log(id);
    deletePatient(id);
    //Tirar Alerta
  }

  return (
    <div className='mt-5 bg-white shadow-md p-5 md:ml-5 rounded-md mx-2'>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Nombre: {''}
          <span className='font-normal normal-case'>{patient.nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
          <span className='font-normal normal-case'>{patient.email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Entrace Day: {''}
          <span className='font-normal normal-case'>{patient.dia}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Phone Contact: {''}
          <span className='font-normal normal-case'>{patient.numero}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Symptoms: {''}
          <span className='font-normal normal-case'>{patient.sintomas}</span>
        </p>
        <div className='flex justify-between'>
          <button className='bg-green-500 font-bold px-4 py-2 text-white uppercase rounded-md hover:bg-green-600 transition-all'>
            Edit
          </button>
          <button 
            className='bg-red-500 font-bold px-4 py-2 text-white uppercase rounded-md hover:bg-red-600 transition-all'
            onClick={() => handleDelete(patient.id)}
          >
            Delete
          </button>
        </div>

    </div>
  )
}
