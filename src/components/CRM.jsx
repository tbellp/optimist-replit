import { useEffect, useState } from "react";

export default function CRM() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("No autorizado 🚫");
          window.location.href = "/"; // Redirige al inicio si no hay token
          return;
        }

        const response = await fetch("https://optimist.cl/api/leads", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          alert("Sesión inválida o expirada ❌");
          localStorage.removeItem("token");
          window.location.href = "/";
          return;
        }

        const data = await response.json();
        setLeads(data);
      } catch (err) {
        console.error("Error al obtener leads:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (loading) return <p>Cargando leads...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📋 Panel CRM - Leads recibidos</h2>
      {leads.length === 0 ? (
        <p>No hay leads registrados todavía.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Mensaje</th>
              <th>Origen</th>
              <th>Creado</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.nombre}</td>
                <td>{lead.correo}</td>
                <td>{lead.telefono}</td>
                <td>{lead.mensaje}</td>
                <td>{lead.origen}</td>
                <td>{new Date(lead.creado).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}