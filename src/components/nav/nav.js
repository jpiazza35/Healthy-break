import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Design<span>Labs</span></li>
          </ul>
          <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services-link" >Servicios</a></li>
              <li>< a href="#contact">Contacto</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;