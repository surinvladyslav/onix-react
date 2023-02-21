import React from 'react';

import './Brand.css';

export const Brand = ({title, subtitle, src}) => {
  return (
    <div className="brand">
      <img className="brand-image" src={src} alt="brand"/>
      <h5 className="brand-title">{title}</h5>
      <p className="brand-subtitle">{subtitle}</p>
    </div>
  );
};
