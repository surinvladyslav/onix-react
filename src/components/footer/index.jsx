import React from 'react';

import './index.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <h4 className="footer-title">contact</h4>
          <p className="footer-subtitle">We're focused on building brands and a better future.</p>
          <p className="footer-subtitle">If you'd like to partner with us, we're</p>
          <div className="footer-items-wrapper">
            <ul className="footer-items">
              <li className="footer-item">
                <a className="footer-link" href="/">Open Spaces</a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="/">GIR</a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="/">Letterfolk</a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="/">Yield</a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="/">Poketo</a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="/">Equal Parts</a>
              </li>
            </ul>
            <ul className="footer-items">
              <li className="footer-item">
                <a className="footer-link" href="/">Careers</a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="/">Press</a>
              </li>
            </ul>
            <ul className="footer-items">
              <li className="footer-item">
                <a className="footer-link" href="/">Instagram</a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="/">Twitter</a>
              </li>
            </ul>
            <ul className="footer-items">
              <li className="footer-item">
                <a className="footer-link" href="/">228 Park Ave S.</a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="/">New York, NY 10003</a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="/">acquisitions@patternbrands.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom-title">© 2023 Onix Academy</p>
        </div>
      </div>
    </footer>
  );
};
