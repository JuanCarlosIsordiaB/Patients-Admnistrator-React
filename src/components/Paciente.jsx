import { useGlobalState } from '../context/GlobalState';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const Paciente = ({patient}) => {

  const {deletePatient,  setEditingPatient} = useGlobalState();

  const handleDelete = (id) => {
    //console.log(id);
    deletePatient(id);
    //Tirar Alerta
    toast.error('Patient Deleted', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  
  const handleEdit = () => {
    // lo pone en modo edicion
    setEditingPatient(patient);
  };


  return (
    <div className='mt-5 bg-white shadow-md p-5 mb-2 md:ml-5 rounded-md mx-2'>
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
          <button 
            className='bg-green-500 font-bold px-4 py-2 text-white uppercase rounded-md hover:bg-green-600 transition-all'
            onClick={handleEdit}
          >
            Edit
          </button>
          <button 
            className='bg-red-500 font-bold px-4 py-2 text-white uppercase rounded-md hover:bg-red-600 transition-all'
            onClick={() => handleDelete(patient.id)}
          >
            Delete
          </button>
        </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
      <ToastContainer />
    </div>
  )
}
