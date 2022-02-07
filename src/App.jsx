import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaPacientes from "./components/ListaPacientes";
import {useState, useEffect} from 'react';

function App() {

  const [pacientes, setPacientes] = useState([])

  return (
    <div className="container mt-20 mx-auto">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}></Formulario>
        <ListaPacientes></ListaPacientes>
      </div>
    </div>
  )
}

export default App
