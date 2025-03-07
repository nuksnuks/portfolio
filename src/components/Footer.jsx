import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__contacts'>
        <h3>Contact</h3>
        <a href="mailto:davidwogelius@gmail.com"><FaEnvelope /> davidwogelius@gmail.com</a>
        <a href="tel:+4552224102"><FaPhone /> +45 52 22 41 02</a>
      </div>
      <div className='footer__socials'>
        <h3>Follow Me</h3>
        <a href='https://www.linkedin.com/in/nukad' target='_blank' rel='noopener noreferrer'><FaLinkedin /> LinkedIn</a>
        <a href='https://github.com/nuksnuks' target='_blank' rel='noopener noreferrer'><FaGithub /> GitHub</a>
      </div>
    </footer>
  )
}

export default Footer