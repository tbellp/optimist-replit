import { useState } from "react";
import { api } from "../api/client";

export default function Login({ onLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await api("/api/auth/login", { method: "POST", body: { email, password }, auth: false });
      onLogged(token);
    } catch (e) { setErr(e.message); }
  };

  return (
    <div className="container py-5" style={{ maxWidth: 420 }}>
      <h3>CRM – Iniciar sesión</h3>
      <form onSubmit={submit} className="mt-3">
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input className="form-control" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        {err && <div className="alert alert-danger">{err}</div>}
        <button className="btn btn-dark w-100">Entrar</button>
      </form>
    </div>
  );
}