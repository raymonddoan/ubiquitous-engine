import { useState } from 'react'

import PersonaCard, {Persona} from './components/molecules/PersonaCard';
import PersonaGroup from './components/organisms/PersonaGroup';
import PersonaGenerator from './components/molecules/PersonaGenerator';

import './App.css';

function App() {
  const [persona, setPersona] = useState({} as Persona)
  const [personaGroup, setPersonaGroup] = useState([] as Persona[])

  return (
    <>
      <div className='app'>
        <div className='left'>
          <h1>Persona</h1>
          <PersonaGenerator setPersona={setPersona} setPersonaGroup={setPersonaGroup}/>
          <h2>Generated Persona</h2>
          <PersonaCard persona={persona} />
        </div>
        <div className='right'>
          <PersonaGroup personaGroup={personaGroup}/>
        </div>
      </div>
    </>
  )
}

export default App
