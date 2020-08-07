import React from 'react'
import {Link} from 'react-router-dom';
import IslaVerde from './islaverde/islaVerde';
import ReunionEmpresariales from './reunionEmpresariales/reunionEmpresariales';
import HomeOffice from './homeoffice/homeOffice';

const Services = ({title, icon, description }) => {

    return (
   <div className="container">
       <a name="services-link"></a>
        <div className='services'>
          {/* <div className="service-one"> */}
           
            <IslaVerde description="Te ofrecemos generar un espacio de conciencia dentro de tu empresa,
                                     nosotros nos encargamos de todo"/>
            <HomeOffice />
            <ReunionEmpresariales  description="Te ofrecemos bandejas personalizadas para que estos momentos de reuniones estén super energético
                                                la misma consta de productos premium como frutos secos, almendras, nueces, mix energy, cereales, jugos de fruta."/>
            
            {/* <h2 className="service-title">{title}</h2>    
                <p className="service-icon">
                  <i className={icon}></i>
                </p>
                <p className="description">
                  {description}
                  <Link to="/servicio1">ver mas..</Link>
        
                </p> */}
         {/* </div>                 */} 
        </div>
  </div>
    )
};

export default Services;
