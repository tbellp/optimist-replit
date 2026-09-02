// Importar imágenes desde la carpeta media
import AboutUs from './assets/AboutUs';

import imgInicio1 from './media/resta/IMG_4962.jpeg';

//import imgInicio2 from './media/Pulverizado.gif';
import imgInicio2 from './media/resta/Lorenza.gif';

import imgInicio3 from './media/resta/IMG_3711.jpeg';

import imgAgro1 from './media/agro/IMG_3438.jpeg';
import imgAgro2 from './media/agro/IMG_4949.jpeg';
import imgAgro3 from './media/agro/IMG_3486.jpeg';

import imgB2B1 from './media/agro/IMG_3498.jpeg';
import imgB2B2 from './media/agro/IMG_4963.jpeg';
import imgB2B3 from './media/agro/IMG_3490.jpeg';

import imgComercial1 from './media/comercial/IMG_3264.jpeg';
import imgComercial2 from './media/comercial/IMG_3713.jpeg';
import imgComercial3 from './media/comercial/IMG_4778-C.png';

import imgIndus1 from './media/industria/IMG_4782.jpeg';
import imgIndus2 from './media/industria/IMG_4781.jpeg';
import imgIndus3 from './media/industria/IMG_3484.jpeg';

import imgContacto1 from './img/Frase1.png';

import { useEffect, useState } from 'react';
import NavbarEx from './components/NavbarEx';
import CarouselDinamic from './components/CarouselDinamic';

import Cards from './components/Cards';
import Testimonials from "./assets/Testimonials";

import Blog from "./blog/Blog";
// agregado |
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleDetail from "./blog/ArticleDetail"; // nuevo componente




export default function App() {
  const [vista, setVista] = useState('inicio');

  // Discriminación por origen (referer)
  useEffect(() => {
    const referrer = document.referrer.toLowerCase();

    if (referrer.includes("linkedin")) {
      setVista("b2b");
    } else if (referrer.includes("agro") || referrer.includes("agrícola")) {
      setVista("agro");
    } else {
      setVista("inicio");
    }
  }, []);

  const slidesData = {
    inicio: [
      {
        img: imgInicio1,
        alt: 'Foto 1',
        title: 'Enfría el medioambiente',
        description: 'Atomizando micro partículas de agua en el medioambiente aumenta la superficie de contacto con el aire evaporándose con mayor facilidad.'
      },
      {
        img: imgInicio2,
        alt: 'Foto 2',
        title: 'Aire más limpio y fresco',
        description: 'Las micro gotitas de agua son absorvidas por partículas en suspensión y por gravedad limpia el aire.'
      },
      {
        img: imgInicio3,
        alt: 'Foto 3',
        title: 'Sombrillas con atomizadores',
        description: 'Sistema versátil y silencioso que enfría el ambiente y mantiene el entorno libre de insectos voladores.'
      }
    ],
    agro: [
      {
        img: imgAgro1,
        alt: 'Agro 1',
        title: 'Soluciones para el Agro',
        description: 'Optimist® para enfriar invernaderos, packings y espacios abiertos.'
      },
      {
        img: imgAgro2,
        alt: 'Agro 2',
        title: 'Ambiente más limpio, menos enfermedades',
        description: 'Optimist® ahuyenta insectos, mantiene limpio el aire de patógenos.'
      },
      {
        img: imgAgro3,
        alt: 'Agro 3',
        title: 'Asegura tu producción bash',
        description: 'Mantén la humedad para proteger tu inversión del calor de las altas temperaturas que afectan tu producto.'
      }
    ],
    comercial: [
      {
        img: imgComercial1,
        alt: 'Comercial 1',
        title: 'No dejes que el calor reduzca tus ventas',
        description: 'Perfecto para climatizar terrazas, restaurantes y pasillos, azoteas y estacionamientos.'
      },
      {
        img: imgComercial2,
        alt: 'Comercial 2',
        title: 'Sal a difrutar aunque sea verano',
        description: 'Disfruta el partido en el estadio, entrena en el gimnasio usa la cancha; Optimist® la enfría.'
      },
      {
        img: imgComercial3,
        alt: 'Comercial 3',
        title: 'Verdulerías, Florerías y Pescaderías',
        description: '¿Ya calculaste cuánto son las mermas que producen los días calirosos? Mantener las propiedades organolépticas de los alimentos es nuestro desafío.'
      }
    ],
    b2b: [
      {
        img: imgB2B1,
        alt: 'B2B 1',
        title: 'Cuida tu inversión del calor',
        description: 'Genera climas especiales en criaderos y lecherías que te ayudará a mitigar el stress en tus animales.'
      },
      {
        img: imgB2B2,
        alt: 'B2B 2',
        title: 'Mejor clima aumenta la productividad',
        description: 'Ingeniamos la mejor solución ya que integramos las últimas tecnologías.'
      },
      {
        img: imgB2B3,
        alt: 'B2B 3',
        title: 'Una mayor preocupación por tu inversión',
        description: 'Para ganar carreras hay que invertir en tu activo, con Optimist® podrás alcanzar el triunfo.'
      }
    ],
    indust: [
      {
        img: imgIndus1,
        alt: 'Industrial 1',
        title: 'Reduce los efectos colaterales del reciclaje',
        description: 'Recuperar productos debe cumplir normas que cuidan el medio ambiente.'
      },
      {
        img: imgIndus2,
        alt: 'Industrial 2',
        title: 'Variedad de aplicaciones',
        description: 'El control de la humedad ambiental permite el control de contaminantes y partículas corrosivas.'
      },
      {
        img: imgIndus3,
        alt: 'Industrial 3',
        title: 'Precooling de equipos',
        description: '¿Estás buscando eficiencia energética en tu empresa? Este es el lugar para consultar en qué podemos ayudar.'
      }
    ],
    contacto: [
      {
        img: imgContacto1,
        alt: 'Contacto 1',
        title: 'Contáctanos',
        description: 'Estamos listos para ayudarte a implementar Optimist® en tu negocio.'
      }
    ]
  };

  return (
    <>
    <Router>
      <NavbarEx onSelect={setVista} />
      <CarouselDinamic slides={slidesData[vista]} />

      <Cards vista={vista} />
    
      <main className="p-3">
        {vista === 'inicio' && <h2>Testimonios</h2>}
        {vista === 'aboutus' && <AboutUs />}
        {vista === 'agro' && <h2>Más protección con Optimist®</h2>}
        {vista === 'b2b' && <h2>Reduce el calor y mejora tu ROI</h2>}
        {vista === 'comercial' && <h2>Qué el calor no afecte tus ingresos</h2>}
        {vista === 'indust' && <h2>Protege a tu gente</h2>}
        {vista === 'contacto' && <h2>Contáctanos</h2>}
        

      </main>
     {/* <div>Testimonios para la vista: {vista}</div> //test si pasa la category*/}
    
      <Testimonials category={vista} />
      <Blog origen={vista} />
      
      
        <Routes>
          <Route path="/blog/:slug" element={<ArticleDetail />} />
          <Route path="/blog" element={<Blog origen="inicio" />} />
        </Routes>
      </Router>
      
    </>
    
  );
}