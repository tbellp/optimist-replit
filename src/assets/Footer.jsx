import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type) => {
    let content;
    switch (type) {
      case "politica":
        content = (
          <div>
            <h2>Política de Privacidad</h2>
            <p>Última actualización: 4 de agosto de 2025

            En Optimist spa®, respetamos y protegemos tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información.

            1. Información que recopilamos

            Recopilamos información personal cuando tú nos la proporcionas voluntariamente, por ejemplo: nombre, correo electrónico y teléfono.

            2. Uso de la información

            Utilizamos tu información solo para:
              •	Responder consultas y solicitudes
              •	Enviar cotizaciones o información técnica
              •	Mejorar nuestros servicios y comunicaciones

            3. Protección de datos

            Implementamos medidas de seguridad administrativas y técnicas para proteger tus datos personales.

            4. Compartir información

            No compartimos tus datos con terceros, excepto si la ley lo exige o si es necesario para la prestación de un servicio específico solicitado por ti.

            5. Tus derechos

            Puedes solicitar acceso, corrección o eliminación de tus datos personales escribiéndonos a nuestro correo de contacto.</p>
          </div>
        );
        break;
      case "terminos":
        content = (
          <div>
            <h2>Términos y Condiciones</h2>
            <p>Última actualización: 4 de agosto de 2025

              Bienvenido al sitio web de Optimist spa®. Al acceder y utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones:
                1.	Uso del sitio: El contenido de este sitio es informativo. No se permite el uso indebido del sitio ni de sus recursos.
                2.	Propiedad intelectual: Todos los derechos sobre marcas, textos, imágenes, y diseños presentes en este sitio pertenecen a Optimist spa® y están protegidos por la ley.
                3.	Precios y productos: La información sobre productos, servicios o precios está sujeta a cambios sin previo aviso.
                4.	Enlaces externos: Este sitio puede contener enlaces a sitios de terceros. Optimist spa® no se responsabiliza por el contenido ni políticas de dichos sitios.
                5.	Modificaciones: Nos reservamos el derecho a modificar estos términos en cualquier momento. El uso continuo del sitio implica la aceptación de dichas modificaciones.
</p>
          </div>
        );
        break;
      case "contacto":
        content = (
          <div>
            <h2>Contacto</h2>
            <p>Escríbenos a info@optimist.cl o completa nuestro formulario en la página de contacto.</p>
          </div>
        );
        break;
      default:
        content = null;
    }
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <p>
            &copy; 2025 Optimist<sup>&reg;</sup>. Todos los derechos reservados.
          </p>
          <nav className="footer-links">
            <button onClick={() => openModal("politica")} className="link-button">Política de Privacidad</button>
            <button onClick={() => openModal("terminos")} className="link-button">Términos y Condiciones</button>
            <button onClick={() => openModal("contacto")} className="link-button">Contacto</button>
          </nav>
        </div>
      </footer>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✖</button>
            {modalContent}
          </div>
        </div>
      )}
    </>
  );
}