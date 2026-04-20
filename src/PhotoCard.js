import React, { useState } from 'react';
import './PhotoCard.css';

export default function PhotoCard({ memory }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        
        {/* Cara Frontal */}
        <div className="card-front">
          <img src={memory.imageUrl} alt={memory.date} />
          <div className="card-front-title">{memory.date}</div>
        </div>

        {/* Cara Trasera (Mensaje) */}
        <div className="card-back">
          <h3 className="back-title">{memory.date}</h3>
          <p className="back-message">{memory.message}</p>
        </div>

      </div>
    </div>
  );
}