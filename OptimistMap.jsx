import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import faviconIcon from "/Favicon.png";

// 🔹 Configura tu API Key de OpenWeatherMap
const WEATHER_API_KEY = "773c0addb3a64c4eb9cf0481bcf67f52";

// Fix default Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom Optimist icon
const optimistIcon = new L.Icon({
  iconUrl: faviconIcon,
  iconSize: [24, 32],
  iconAnchor: [12, 32],
  popupAnchor: [0, -32],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

// Loader de KML con temperatura y humedad
function KMLLoader({ url }) {
  const [points, setPoints] = useState([]);
  const map = useMap();

  useEffect(() => {
    async function loadKML() {
      const res = await fetch(url);
      const kmlText = await res.text();

      const parser = new DOMParser();
      const kml = parser.parseFromString(kmlText, "text/xml");
      const placemarks = kml.getElementsByTagName("Placemark");

      let parsedPoints = [];

      for (let pm of placemarks) {
        const name = pm.getElementsByTagName("name")[0]?.textContent || "Sin nombre";
        const description = pm.getElementsByTagName("description")[0]?.textContent || "";
        const coordsText = pm.getElementsByTagName("coordinates")[0]?.textContent?.trim() || "";
        const [lng, lat] = coordsText.split(",").map(Number);

        // 🔹 Consultamos la API del clima
        let temperature = "N/A";
        let humidity = "N/A"; // 🔹 NUEVO
        try {
          const weatherRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${WEATHER_API_KEY}&lang=es`
          );
          const weatherData = await weatherRes.json();
          temperature = weatherData.main?.temp ?? "N/A";
          humidity = weatherData.main?.humidity ?? "N/A"; // 🔹 NUEVO
        } catch (err) {
          console.error("Error consultando clima:", err);
        }

        parsedPoints.push({ name, description, temperature, humidity, coordinates: [lng, lat] }); // 🔹 NUEVO
      }

      setPoints(parsedPoints);

      if (parsedPoints.length > 0) {
        const bounds = L.latLngBounds(parsedPoints.map((p) => [p.coordinates[1], p.coordinates[0]]));
        map.fitBounds(bounds, { padding: [20, 20] });
      }
    }

    loadKML();
  }, [url, map]);

  return (
    <>
      {points.map((p, idx) => (
        <Marker
          key={idx}
          position={[p.coordinates[1], p.coordinates[0]]}
          icon={optimistIcon}
        >
          <Popup>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>🌡️ Temperatura actual: <b>{p.temperature} °C</b></p>
            <p>💧 Humedad relativa: <b>{p.humidity} %</b></p> {/* 🔹 NUEVO */}
            <small>
              📍 Lat: {p.coordinates[1].toFixed(4)}, Lng: {p.coordinates[0].toFixed(4)}
            </small>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

export default function OptimistMap() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <MapContainer
        center={[-33.6037, -70.3816]}
        zoom={12}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        />
        <KMLLoader url="/Optimist.kml" />
      </MapContainer>
    </div>
  );
}