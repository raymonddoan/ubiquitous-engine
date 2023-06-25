import React, { useState } from 'react'

import './App.css'
import PersonaCard, {Persona} from './components/PersonaCard';

function App() {
  const [persona, setPersona] = useState({} as Persona)

  return (
    <>
      <PersonaCard persona={persona} setPersona={setPersona} />
    </>
  )
}

export default App
