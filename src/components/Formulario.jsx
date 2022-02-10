import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente}) {


    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false)

    const idPaciente = function () {
        let idFecha = Date.now().toString()
        let idMath = Math.random().toString(20).substr(2)

        return idMath + idFecha;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return;
        }
        setError(false);

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if (paciente.id) {
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            objetoPaciente.id = idPaciente()
            setPacientes([...pacientes, objetoPaciente]);
        }




        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    };

    useEffect(() => {
        if (Object.keys.length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    return (
        <div className="lg:w-2/5 md:w-1/2 mx-5">
            <h2 className=" text-3xl font-bold text-center">Formulario</h2>
            <p className="text-lg text-center mt-5 mb-10">
                Rellenar el {""}
                <span className="text-indigo-600 font-bold">Formulario</span>
            </p>

            <form onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 mb-10 px-5"
                action="GET">

                {error && <Error>Por favor rellene todos los campos</Error>}

                <div className="mb-5">
                    <label className="block uppercase font-bold mb-1" htmlFor="mascota">
                        {" "}
                        Mascota
                    </label>
                    <input
                        id=""
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="border border-gray-400 w-full rounded-md p-2"
                        type="text"
                        placeholder="Nombre de la mascota" />
                </div>


                <div className="mb-5">
                    <label className="block uppercase font-bold mb-1" htmlFor="propietario">Propietario</label>
                    <input
                        id=""
                        className="border border-gray-400 w-full rounded-md p-2"
                        type="text"
                        placeholder="Propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="block uppercase font-bold mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        id=""
                        className="border border-gray-400 w-full rounded-md p-2"
                        type="email"
                        placeholder="correo@correo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />


                </div>
                <div className="mb-5">
                    <label className="block uppercase font-bold mb-1" htmlFor="alta">
                        Alta
                    </label>
                    <input
                        id=""
                        className="border border-gray-400 text-gray-400 rounded-md w-full p-2"
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="block uppercase font-bold mb-1" htmlFor="sintomas">
                        Síntomas
                    </label>
                    <textarea
                        className="border border-gray-400 w-full rounded-md p-2 "
                        name=""
                        id="sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    ></textarea>
                </div>

                <input
                    type="submit"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                    className="font-bold bg-indigo-600 text-white p-4 uppercase rounded-md hover:bg-indigo-700 transition-all cursor-pointer w-full "
                />
            </form>
        </div>
    );
}

export default Formulario;
