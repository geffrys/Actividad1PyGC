import './App.css'
import Formulario from './Formulario'
import Listado from './Lista'
import { useState } from 'react'

function App() {

  const [usuario, setUsuario] = useState({});

  return (
    <>
      <Formulario usuario={usuario} setUsuario={setUsuario}/>
      <br />
      <Listado setUsuario={setUsuario} usuario={usuario}/>
    </>
  )
}

export default App
