// import React from 'react';

export default function CharacterCard({ character }) {
  return (
    <div className=''>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.age}</p>
    </div>
  );
}



