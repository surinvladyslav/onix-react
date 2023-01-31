import React from 'react';

import './index.css';

export const Brand = ({title, subtitle, src}) => {
  return (
    <div className="brand">
      <img className="brand-image" src={require(`./assets/${src}`)} alt=""/>
      <h5 className="brand-title">{title}</h5>
      <p className="brand-subtitle">{subtitle}</p>
    </div>
  );
};