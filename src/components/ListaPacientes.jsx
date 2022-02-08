import Paciente from './Paciente';
import {useState} from 'react';

function ListaPacientes({pacientes}) {
  return <div className='lg:w-3/5 mx-5 md:h-screen  md:w-1/2'>
    <div className="text-center">
      <h2 className='text-3xl font-bold text-center'>Pacientes</h2>
      <p className='text-lg text-center mt-5 mb-10'>Listado y administración de {''}<span className='text-indigo-600'>Pacientes</span></p>
    </div>

    {pacientes.map(paciente => (
      <Paciente 
      key={paciente.id}
      paciente={paciente} />
      
    ))}
    </div>
}

export default ListaPacientes;
