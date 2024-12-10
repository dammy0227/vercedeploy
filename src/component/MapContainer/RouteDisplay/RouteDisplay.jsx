import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

const RouteDisplay = () => {
  const map = useMap();
  const ictPosition = [7.098919, 3.329527]; // ICT building coordinates

  useEffect(() => {
    let routingControl;
    if (map) {
      routingControl = L.Routing.control({
        waypoints: [],
        routeWhileDragging: true,
        createMarker: () => null, // Prevent extra markers
        lineOptions: {
          styles: [{ color: "#6FA1EC", weight: 6 }],
        },
      }).addTo(map);

      navigator.geolocation.getCurrentPosition(
        (location) => {
          const userPosition = [location.coords.latitude, location.coords.longitude];
          routingControl.setWaypoints([L.latLng(userPosition), L.latLng(ictPosition)]);
        },
        (error) => console.error("Error accessing GPS:", error)
      );
    }

    return () => {
      if (map && routingControl) map.removeControl(routingControl);
    };
  }, [map, ictPosition]);

  return null;
};

export default RouteDisplay;
