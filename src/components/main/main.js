import React, { Component } from 'react';
import Form from "../form/form";
import About from "../about/about";
import Services from '../services/services';
import './main.css';
import { Link } from 'react-router-dom';
import Contact from '../contact/contact';
import Aboutitems from '../about/aboutitems';


const Main = () => {
  
  const about_detail =['Somos un team joven buscando talentos']
    return (
      <main>
       
        <About className="about" title = "Energy Break"  />
        <Aboutitems />
        <div className="services-link">
          {/* <Services  title="Isla Verde" icon="far fa-calendar-alt fa-2x" description="Te ofrecemos generar un espacio de conciencia dentro de tu empresa, nosotros nos encargamos de todo" />
          <Services  title="Reuniones Semanales" icon="far fa-calendar-alt fa-2x" description="bandejas personalizadas para que estos momentos de reuniones estén super energético la misma consta de productos premium como frutos secos, almendras, nueces, mix energy, cereales, jugos de fruta." />
          <Services  title="Consultoria" icon="far fa-calendar-alt fa-2x" description="Consultoria a empresas" /> */}
          <Services />
        </div>


        
        <div className="gallery">
         <div className="gallery-item-one"></div>
         <div className="gallery-item-two"></div>
         <div className="gallery-item-three"></div>
         <div className="gallery-item-four"></div>
         <div className="gallery-item-five"></div>
         <div className="gallery-item-six"></div>
         
        </div>

        <section>
          
            <h2>Nuestra mission</h2>
            <div>
              <p>Integer sit amet venenatis erat. Cras elementum tortor odio, sit amet euismod nunc cursus ut. Donec sollicitudin orci sed enim volutpat, volutpat rutrum magna semper. Fusce leo lacus, pulvinar sit amet dignissim in, consectetur eget nulla. Etiam ac turpis augue. Sed tincidunt pulvinar tincidunt. Integer ac blandit magna. Nulla dapibus convallis luctus. </p>
              <p>Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis sem fringilla, tincidunt nisi non, congue libero. Etiam cursus nulla quis sapien varius, eget accumsan augue mattis. Cras accumsan sapien nulla, eu eleifend odio tempus sit amet. Suspendisse gravida hendrerit sapien, ut molestie mi pellentesque eget. Aliquam eleifend velit vel libero elementum, vitae consectetur nisl sollicitudin. Suspendisse volutpat fringilla vehicula.</p>
              </div>
        </section>

        {/* // <Contact /> */}   
        <section>
            <h2>Contact Us</h2>
            <Form />
          
        </section>
 
       
      </main>
    );
  }


export default Main;