import React, { useState } from "react";
import MapView from "./component/MapContainer/MapView/MapView";
import SearchBar from "./component/Controls/SearchBar/SearchBar";
import DistanceInfo from "./component/Controls/DistanceInfo/DistanceInfo";
import VoiceToggle from "./component/Controls/VoiceToggle/VoiceToggle";
import ArrivalNotification from "./component/Notifications/ArrivalNotification/ArrivalNotification";
import ErrorNotification from "./component/Notifications/ErrorNotification/ErrorNotification";
import "./styles/mapStyles.css";
import "./styles/components.css";

const App = () => {
  const [destination, setDestination] = useState([7.098919, 3.329527]); // Default: ICT Building
  const [userPosition, setUserPosition] = useState(null); // User's current position
  const [errorMessage, setErrorMessage] = useState(""); // Error handling

  // Example error handler for testing
  const simulateError = () => {
    setErrorMessage("Failed to access GPS location. Please enable location services.");
  };

  return (
    <div>
      {/* Search bar to set destination */}
      <SearchBar setDestination={setDestination} />

      {/* Main map view */}
      <MapView userPosition={userPosition} destination={destination} />

      {/* Notifications */}
      <ArrivalNotification userPosition={userPosition} destination={destination} />
      <ErrorNotification errorMessage={errorMessage} />

      {/* Distance information */}
      <DistanceInfo userPosition={userPosition} destination={destination} />

      {/* Voice guidance toggle */}
      <VoiceToggle routeInstructions={["Head north for 200 meters", "ICT Building is on your right"]} />

      {/* Simulate an error for testing */}
      <button onClick={simulateError} style={{ margin: "10px", padding: "5px 10px" }}>
        Simulate Error
      </button>
    </div>
  );
};

export default App;
