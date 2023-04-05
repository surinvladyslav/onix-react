import React, { useContext } from 'react';

import { BrandContext } from '../../contexts/brandContext';
import { actions } from '../../reducers/brandReducer';

import './Header.css';

function Header() {
  const { theme, dispatch } = useContext(BrandContext);
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <ul className="header-items">
            <li className="header-item">
              <a
                className="header-link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/surinvladyslav/onix-react-test-task"
              >
                GitHub
              </a>
            </li>
            <li className="header-item">
              <a
                className="header-link"
                target="_blank"
                rel="noreferrer"
                href="https://www.figma.com/file/Oba2QZkVj9iECHjdmvXauB/Untitled?node-id=0%3A1&t=uOqHGe25giFDqmmi-1"
              >
                Figma
              </a>
            </li>
            <li className="header-item">
              <a className="header-link" target="_blank" rel="noreferrer" href="https://onix.academy/">Onix Academy</a>
            </li>
          </ul>
          <button
            type="button"
            className="header-button"
            onClick={() => dispatch({ type: actions.THEME })}
          >
            {theme ? 'light' : 'dark'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
