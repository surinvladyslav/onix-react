import React from 'react';

import './index.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <ul className="header-items">
            <li className="header-item">
              <a className="header-link" href="/">Blog</a>
            </li>
            <li className="header-item">
              <a className="header-link" href="/">Press</a>
            </li>
            <li className="header-item">
              <a className="header-link" href="/">Join Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
