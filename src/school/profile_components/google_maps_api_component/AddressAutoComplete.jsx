import React, { useState, useEffect } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

function AddressAutocomplete({ schoolAddress, onChange, onCoordinatesChange }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [address, setAddress] = useState("");

  useEffect(() => {
    setAddress(schoolAddress);
  }, [schoolAddress]);

  const handleInput = (e) => {
    setAddress(e.target.value);
  };

  const onLoad = (autocomplete) => {
    const input = document.getElementById("autocomplete-input");
    input.value = schoolAddress;
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        setAddress(place.formatted_address);
        onChange(place.formatted_address);
        if (place.geometry) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          onCoordinatesChange({ lat, lng });
        }
      }
    });
  };

  return isLoaded ? (
    <Autocomplete onLoad={onLoad} className="w-full">
      <input
        id="autocomplete-input"
        type="text"
        value={address}
        onChange={handleInput}
        placeholder="Enter address"
        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
      />
    </Autocomplete>
  ) : null;
}

export default AddressAutocomplete;
