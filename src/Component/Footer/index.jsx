import React from 'react'
import './style.css'


const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">E-BOOK STORE</a>

      <ul className="permalinks">
        
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>


      <div className="footer__desclaimer">
        <small>2000 - @copyright Hitesh Prajapati</small>
      </div>

    </footer>
  )       
}

export default Footer
