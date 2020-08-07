import React from 'react';
import '../../index.css';
import '../main/main.css';
import Aboutitems from './aboutitems';


function About (props){

  const About_details = [
    'Nuestro objetivo','es que la empresa se comprometa de manera activa en el cuidado de sus empleados y en el fomento de sus hábitos saludables', 
    'desarrollando políticas activas de cuidado de la salud de sus trabajadores.',
'Nuestra misión:', '“Creadores de bienestar”','Diseñamos tu Energy Corner, Espacios saludables en la oficina'
  ];


  return (
      <div>
        <a name="about"></a>
       <section className="about-container">
        <h2>{props.title}</h2>
         <div className="about-details">
      <p>{About_details}</p> {/* //hacer una manipulacion del array About_details para poner negritas en algunas palabras */}
         </div>
         <div className="containerAbout-items">
        

         </div>
       
        </section> 
      </div>
  )
}

export default About;