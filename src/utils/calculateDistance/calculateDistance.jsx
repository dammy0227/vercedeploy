// calculateDistance.js
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Radius of Earth in meters
    const φ1 = (lat1 * Math.PI) / 180; // Convert latitude from degrees to radians
    const φ2 = (lat2 * Math.PI) / 180; // Convert latitude from degrees to radians
    const Δφ = ((lat2 - lat1) * Math.PI) / 180; // Difference in latitude
    const Δλ = ((lon2 - lon1) * Math.PI) / 180; // Difference in longitude
  
    // Haversine formula
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Result in meters
  
    return distance;
  };
  