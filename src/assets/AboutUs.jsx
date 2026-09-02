import React from 'react';
import CAF from '/media/CAF.png';

export default function AboutUs() {
  return (
    <section style={{ padding: '20px' }}>
      <h2>Sobre Optimist®</h2>
      <p>
        Optimist® spa es una empresa especializada en ofrecer soluciones para el control del calor en espacios abiertos generando las condiciones climáticas ideales para reducir el estrés térmico y mejorar la calidad de vida de las personas.
        El control de la climatización es muy relevante para la protección de los negocios. 
            <img 
              src={CAF} 
              alt="CAF" 
              style={{ width: '200px', height: 'auto', display: 'block', margin: '20px auto' }} 
            />
        Un buen clima mejora la productividad, más producto, mejor servicio lo que se traduce en más ventas. Mejora para la vivienda, comercios, campos agroindustriales, crianza de animales e industrias. 
        Nuestro compromiso es con la eficiencia, calidad y servicio.</p>
     <p>Optimist® spa se distingue por su innovación y tecnología de vanguardia, ofreciendo soluciones personalizadas que se adaptan a las necesidades específicas de cada cliente.
      </p>
    </section>
);
}