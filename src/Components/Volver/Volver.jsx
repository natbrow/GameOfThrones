import React from 'react';
import './Volver.css'

const Volver = () => {
  const handleClick = () => {
    window.history.back(); 
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleClick} className='container'>
      <span className='volver'>&#8592;Volver</span> 
    </div>
  );
};

export default Volver;
