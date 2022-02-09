import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaPacientes from "./components/ListaPacientes";
import { useState, useEffect } from 'react';

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  return (
    <div className="container mt-20 mx-auto">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}></Formulario>
        <ListaPacientes
          setPaciente={setPaciente}
          pacientes={pacientes}
        ></ListaPacientes>
      </div>
    </div>
  )
}

export default App
