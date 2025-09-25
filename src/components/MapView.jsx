import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
  iconSize: [30, 30],
});

const cafeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/685/685352.png",
  iconSize: [30, 30],
});

function FlyToLocation({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 15, { duration: 1.5 });
    }
  }, [position]);
  return null;
}

export default function MapView({ cafes, selectedCafe }) {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.error("Geolocation error:", err);
        // Default to Delhi if denied
        setUserLocation([28.6139, 77.2090]);
      }
    );
  }, []);

  return (
    <MapContainer
      center={[28.6139, 77.2090]}
      zoom={14}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      {userLocation && (
        <Marker position={userLocation} icon={userIcon}>
          <Popup>You are here</Popup>
        </Marker>
      )}

      {cafes.map((cafe) => (
        <Marker key={cafe.id} position={[cafe.lat, cafe.lng]} icon={cafeIcon}>
          <Popup>{cafe.name}</Popup>
        </Marker>
      ))}

      {selectedCafe && <FlyToLocation position={[selectedCafe.lat, selectedCafe.lng]} />}
    </MapContainer>
  );
}
