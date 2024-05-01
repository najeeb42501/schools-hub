import React, { useState, useEffect } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

function AddressAutocomplete({ schoolAddress, onChange }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [address, setAddress] = useState("");

  // Set initial value from props
  useEffect(() => {
    setAddress(schoolAddress);
  }, [schoolAddress]);

  const handleInput = (e) => {
    setAddress(e.target.value);
  };

  const onLoad = (autocomplete) => {
    // Set initial input field value
    const input = document.getElementById("autocomplete-input");
    input.value = schoolAddress;
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        setAddress(place.formatted_address);
        onChange(place.formatted_address);
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
