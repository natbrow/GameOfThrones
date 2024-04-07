import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import './TimeLine.css'

export default function Timeline() {
  const [characters, setCharacters] = useState([]);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(data => {

        const charactersWithAge = data.filter(character => character.age !== undefined && character.age !== null);

        const sortedCharacters = [...charactersWithAge];
        if (ascendingOrder) {
          sortedCharacters.sort((a, b) => a.age - b.age);
        } else {
          sortedCharacters.sort((a, b) => b.age - a.age);
        }
        setCharacters(sortedCharacters);
      })

  }, [ascendingOrder]); 

  const toggleOrder = () => {
    setAscendingOrder(!ascendingOrder);
  };

    return (
    <div className='cronologia'>
      <div className='linea-vertical'></div>
      <div className='container'>
        <button onClick={toggleOrder} className='elipse'>
          O
        </button>
        <div className='timeline'>
          {characters.map(character => (
            <div className='character-wrapper'>
              <CharacterCard key={character.id} character={character} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
