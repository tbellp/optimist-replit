import { useEffect, useState } from "react";
import { api } from "../api/client";

export default function LeadsList({ onOpen }) {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState({ data: [], total: 0 });
  const [page, setPage] = useState(1);

  const load = async () => {
    const res = await api(`/api/leads?q=${encodeURIComponent(q)}&status=${status}&page=${page}&limit=20`);
    setData(res);
  };

  useEffect(() => { load(); }, [page]);

  const search = (e) => { e.preventDefault(); setPage(1); load(); };

  return (
    <div className="container py-4">
      <h3>Leads</h3>
      <form onSubmit={search} className="row g-2 mb-3">
        <div className="col-md-6">
          <input className="form-control" placeholder="Buscar nombre, correo o teléfono" value={q} onChange={e=>setQ(e.target.value)} />
        </div>
        <div className="col-md-3">
          <select className="form-select" value={status} onChange={e=>setStatus(e.target.value)}>
            <option value="">Todos</option>
            <option value="nuevo">Nuevo</option>
            <option value="contactado">Contactado</option>
            <option value="en_proceso">En proceso</option>
            <option value="ganado">Ganado</option>
            <option value="perdido">Perdido</option>
          </select>
        </div>
        <div className="col-md-3">
          <button className="btn btn-dark w-100">Buscar</button>
        </div>
      </form>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>#</th><th>Nombre</th><th>Correo</th><th>Teléfono</th><th>Status</th><th>Fecha</th><th></th>
            </tr>
          </thead>
          <tbody>
            {data.data.map(l => (
              <tr key={l.id}>
                <td>{l.id}</td>
                <td>{l.nombre}</td>
                <td>{l.correo}</td>
                <td>{l.telefono}</td>
                <td>
                  <span className="badge text-bg-secondary">{l.status}</span>
                </td>
                <td>{new Date(l.created_at).toLocaleString()}</td>
                <td>
                  <button className="btn btn-sm btn-outline-dark" onClick={()=>onOpen(l.id)}>Abrir</button>
                </td>
              </tr>
            ))}
            {!data.data.length && (
              <tr><td colSpan="7" className="text-center py-4">Sin resultados</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-secondary" disabled={page<=1} onClick={()=>setPage(p=>p-1)}>Anterior</button>
        <button className="btn btn-outline-secondary" disabled={(page*20)>=data.total} onClick={()=>setPage(p=>p+1)}>Siguiente</button>
        <div className="ms-auto">Total: {data.total}</div>
      </div>
    </div>
  );
}