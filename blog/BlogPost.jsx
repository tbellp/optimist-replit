// src/blog/BlogPost.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "./blogData";

function BlogPost() {
  const { id } = useParams();
  const post = blogData.find(p => p.id === parseInt(id));

  if (!post) return <h2>Artículo no encontrado</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p><em>{post.date}</em></p>
      <img 
        src={post.image} 
        alt={post.title} 
        style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", marginBottom: "20px" }}
      />
      <p>{post.content}</p>
      <Link to="/blog">← Volver al blog</Link>
    </div>
  );
}

export default BlogPost;