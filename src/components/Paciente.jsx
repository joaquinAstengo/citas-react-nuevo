import {useState} from 'react';

function Paciente({paciente}) {

  const {nombre, propietario, email, fecha, sintomas} = paciente;

  return (
          <>
      <div className='rounded-md shadow-md bg-white my-4 w-full p-5'>
      <p className='font-bold uppercase my-5'>Mascota: {''}
      <span className="normal-case font-normal">{paciente.nombre}</span>
      </p>
      <p className='font-bold my-5 uppercase'>Propietario: {''}
      <span className="normal-case font-normal">{paciente.propietario}</span>
      </p>
      <p className='font-bold my-5 uppercase'>Email: {''}
      <span className="normal-case font-normal">{paciente.email}</span>
      </p>
      <p className='font-bold my-5  uppercase'>Alta: {''}
      <span className="normal-case font-normal">{paciente.fecha}</span>
      </p>
      <p className='font-bold my-5  uppercase'>Síntomas: {''}
        <span className="normal-case font-normal">{paciente.sintomas}</span>
      </p>
    </div>
    </>
    )
}

export default Paciente;
