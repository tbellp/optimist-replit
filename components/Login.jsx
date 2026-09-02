/*import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://0.0.0.0:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        const data = await response.json();
        // Guardar token en localStorage para mantener sesión
        localStorage.setItem('crm_token', data.token);
        onLogin(data.user); // Envía los datos del usuario al padre
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (err) {
      console.error(err);
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión CRM</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Usuario:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="error-msg">{error}</p>}

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}*/

import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function LoginPopup({ show, handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("https://optimist-crm.YOUR_REPLIT_URL.repl.co/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("crmToken", data.token);
        alert("✅ Login exitoso");
        handleClose();
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (err) {
      alert("Error de conexión");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Log in CRM</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input 
          type="email" 
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button variant="primary" onClick={handleLogin}>Ingresar</Button>
      </Modal.Footer>
    </Modal>
  );
}