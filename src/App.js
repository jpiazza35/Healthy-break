//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './index.css'

//Components
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
 

class App extends Component {

  render() {
    return (
      <div className="container">
       
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;