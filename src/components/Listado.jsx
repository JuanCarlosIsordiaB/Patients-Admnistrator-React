import { Paciente } from './Paciente';
import { useGlobalState } from '../context/GlobalState';

export const Listado = () => {

  const {patients} = useGlobalState();

  return (
    <div className='md:w-1/2 lg:w-3/5'>
      <h2 className='font-bold text-center text-xl mb-5 mt-10 md:mt-0'>List of your <span className='text-indigo-700'>patients</span>.</h2>
      <div>
        {
          patients.map(patient => 
            <Paciente patient={patient} key={patient.id} />  
          )
        }  
      </div>
      
    </div>
    
  )
}
