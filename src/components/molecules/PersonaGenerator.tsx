import React from "react";

import { getRandomTrait } from "../../utils/getRandomTrait";
import { Persona } from "./PersonaCard";

type Props = {
  setPersona: React.Dispatch<React.SetStateAction<Persona>>;
  setPersonaGroup: React.Dispatch<React.SetStateAction<Persona[]>>;
};

const PersonaGenerator = ({ setPersona, setPersonaGroup}: Props) => {
  const personaGroup: Persona[] = [];

  const handleOnClick = () => {
    for (let i = 1; i <= 10; i++) {
      const generatedPersona: Persona = {
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
      personaGroup.push(generatedPersona);
    }

    setPersona(personaGroup[0]);
    setPersonaGroup(personaGroup);
  };

  return (
    <>
      <div>PersonaGenerator</div>
      <button onClick={() => handleOnClick()}>Generate new persona</button>
    </>
  );
};

export default PersonaGenerator;
