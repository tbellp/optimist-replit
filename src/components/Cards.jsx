// components/Cards.jsx
import React from 'react';
import './Cards.css'; // puedes estilizarlo aparte

export default function Cards({ vista }) {
  const data = {
    inicio: [
      { title: "¿Cómo funciona Optimist®?", text: "Optimist® enfría mediante microaspersión de gotitas de agua, aumentando la superficie de agua en contacto con el aire,  facilitando su evaporación y con ello reduciendo la energía calórica del aire." },
      { title: "Ventajas", text: "Silencioso, versátil eficiente y bajo consumo energético. Aire limpio libre de polvo y gases como el humo del tabaco." }
    ],
    agro: [
      { title: "Cultivos protegidos", text: "Reduce el estrés térmico en invernaderos." },
      { title: "Fácil instalación", text: "Una buena coordinación nos permite instalar en un par de di. Sin obras invasivas." },
      { title: "Rentabilidad", text: "Reduce bajas por calor en crianza animal." },
      { title: "Confianza", text: "Nuestra solución se ha implementado en empresas agroindustriales globales." }
    ],
    comercial: [
      { title: "Más clientes", text: "Ambientes frescos aumentan las ventas." },
      { title: "Estética", text: "Sistemas integrados sin invadir el espacio." }
    ],
    indust: [
      { title: "Mejora de la calidad del aire respirado", text: "Control de polvo y partículas contaminantes. Reduce el número de partículas y ciertos gases irritantes." },
      { title: "Productividad", text: "Ambientes con menos polvo, gases irritantes, más fresco y agradable." }
    ],
    contacto: [
      { title: "Hablemos", text: "Cuéntanos tus necesidades." }
    ]
  };

  if (!data[vista]) return null;

  return (
    <div className="cards-container">
      {data[vista].map((card, index) => (
        <div className="card" key={index}>
          <h4>{card.title}</h4>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
}