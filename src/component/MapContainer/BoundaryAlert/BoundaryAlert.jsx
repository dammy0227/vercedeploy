import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

const BoundaryAlert = ({ bounds }) => {
  const map = useMap();

  useEffect(() => {
    const checkBounds = () => {
      const mapBounds = map.getBounds();
      if (
        mapBounds.getNorthEast().lat < bounds[1][0] ||
        mapBounds.getSouthWest().lat > bounds[0][0] ||
        mapBounds.getNorthEast().lng < bounds[0][1] ||
        mapBounds.getSouthWest().lng > bounds[1][1]
      ) {
        alert("You are outside the campus boundary!");
      }
    };

    map.on("moveend", checkBounds);
    return () => map.off("moveend", checkBounds);
  }, [map, bounds]);

  return null;
};

export default BoundaryAlert;
