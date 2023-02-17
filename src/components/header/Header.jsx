import React from 'react';

import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <ul className="header-items">
            <li className="header-item">
              <a className="header-link" target="_blank" rel="noreferrer" href="https://github.com/surinvladyslav/onix-react-test-task" >GitHub</a>
            </li>
            <li className="header-item">
              <a className="header-link" target="_blank" rel="noreferrer" href="https://www.figma.com/file/Oba2QZkVj9iECHjdmvXauB/Untitled?node-id=0%3A1&t=uOqHGe25giFDqmmi-1" >Figma</a>
            </li>
            <li className="header-item">
              <a className="header-link" target="_blank" rel="noreferrer" href="https://onix.academy/">Onix Academy</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
