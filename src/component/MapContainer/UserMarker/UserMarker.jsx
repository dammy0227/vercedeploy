import React from "react";
import { Marker, useMap } from "react-leaflet";
import L from "leaflet";
import useGeolocation from "../../../utils/useGeolocation/useGeolocation";

// Custom icon for user position
const userIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png", // Example icon URL
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const UserMarker = () => {
  const { location, error } = useGeolocation();
  const map = useMap();

  React.useEffect(() => {
    if (location) {
      map.flyTo([location.latitude, location.longitude], 17); // Automatically center map on user
    }
  }, [location, map]);

  if (error) {
    console.error("Geolocation error:", error);
    return null;
  }

  return location ? (
    <Marker position={[location.latitude, location.longitude]} icon={userIcon} />
  ) : null;
};

export default UserMarker;
