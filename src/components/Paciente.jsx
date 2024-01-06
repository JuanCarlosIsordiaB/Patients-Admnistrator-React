

import React from 'react'

export const Paciente = () => {
  return (
    <div className='mt-5 bg-white shadow-md p-5 md:ml-5 rounded-md mx-2'>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Nombre: {''}
          <span className='font-normal normal-case'>Juan Carlos</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
          <span className='font-normal normal-case'>juan@juan.com</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Entrace Day: {''}
          <span className='font-normal normal-case'>12/12/23</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Phone Contact: {''}
          <span className='font-normal normal-case'>44223423423</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Symptoms: {''}
          <span className='font-normal normal-case'>No quiere comer</span>
        </p>
        <div className='flex justify-between'>
          <button className='bg-green-500 font-bold px-4 py-2 text-white uppercase rounded-md hover:bg-green-600 transition-all'>
            Edit
          </button>
          <button className='bg-red-500 font-bold px-4 py-2 text-white uppercase rounded-md hover:bg-red-600 transition-all'>
            Delete
          </button>
        </div>

    </div>
  )
}
