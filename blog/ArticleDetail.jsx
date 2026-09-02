import { useParams, useNavigate } from "react-router-dom";
import articles from "./articles";
import "./ArticleDetail.css";

export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = Object.values(articles)
    .flat()
    .find((a) => a.slug === slug);

  if (!article) return <h2>Artículo no encontrado</h2>;

  return (
    <article className="article-detail">
      {/* 🔹 Botón "X" de cierre */}
      <button className="close-x" onClick={() => navigate(-1)}>✕</button>

      <h1>{article.title}</h1>
      {article.date && <p className="article-date">{article.date}</p>}

      {article.image && article.image.length > 0 && (
        <img
          src={article.image}
          alt={article.title}
          className="article-image"
        />
      )}

      <div className="article-content" style={{ whiteSpace: "pre-line" }}>
        {article.content}
      </div>
    </article>
  );
}