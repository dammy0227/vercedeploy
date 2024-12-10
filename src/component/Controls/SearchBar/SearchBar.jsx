import React from "react";

const SearchBar = ({ setDestination }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const destination = formData.get("destination");

    // For simplicity, hardcoding ICT building coordinates
    if (destination.toLowerCase() === "ict" || destination.toLowerCase() === "ict building") {
      setDestination([7.098919, 3.329527]);
      alert("Destination set to ICT Building.");
    } else {
      alert("Unknown destination. Currently, only ICT Building is supported.");
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ padding: "10px", background: "#f8f9fa" }}>
      <input
        type="text"
        name="destination"
        placeholder="Enter destination (e.g., ICT)"
        style={{ padding: "5px", width: "80%" }}
        required
      />
      <button type="submit" style={{ padding: "5px 10px" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
