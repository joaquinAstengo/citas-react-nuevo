import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaPacientes from "./components/ListaPacientes";
import { useState, useEffect } from 'react';

function App() {
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(()=>{
    const obtenerLS = () => {
      const pacienteLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacienteLS)
    }
    obtenerLS();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes)) 
  }, [pacientes])

  return (
    <div className="container mt-20 mx-auto">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario
          paciente={paciente}
          pacientes={pacientes}
          setPaciente={setPaciente}
          setPacientes={setPacientes}></Formulario>
        <ListaPacientes
          pacientes={pacientes}
          eliminarPaciente={eliminarPaciente}
          setPaciente={setPaciente}
        ></ListaPacientes>
      </div>
    </div>
  )
}

export default App
