/*
//src/components/articles.js
const articles = {
  particular: [
      title: "Cómo mantener tu casa fresca en verano",
      content: "Los sistemas de nebulización ayudan a reducir el calor en terrazas y patios."
      
      title: "Ahorro energético con climatización inteligente",
      content: "Descubre cómo Optimist® puede reducir tu consumo eléctrico."
  ],
  industrial: [
      title: "Climatización en galpones y bodegas",
      content: "Mejora la seguridad laboral con sistemas de enfriamiento ambiental.
      
      title: "Reducción del riesgo de ignición",
      content: "Optimist® disminuye la concentración de polvo inflamable."
    
  ],
  agricola: [
      title: "Protección de cultivos con nebulización",
      content: "Mantén el microclima ideal para tus plantaciones."

      title: "Bienestar animal",
      content: "Reduce el estrés térmico en la crianza de aves y ganado."
  ],
  comercial: [
      title: "Terrazas y restaurantes más cómodos",
      content: "Optimist® mejora la experiencia del cliente en exteriores."
*/
import imgAI from "./img/IMG_AIcom1.png";
import imgAgro from "./img/IMG_Agro1.png";
import imgComercial1 from "./img/IMG_3264.jpeg";
import imgComercial2 from "./img/IMG_3484.jpeg";
import imgB2B1 from "./img/IMG_4450.jpeg";
import imgIndust1 from "./img/IMG_4781.jpeg";
import imgIndust2 from "./img/IMG_4097.png";

const articles = {
  inicio: [
    {
      title: "Bienvenido a Optimist®",
      content: "Descubre cómo el enfriamiento evaporativo puede mejorar tu negocio y reducir el estrés térmico en espacios abiertos.",
      slug: "bienvenido-optimist",
      image: imgAI,
      excerpt: "Optimist® limpia el aire gracias a micro partículas evaporativas, generando un ambiente más fresco.",
      date: "2025-08-20",
      link: "/blog/bienvenido-optimist"
    },
    {
      title: "Centros comerciales y retail",
      content: "Incrementa la permanencia de tus clientes y mejora las ventas con sistemas de microaspersión Optimist®.",
      slug: "centros-comerciales-retail",
      image: imgComercial1,
      excerpt: "Optimist® crea ambientes confortables en centros comerciales y tiendas.",
      date: "2025-08-24",
      link: "/blog/centros-comerciales-retail"
    }
  ],
  agro: [
    {
      title: "Protección agrícola",
      content: "Optimist® mejora la productividad en invernaderos y packings, manteniendo la humedad y evitando estrés térmico en cultivos.",
      slug: "proteccion-agricola",
      image: imgAgro,
      excerpt: "Mantén tus cultivos frescos y saludables con Optimist®.",
      date: "2025-08-22",
      link: "/blog/proteccion-agricola"
    }
  ],
  comercial: [
    {
      title: "Más clientes en verano",
      content: "Climatiza tus espacios comerciales y atrae más clientes asegurando una experiencia cómoda en días calurosos.",
      slug: "mas-clientes-verano",
      image: imgComercial1,
      excerpt: "Aumenta la permanencia de tus clientes con un ambiente fresco.",
      date: "2025-08-23",
      link: "/blog/mas-clientes-verano"
    },
    {   title: "Ahorro energético con climatización inteligente",
        content: "Optimist® puede reducir tu consumo eléctrico mediante sistemas de microaspersión eficientes y automatizados. \n\n No será necesario mantener encendido el sistema HVAC mientras Optimist®  logre enfriar los 23°C",
        slug: "ahorro-energetico",
        image: imgComercial2,
        excerpt: "Reduce el gasto energético de tu negocio con soluciones Optimist® inteligentes.",
        date: "2025-08-21",
        link: "/blog/ahorro-energetico"
    }
  ],
  b2b: [
    {
      title: "Clima ideal para tu inversión",
      content: "Reduce el estrés térmico en animales y mejora la productividad en criaderos y lecherías con Optimist®.",
      slug: "clima-ideal-b2b",
      image: imgB2B1,
      excerpt: "Optimist® protege tu inversión asegurando condiciones óptimas para tus animales de cría.",
      date: "2025-08-25",
      link: "/blog/clima-ideal-b2b"
    }
  ],
  indust: [
    {
      title: "Eficiencia energética industrial",
      content: "Optimist® ayuda al precooling de equipos y evita el sobreconsumo energético en procesos industriales.",
      slug: "eficiencia-industrial",
      image: imgIndust1,
      excerpt: "Reduce el consumo de energía y mejora la eficiencia en tu industria con Optimist®.",
      date: "2025-08-26",
      link: "/blog/eficiencia-industrial"
    },
    {
      title: "Ahorro energético con climatización inteligente",
      content: "Descubre cómo Optimist® puede reducir el consumo eléctrico en procesos industriales y comerciales.",
      slug: "ahorro-energetico-industrial",
      image: imgIndust2,
      excerpt: "Optimist® ofrece soluciones inteligentes de climatización para la industria.",
      date: "2025-08-27",
      link: "/blog/ahorro-energetico-industrial"
    }
  ]
};

export default articles;