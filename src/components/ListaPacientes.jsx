import React from 'react';
import Paciente from './Paciente';
function ListaPacientes() {
  return <div className='lg:w-3/5 mx-5 md:h-screen md:w-1/2'>
    <div className="text-center">
      <h2 className='font-bold mb-1 text-3xl'>Pacientes</h2>
      <p>Listado y administración de {''}<span className='text-indigo-600'>Pacientes</span></p>
    </div>

      <Paciente></Paciente>
      <Paciente></Paciente>
      <Paciente></Paciente>
      <Paciente></Paciente>
    </div>
}

export default ListaPacientes;
