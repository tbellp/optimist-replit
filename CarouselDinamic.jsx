import Carousel from 'react-bootstrap/Carousel';
import '../components/CarouselDinamic.css'; // Usa tu CSS existente

export default function CarouselDinamic({ slides }) {
  if (!slides || slides.length === 0) {
    return null; // Si no hay imágenes, no renderiza nada
  }
  return (
    <Carousel>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100 imgnormalizada"
            height="400"
            src={slide.img}
            alt={slide.alt}
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}