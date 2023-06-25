import React from 'react'

// Define the persona type
export interface Persona {
  id: number;
  name: string;
  ethnicity: string;
  career: string;
  height: number;
}

type Props = {
  persona: Persona;
}

const PersonaCard = ({persona}: Props ) => {

  return (
    <>
      {persona && (
        <div className="card">
          <p>Name: {persona.name}</p>
          <p>Ethnicity: {persona.ethnicity}</p>
          <p>Career: {persona.career}</p>
          <p>Height: {persona.height} cm</p>
        </div>
      )}
    </>
  )
}

export default PersonaCard