import React from "react";

export default function Testimonial({ image, alt, name, designation, review }) {
    return (
        <div className="Testimonial">
            <img src={image} alt={alt} />
            <h3>{name}</h3>
            <p className="role">{designation}</p>
            <p className="review">"{review}"</p>
        </div>
    );
}