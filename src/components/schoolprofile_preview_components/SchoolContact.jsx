import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function SchoolContact({ schoolID }) {
  const [schoolContactData, setSchoolContactData] = useState({
    latitude: null,
    longitude: null,
    schoolAddress: "",
    schoolEmail: "",
    schoolMobileNo: "",
    schoolWebsite: "",
  });
  const [showMap, setShowMap] = useState(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

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
        setSchoolContactData(data);
      } catch (error) {
        console.error("Error fetching schools data:", error);
      }
    };

    fetchData();
  }, [schoolID]);

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-6 rounded-md shadow-md">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 p-10">
        School Contact Details
      </h1>
      <div className="flex flex-col gap-10 justify-center items-center mx-auto">
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white school-details-card rounded-lg shadow-xl overflow-hidden">
          <div className=" ">
            <div className="bg-nightGreen p-4">
              <h2 className="text-3xl font-extrabold text-center text-white mb-4">
                Contact Details
              </h2>
            </div>
            <div className="flex flex-col space-y-4 p-2 font-mono">
              <div className="flex flex-col space-y-2 p-10 pb-5 font-mono">
                {/* Phone number */}
                <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg">
                  <FaPhone className="text-cariGreen" size={32} />
                  <p className="text-lg text-gray-800">
                    {schoolContactData.schoolMobileNo}
                  </p>
                </div>

                {/* Email address */}
                <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg">
                  <FaEnvelope className="text-cariGreen" size={32} />
                  <p className="text-lg text-gray-800">
                    {schoolContactData.schoolEmail}
                  </p>
                </div>

                {/* Website URL */}
                <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg">
                  <FaGlobe className="text-cariGreen" size={32} />
                  <p className="text-lg text-gray-800">
                    {schoolContactData.schoolWebsite}
                  </p>
                </div>

                {/* Physical address */}
                <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-cariGreen" size={32} />
                  <p className="text-lg text-gray-800">
                    {schoolContactData.schoolAddress}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowMap(true)}
                className="bg-cariGreen hover:bg-nightGreen text-white w-1/3 mx-auto font-bold py-4  px-4 rounded"
              >
                Location On Map
              </button>
            </div>
          </div>
        </div>
        {showMap && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-600  p-6 rounded-md shadow-md text-center">
              <button
                onClick={() => setShowMap(false)}
                className=" m-1  mx-auto bg-gray-400  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                X
              </button>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                  lat: parseFloat(schoolContactData.latitude),
                  lng: parseFloat(schoolContactData.longitude),
                }}
                zoom={15}
              >
                <Marker
                  position={{
                    lat: parseFloat(schoolContactData.latitude),
                    lng: parseFloat(schoolContactData.longitude),
                  }}
                />
              </GoogleMap>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SchoolContact;
