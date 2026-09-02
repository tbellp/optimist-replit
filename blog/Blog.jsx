/*/ /src/components/Blog.jsx
import React from "react";
import articles from "./articles";
import "./blog.css";  // 👈 Importa los estilos

export default function Blog({ origen }) {
  // si no hay origen válido, mostramos un mensaje
  const list = articles[origen] || [];

  return (
    <div className="container my-4">
      <h2 className="mb-3 text-primary">
        {origen ? `Artículos para ${origen}` : "Selecciona un origen"}
      </h2>

      {list.length === 0 ? (
        <p>No hay artículos disponibles.</p>
      ) : (
        list.map((art) => (
          <div key={art.id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{art.title}</h5>
              <p className="card-text">{art.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
//

import React from "react";
import { Link } from "react-router-dom";
import articles from "./articles";
import "./blog.css";

export default function Blog({ origen }) {
  const list = articles[origen] || [];

  if (list.length === 0) {
    return <p className="text-center">No hay artículos disponibles para esta categoría.</p>;
  }

  return (
    <div className="blog-container">
      {list.map((art, index) => (
        <div className="blog-article" key={index}>
          <h3>{art.title}</h3>
          <p>{art.content}</p>
          {/* Mostrar link solo si el artículo tiene slug. /}
          {art.slug && (
            <Link to={`/blog/${art.slug}`} className="blog-link">
              Leer más →
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
*//*
import { Link } from "react-router-dom";
import articles from "./articles";

export default function Blog({ origen = "inicio" }) {
  const lista = articles[origen] || [];

  return (
    <section style={{ padding: "20px" }}>
      <h2>Blog - {origen.charAt(0).toUpperCase() + origen.slice(1)}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {lista.map((art) => (
          <div key={art.slug} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
            {art.image && (
              <img
                src={art.image}
                alt={art.title}
                style={{ display: "block", maxWidth: "400px", width: "100%", margin: "0 auto 10px", height: "auto" }}
              />
            )}
            <h3>{art.title}</h3>
            <p style={{ fontStyle: "italic", fontSize: "0.9rem" }}>{art.date}</p>
            <p>{art.excerpt}</p>
            <Link to={`/blog/${art.slug}`} style={{ color: "#0077cc" }}>Leer más</Link>
          </div>
        ))}
      </div>
    </section>
  );
}*/

import { Link } from "react-router-dom";
import articles from "./articles";
import "./Blog.css"; // CSS responsivo

export default function Blog({ origen = "inicio" }) {
  const lista = articles[origen] || [];

  return (
    <section className="blog-section">
      <h2>Blog - {origen.charAt(0).toUpperCase() + origen.slice(1)}</h2>
      <div className="blog-list">
        {lista.map((art) => (
          <div key={art.slug} className="blog-card">
            {art.image && art.image.length > 0 && (
              <img
                src={art.image}
                alt={art.title}
                className="blog-image"/> )}
            <h3>{art.title}</h3>
            {art.date && <p className="blog-date">{art.date}</p>}
            <p>{art.excerpt}</p>
            <Link to={`/blog/${art.slug}`} className="blog-link">
              Leer más
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}