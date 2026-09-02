// src/blog/BlogList.jsx
import React from "react";
import { Link } from "react-router-dom";
import blogData from "./blogData";
import useVisitorType from "../hooks/useVisitorType";

function BlogList() {
  const visitorType = useVisitorType();

  const filteredPosts = blogData.filter(
    post => post.category === visitorType || post.category === "general"
  );

  return (
    <div>
      <h2>Blog para {visitorType}</h2>
      {filteredPosts.map(post => (
        <div key={post.id} style={{ marginBottom: "30px" }}>
          <img 
            src={post.image} 
            alt={post.title} 
            style={{ width: "100%", maxWidth: "500px", borderRadius: "8px" }}
          />
          <h3>{post.title}</h3>
          <p><em>{post.date}</em></p>
          <Link to={`/blog/${post.id}`}>Leer más</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;