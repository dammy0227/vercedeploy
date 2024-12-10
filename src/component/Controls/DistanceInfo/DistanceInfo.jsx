import React, { useState, useEffect } from "react";
import { calculateDistance } from "../../../utils/calculateDistance/calculateDistance";

const DistanceInfo = ({ userPosition, destination }) => {
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (userPosition && destination) {
      const [userLat, userLng] = userPosition;
      const [destLat, destLng] = destination;

      const distanceMeters = calculateDistance(userLat, userLng, destLat, destLng);
      setDistance(distanceMeters.toFixed(2)); // Convert to meters
      setTime(((distanceMeters / 1.4) / 60).toFixed(2)); // Walking speed: 1.4 m/s
    }
  }, [userPosition, destination]);

  return (
    <div style={{ padding: "10px", background: "#e9ecef", textAlign: "center" }}>
      <p>
        <strong>Distance:</strong> {distance ? `${distance} meters` : "Calculating..."}
      </p>
      <p>
        <strong>Estimated Time:</strong> {time ? `${time} minutes` : "Calculating..."}
      </p>
    </div>
  );
};

export default DistanceInfo;
