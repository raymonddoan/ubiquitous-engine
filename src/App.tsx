import { useState } from 'react'

import { getRandomTrait } from './utils/getRandomTrait';

import './App.css'

// Define the persona type
interface Persona {
  id: number;
  name: string;
  ethnicity: string;
  career: string;
  height: number;
}

function App() {
  const [persona, setPersona] = useState({} as Persona)

  const handleOnClick = () => {
    const persona: Persona = {
      id: 1,
      name: `Persona ${1}`,
      ethnicity: getRandomTrait(["Asian", "Black", "Hispanic", "White"]),
      career: getRandomTrait([
        "Software Engineer",
        "Doctor",
        "Teacher",
        "Artist",
      ]),
      height: 100,
    };
    
    setPersona(persona)
  }

  return (
    <>
      <h1>Persona</h1>
      <button onClick={() => handleOnClick()}>
        Generate new persona
      </button>
      <div className="card">
      {persona && (
        <div>
          <h2>Generated Persona</h2>
          <p>Name: {persona.name}</p>
          <p>Ethnicity: {persona.ethnicity}</p>
          <p>Career: {persona.career}</p>
          <p>Height: {persona.height} cm</p>
        </div>
      )}
      </div>
    </>
  )
}

export default App
