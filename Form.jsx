import React, { useState, useEffect } from 'react';
import './Form.css';

export default function Form() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    mensaje: '',
    origen: ''
  });

  // Detectar origen automáticamente
  useEffect(() => {
    const detectedOrigin = document.referrer || window.location.hostname;
    setForm(prev => ({ ...prev, origen: detectedOrigin }));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('https://optimist.cl/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, creado: Date.now() }),
      });

      if (response.ok) {
        console.log('✅ Datos enviados correctamente');
        setForm({ nombre: '', telefono: '', correo: '', mensaje: '', origen: form.origen });
      } else {
        console.error('❌ Error al enviar datos');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    
  
    
    <form onSubmit={handleSubmit} className="form-container">Déja tus datos para una cotización personalizada

      
      {/* Primera fila: nombre y teléfono */}
      <div className="row">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            value={form.telefono}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Segunda fila: correo */}
      <div className="row">
        <div className="form-group full-width">
          <label htmlFor="correo">Correo:</label>
          <input
            id="correo"
            name="correo"
            type="email"
            value={form.correo}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Mensaje */}
      <div className="row">
        <div className="form-group full-width">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Campo oculto para origen */}
      <input type="hidden" name="origen" value={form.origen} />

      <button type="submit" className="submit-btn">Enviar</button>
    </form>
  );
}