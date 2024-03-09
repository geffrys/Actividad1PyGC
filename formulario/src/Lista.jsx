import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import './Listado.css'


function Listado({usuario,setUsuario}) {

    const eliminarCliente = (id) => {
        const confirmAction = window.confirm('¿Estás seguro de que deseas realizar esta acción?');
        if (!confirmAction) {
            return;
        }
        axios.delete('http://localhost:5000/api/v1/cliente/' + id)
            .then(response => {
                alert('Cliente eliminado con exito ' + response.data)
                setFlag(!flag)
            })
            .catch(error => {
                alert('Error al eliminar el cliente, detalle: ' + error)
            })

    }

    const actualizarCliente = (usuario) => {
        setUsuario(usuario);
    }

    const [flag, setFlag] = useState(false);

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/cliente')
            .then(response => {
                setClientes(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [flag,usuario])

    return (
        <>
            <div className="contenedorTablaDatos">
                <h1>Listado</h1>
                <table className="tablaDatos">
                    <thead className="encabezadoTablaDatos">
                        <tr>
                            <th>Id</th>
                            <th>Cédula</th>
                            <th>Primer Nombre</th>
                            <th>Segundo Nombre</th>
                            <th>Sexo</th>
                            <th>Edad</th>
                            <th>Email</th>
                            <th>Dirección</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody className="cuerpoTablaDatos">
                        {clientes.map(cliente => {
                            return (
                                <tr key={cliente.id}>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.cedula}</td>
                                    <td>{cliente.primerNombre}</td>
                                    <td>{cliente.segundoNombre}</td>
                                    <td>{cliente.sexo}</td>
                                    <td>{cliente.edad}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>
                                        <button onClick={()=> actualizarCliente(cliente)}>Editar</button>
                                        <button onClick={() => eliminarCliente(cliente.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>

        </>
    )
}

export default Listado;