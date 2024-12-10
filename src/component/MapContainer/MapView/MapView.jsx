import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import UserMarker from "../UserMarker/UserMarker";
import ICTMarker from "../IctMarker/IctMarker";
import RouteDisplay from "../RouteDisplay/RouteDisplay";
import BoundaryAlert from "../BoundaryAlert/BoundaryAlert";

const MapView = () => {
  // Define the bounds for MAPOLY
  const campusBounds = [
    [7.095, 3.324], // Southwest corner
    [7.102, 3.335], // Northeast corner
  ];

  return (
    <MapContainer
      center={[7.0985, 3.3295]} // Approximate campus center
      zoom={17}
      scrollWheelZoom={false}
      maxBounds={campusBounds} // Restrict map to these bounds
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <UserMarker />
      <ICTMarker />
      <RouteDisplay />
      <BoundaryAlert bounds={campusBounds} />
    </MapContainer>
  );
};

export default MapView;
