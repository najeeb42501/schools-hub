import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import ReactMapboxGl, { GeolocateControl } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibmFqZWViNDI1MDEiLCJhIjoiY2x2bTdoaXR0MGQ5aTJpbnlqZmpwbjZqdyJ9.HXwQcQdfspyRd-FwDGUgPw",
});

function EditSchoolContact({ id }) {
  const [initialData, setInitialData] = useState({
    schoolID: id,
    schoolMobileNo: "",
    schoolEmail: "",
    schoolWebsite: "",
    schoolAddress: "",
  });

  const [suggestedLocations, setSuggestedLocations] = useState([]);

  useEffect(() => {
    const fetchSchoolContact = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-contact/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch contact data");
        }
        const data = await response.json();
        console.log("Response Data : " + JSON.stringify(data));
        setInitialData(data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchSchoolContact();
  }, [id]);

  const validationSchema = Yup.object({
    schoolMobileNo: Yup.string().required("Phone Number is required"),
    schoolEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    schoolWebsite: Yup.string()
      .url("Invalid URL")
      .required("Website Link is required"),
    schoolAddress: Yup.string().required("Address is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Submitting form with values:", values);

    try {
      const response = await fetch(
        `http://localhost:5000/editSchoolProfile/save-school-contact-data/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update contact details");
      }

      // Simulated fetch request
      alert("Contact details saved!");
      setSubmitting(false);
    } catch (error) {
      console.error("Error updating contact details:", error);
      setSubmitting(false);
    }
  };

  const handleAddressChange = async (value) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          value
        )}.json?access_token=pk.eyJ1IjoibmFqZWViNDI1MDEiLCJhIjoiY2x2bTdoaXR0MGQ5aTJpbnlqZmpwbjZqdyJ9.HXwQcQdfspyRd-FwDGUgPw&country=PK`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch location suggestions");
      }
      const data = await response.json();
      console.log("Suggested Locations : " + JSON.stringify(data.features));
      setSuggestedLocations(data.features);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-6">
        Edit School Contact
      </h2>
      <Formik
        enableReinitialize={true}
        initialValues={initialData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <div className="mb-4 flex items-center">
              <FaPhone className="text-gray-400 mr-2" />
              <Field
                type="tel"
                name="schoolMobileNo"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                placeholder="Phone Number"
              />
              <ErrorMessage
                name="schoolMobileNo"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4 flex items-center">
              <FaEnvelope className="text-gray-400 mr-2" />
              <Field
                type="email"
                name="schoolEmail"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                placeholder="Email"
              />
              <ErrorMessage
                name="schoolEmail"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4 flex items-center">
              <FaGlobe className="text-gray-400 mr-2" />
              <Field
                type="url"
                name="schoolWebsite"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                placeholder="Website Link"
              />
              <ErrorMessage
                name="schoolWebsite"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4 flex items-center">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <Field
                type="text"
                name="schoolAddress"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                placeholder="Address"
                onChange={(e) => {
                  formik.handleChange(e);
                  handleAddressChange(e.target.value);
                }}
              />
              <ErrorMessage
                name="schoolAddress"
                component="div"
                className="text-red-500"
              />
            </div>
            {/* Suggestions Dropdown */}
            {suggestedLocations.length > 0 && (
              <div className="absolute bg-white border border-gray-300 mt-1 w-full z-10">
                {suggestedLocations.map((location) => (
                  <div
                    key={location.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      formik.setFieldValue(
                        "schoolAddress",
                        location.place_name
                      );
                      setSuggestedLocations([]);
                    }}
                  >
                    {location.place_name}
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-gray-600 hover:bg-yellow text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              >
                Save Contact
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditSchoolContact;
