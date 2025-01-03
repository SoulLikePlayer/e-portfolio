import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../styles/composents/Carte.css";

// Icone personnalisée pour le marqueur
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Carte = ({ position , positionAppareil }) => {
  // Coordonnées pour la polyline
  const positions = [positionAppareil, position];

  return (
    <div className="carte-container">
      <MapContainer center={position} zoom={13} className="leaflet-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>J'Habite ici. Coordonnées : {position[0].toFixed(4)}, {position[1].toFixed(4)}</span>
          </Popup>
        </Marker>

        <Marker position={positionAppareil}>
          <Popup>
            <span>Position de l'appareil. Coordonnées : {positionAppareil[0].toFixed(4)}, {positionAppareil[1].toFixed(4)}</span>
          </Popup>
        </Marker>

        {/* Dessin du trajet entre les deux points */}
        <Polyline positions={positions} color="blue" />
      </MapContainer>
    </div>
  );
};

export default Carte;
