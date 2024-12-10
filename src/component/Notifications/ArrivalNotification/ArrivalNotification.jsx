import React, { useEffect, useState } from "react";
import { calculateDistance } from "../../../utils/calculateDistance/calculateDistance";

const ArrivalNotification = ({ userPosition, destination }) => {
  const [hasArrived, setHasArrived] = useState(false);

  useEffect(() => {
    if (userPosition && destination) {
      const [userLat, userLng] = userPosition;
      const [destLat, destLng] = destination;

      const distanceMeters = calculateDistance(userLat, userLng, destLat, destLng);

      // If the user is within 10 meters of the destination, mark as arrived
      setHasArrived(distanceMeters <= 10);
    }
  }, [userPosition, destination]);

  return (
    hasArrived && (
      <div style={{ padding: "10px", background: "#d4edda", textAlign: "center", margin: "10px 0" }}>
        <p style={{ color: "#155724" }}>
          <strong>You have arrived at your destination: ICT Building!</strong>
        </p>
      </div>
    )
  );
};

export default ArrivalNotification;
