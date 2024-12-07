// src/components/Card.js
import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div style={{ padding: '20px', background: '#f1f1f1', borderRadius: '8px', textAlign: 'center' }}>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;