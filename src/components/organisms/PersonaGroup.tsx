import React from 'react'

import PersonaCard, { Persona } from '../molecules/PersonaCard';

type Props = {
  personaGroup: Persona[];
}

const PersonaGroup = ({personaGroup}: Props) => {
  return (
    <>
      <div>PersonaGroup</div>
      {personaGroup && personaGroup.map((persona) => (
        <PersonaCard persona={persona} />
      ))}
    </>
  )
}

export default PersonaGroup