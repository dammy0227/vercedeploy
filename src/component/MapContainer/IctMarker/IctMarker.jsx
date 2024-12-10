import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Custom icon for ICT building
const ictIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2983/2983824.png", // Example icon URL
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const ICTMarker = () => {
  const ictPosition = [7.098919, 3.329527]; // Fixed ICT position

  return (
    <Marker position={ictPosition} icon={ictIcon}>
      <Popup>
        <strong>ICT Building</strong>
        <br />
        Welcome to the ICT hub of MAPOLY!
      </Popup>
    </Marker>
  );
};

export default ICTMarker;
