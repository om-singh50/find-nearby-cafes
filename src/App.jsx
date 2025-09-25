import { useEffect, useState } from "react";
import MapView from "./components/MapView";
import CafeList from "./components/CafeList";
import "./App.css";

export default function App() {
  const [cafes, setCafes] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);

  useEffect(() => {
    fetch("/cafes.json")
      .then((res) => res.json())
      .then((data) => setCafes(data))
      .catch((err) => console.error("Error loading cafes:", err));
  }, []);

  return (
    <div className="app">
      <div className="sidebar">
        <CafeList cafes={cafes} onSelect={setSelectedCafe} />
      </div>
      <div className="map-container">
        <MapView cafes={cafes} selectedCafe={selectedCafe} />
      </div>
    </div>
  );
}
