import Paciente from './Paciente';
import { useEffect } from 'react';

function ListaPacientes({ setPaciente, pacientes, eliminarPaciente}) {



  return <div className='lg:w-3/5 mx-5 md:h-screen  md:w-1/2'>
    {pacientes && pacientes.length > 0 ? (
      <>
        <h2 className='text-3xl font-black text-center'>Pacientes</h2>
        <p className='text-lg text-center mt-5 mb-10'>Listado y administración de {''}<span className='text-indigo-600'>Pacientes</span>
        </p>

        {useEffect(() => {
          console.log('Nuevo paciente cargado');
        }, [pacientes])}

        
        {pacientes.map(paciente => (
          <Paciente
          eliminarPaciente={eliminarPaciente}
            setPaciente={setPaciente}
            key={paciente.id}
            paciente={paciente}

          />
        ))
        }
      </>
    ) : (
      <>
        <h2 className='text-3xl font-black text-center'>No hay Pacientes</h2>
        <p className='text-lg text-center mt-5 mb-10'>Listado y administración de {''}<span className='text-indigo-600'>Pacientes</span>
        </p>

      </>

    )}

  </div>
}

export default ListaPacientes;
