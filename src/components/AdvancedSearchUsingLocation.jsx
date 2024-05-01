import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

function AdvancedSearchUsingLocation({ onSetUserLocation, onSearchNearby }) {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          onSetUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error obtaining location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex gap-10 justify-center p-4">
      <button
        onClick={handleCurrentLocation}
        className="btn flex items-center gap-2 bg-cariGreen text-white p-2 rounded-full hover:bg-cariGreen-dark focus:ring focus:ring-cariGreen-light"
      >
        <FontAwesomeIcon icon={faLocationArrow} className="h-5 w-5" />{" "}
        {/* Using FontAwesome icon */}
        Use Current Location
      </button>
      <button
        onClick={() => onSearchNearby(location)}
        className="btn bg-cariGreen text-white p-2 rounded-md hover:bg-cariGreen-dark"
      >
        Get Schools Nearby
      </button>
    </div>
  );
}

export default AdvancedSearchUsingLocation;
