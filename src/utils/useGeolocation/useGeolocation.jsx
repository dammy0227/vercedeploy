// useGeolocation.js
import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const handleError = (err) => {
      setError(`Geolocation error: ${err.message}`);
    };

    const watcher = navigator.geolocation.watchPosition(handleSuccess, handleError);

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return { location, error };
};

export default useGeolocation;
