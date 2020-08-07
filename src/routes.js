//Dependencies
import React from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

//Componentes
import App from './App'
import Main from './components/main/main';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Gallery from './components/gallery/gallery';
import Services from './components/services/services'



const AppRoutes = () => (
    
    <Switch>
        <Route exact path="/" component={ App } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/gallery" component={ Gallery } />
        <Route exact path="/servicio1" component={ Services }  />
        <Route exact path="/contact" component={ Contact }  />
        
   </Switch>

)

export default AppRoutes;
