import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = ({ theme, toggleTheme }) => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__section'>
          <h3>Contact</h3>
          <a href="mailto:davidwogelius@gmail.com"><FaEnvelope /> davidwogelius@gmail.com</a>
          <a href="tel:+4552224102"><FaPhone /> +45 52 22 41 02</a>
        </div>
        <div className='footer__section'>
          <h3>Follow Me</h3>
          <a href='https://www.linkedin.com/in/nukad' target='_blank' rel='noopener noreferrer'><FaLinkedin /> LinkedIn</a>
          <a href='https://github.com/nuksnuks' target='_blank' rel='noopener noreferrer'><FaGithub /> GitHub</a>      
        </div>
        <div className='footer__section'>
          <h3>Dark mode</h3>
          <label className="switch">
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className='footer__bottom'>
        <p>© {new Date().getFullYear()} David Wogelius. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;