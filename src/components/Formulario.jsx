

import React, { useState } from 'react'
import { useGlobalState } from '../context/GlobalState';

export const Formulario = () => {

  const {addPatient} = useGlobalState(); 

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [dia, setDia] = useState('');
  const [numero, setNumero] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre,email,dia,numero,sintomas].includes('')){
      setError(true);
      return;
    }

    setError(false);

    addPatient({
      id: Date.now(),
      nombre,
      email,
      dia,
      numero,sintomas
    })
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 '>
      <h2 className='font-bold text-center text-xl mb-5 '>Information of your <span className='text-indigo-700'>patient</span>.</h2>
      <form 
        action=""
        className='bg-white shadow-md rounded-md p-3 m-2'
        onSubmit={handleSubmit}
      >
        {
          error && (
            <h2 className='bg-red-400 p-2 text-sm text-white rounded-md mb-3'><span className='uppercase font-bold'>Error</span> - All fields are required.</h2>
          )
        }
        <div className='mt-5'>
          <label 
            htmlFor="name"
            className='block font-bold  text-md  uppercase'
          >
            Name of your patient
          </label>
          <input 
            className=' border-2 mt-2 w-full p-2 text-md placeholder-slate-500 rounded-md'
            type="text" 
            name="name" 
            id="name" 
            placeholder='Enter the name of your patient'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label 
            htmlFor="email"
            className='block font-bold  text-md uppercase'
          >
            Email Contact
          </label>
          <input 
            className=' border-2 mt-2 w-full p-2 text-md placeholder-slate-500 rounded-md'
            type="email" 
            name="email" 
            id="email" 
            placeholder='Enter the email of your patient'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label 
            htmlFor="day"
            className='block font-bold  text-md uppercase'
          >
            Entrance day
          </label>
          <input 
            className=' border-2 mt-2 w-full p-2 text-md text-slate-500 placeholder-slate-500 rounded-md'
            type="date" 
            name="day" 
            id="day" 
            value={dia}
            onChange={(e) => setDia(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label 
            htmlFor="number"
            className='block font-bold  text-md uppercase'
          >
            Phone Contact
          </label>
          <input 
            className=' border-2 mt-2 w-full p-2 text-md  placeholder-slate-500 rounded-md'
            type="number" 
            name="number" 
            id="number" 
            placeholder='Enter the phone of your patient'
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label 
            htmlFor="symptoms"
            className='block font-bold  text-md uppercase'
          >
            Symptoms
          </label>
          
          <textarea 
          className=' border-2 mt-2 w-full p-2 text-md placeholder-slate-500 rounded-md'
            name="symptoms" 
            id="symptoms" 
            placeholder='Enter the symptoms of your patient' 
            cols="30" 
            rows="10"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input 
          type="submit" 
          value='Add Patient' 
          className='mt-2 bg-indigo-400 w-full text-center p-2 text-white font-semibold rounded-md cursor-pointer hover:bg-indigo-600 transition-colors'
        />
      </form>
    </div>
  )
}
