import React, { Component } from 'react';
import Nav from "../nav/nav";
import './header.css';


class Header extends Component {
  render() {
    return (
     <div>
      <header>

        <Nav/>
         <div className="head">
          
            <h1>Creadores de bienestar< br/></h1>
            <div>
              <p>Diseñamos tu Energy Corner, Espacios saludables en la Oficina!</p>
              <div><a className="contact" href="#">Contactanos</a>
            </div>
            </div>
        </div>
       
        </header>
    </div>
    );
  }
}

export default Header;
