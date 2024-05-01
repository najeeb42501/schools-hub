import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

function SchoolContact({ schoolID }) {
  const [schoolContactData, setSchoolContactData] = useState({});
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-contact/${schoolID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schools data");
        }
        const data = await response.json();

        console.log("Schools : ", data);
        setSchoolContactData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching schools data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  useEffect(() => {
    if (showMap && schoolContactData.schoolAddress) {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [0, 0],
        zoom: 1,
      });

      map.on("load", () => {
        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        });

        map.addControl(geocoder);

        geocoder.on("result", (e) => {
          const { coordinates } = e.result.geometry;
          const center = coordinates.slice(); // Ensure it's a copy
          map.flyTo({ center, zoom: 15 });
          new mapboxgl.Marker().setLngLat(center).addTo(map);
        });

        geocoder.query(schoolContactData.schoolAddress);
      });

      const closeMap = () => {
        setShowMap(false);
        map.remove();
      };

      const mapContainer = document.getElementById("map-container");
      mapContainer.addEventListener("click", closeMap);

      return () => {
        mapContainer.removeEventListener("click", closeMap);
      };
    }
  }, [showMap, schoolContactData.schoolAddress]);

  return (
    <div className="bg-gray-100 min-h-screen p-6 rounded-md shadow-md">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 p-10">
        School Contact Details:
      </h1>
      <div className="flex flex-col gap-10 justify-center items-center mx-auto">
        {/* First Card */}
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-yellow p-8">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Contact Details
            </h2>
          </div>
          <div className="flex flex-col space-y-4 p-10 font-mono">
            <div className="flex items-center">
              <FaPhone className="text-cariGreen  mr-9 " size={40} />
              <p>
                <span className="font-semibold">
                  {schoolContactData.schoolMobileNo}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-cariGreen  mr-9 " size={40} />
              <p>
                <span className="font-semibold">
                  {schoolContactData.schoolEmail}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <FaGlobe className="text-cariGreen  mr-9  " size={40} />
              <p>
                <span className="font-semibold">
                  {schoolContactData.schoolWebsite}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-cariGreen  mr-9" size={40} />
              <p>
                <span className="font-semibold">
                  {schoolContactData.schoolAddress}
                </span>
              </p>
            </div>
            <button
              onClick={() => setShowMap(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Show Map
            </button>
          </div>
        </div>
      </div>
      {showMap && (
        <div
          id="map-container"
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded-md shadow-md">
            <div id="map" style={{ width: "400px", height: "400px" }}></div>
            <button
              onClick={() => setShowMap(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close Map
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SchoolContact;
