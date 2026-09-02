import { useEffect, useState } from "react";
import { api } from "../api/client";

export default function LeadDetail({ id, onBack }) {
  const [lead, setLead] = useState(null);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");

  const load = async () => {
    const data = await api(`/api/leads/${id}`);
    setLead(data);
    setStatus(data.status);
  };

  useEffect(() => { load(); }, [id]);

  const addNote = async (e) => {
    e.preventDefault();
    if (!note.trim()) return;
    await api(`/api/leads/${id}/notes`, { method:"POST", body:{ body: note } });
    setNote("");
    load();
  };

  const updateStatus = async () => {
    await api(`/api/leads/${id}`, { method:"PATCH", body:{ status } });
    load();
  };

  if (!lead) return null;

  return (
    <div className="container py-4">
      <button className="btn btn-link" onClick={onBack}>← Volver</button>
      <h3>Lead #{lead.id} – {lead.nombre}</h3>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card p-3">
            <div><strong>Correo:</strong> {lead.correo}</div>
            <div><strong>Teléfono:</strong> {lead.telefono}</div>
            <div><strong>Fuente:</strong> {lead.source}</div>
            <div className="mt-2">
              <label className="form-label">Estado</label>
              <div className="d-flex gap-2">
                <select className="form-select" value={status} onChange={e=>setStatus(e.target.value)}>
                  {["nuevo","contactado","en_proceso","ganado","perdido"].map(s=> <option key={s} value={s}>{s}</option>)}
                </select>
                <button className="btn btn-dark" onClick={updateStatus}>Guardar</button>
              </div>
            </div>
            <div className="mt-2">
              <strong>Mensaje:</strong>
              <div className="border rounded p-2">{lead.mensaje || <em>(sin mensaje)</em>}</div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <h5>Notas / Historial</h5>
            <form onSubmit={addNote} className="d-flex gap-2 mb-3">
              <input className="form-control" value={note} onChange={e=>setNote(e.target.value)} placeholder="Agregar nota..." />
              <button className="btn btn-dark">Agregar</button>
            </form>
            <ul className="list-group">
              {lead.notes.map(n => (
                <li key={n.id} className="list-group-item">
                  <div className="small text-muted">{new Date(n.created_at).toLocaleString()} · {n.user_name || "—"}</div>
                  <div>{n.body}</div>
                </li>
              ))}
              {!lead.notes.length && <li className="list-group-item"><em>Sin notas aún</em></li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}