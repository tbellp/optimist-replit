import React from "react";
import './Testimonials.css';
import Testimonial from "./Testimonial";
import { TestimonialData } from "./TestimonialData";

export default function Testimonials({ category }) {
    const items = TestimonialData[category] || [];

    // Protege si no hay datos
    if (!items.length) return null;

    document.documentElement.style.setProperty("--items", items.length);

    return (
        <div className="Testimonials">
            <div className="Track">
                {items.map((item) => (
                    <Testimonial
                        key={item.id}
                        image={item.img}
                        alt={item.name}
                        name={item.name}
                        designation={item.role}
                        review={item.text}
                    />
                ))}
            </div>
        </div>
    );
}
