import ListaPacientes from "./ListaPacientes";

function Paciente({ paciente, setPaciente, eliminarPaciente }) {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Desea eliminar este paciente?');
    if (respuesta === true) {
      eliminarPaciente(id)
    }
  }

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


        <button
          type="button"
          className="font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg uppercase py-2 px-10 mr-10"
          onClick={() => setPaciente(paciente)}
        >Editar</button>
        <button
          type="button"
          className="font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg uppercase py-2 px-10 mr-10"
          onClick={handleEliminar}
        >Eliminar</button>
      </div>
    </>
  )
}

export default Paciente;
