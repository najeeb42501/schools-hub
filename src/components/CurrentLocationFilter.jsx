import React, { useState } from "react";

function CurrentLocationFilter({ onCurrentLocation }) {
  const [loading, setLoading] = useState(false);

  const handleGetCurrentLocation = async () => {
    setLoading(true);
    try {
      // Get user's current location using Geolocation API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          console.error("Error getting current location:", error);
          setLoading(false);
        }
      );
    } catch (error) {
      console.error("Error getting current location:", error);
      setLoading(false);
    }
  };

  return (
    <div className="text-center p-10">
      <button
        onClick={handleGetCurrentLocation}
        disabled={loading}
        className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {loading ? "Getting Location..." : "Get Current Location"}
      </button>
    </div>
  );
}

export default CurrentLocationFilter;
