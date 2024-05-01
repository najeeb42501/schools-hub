import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import AddressAutocomplete from "./google_maps_api_component/AddressAutoComplete"; // Adjust the path as necessary

function EditSchoolContact({ id }) {
  const [initialData, setInitialData] = useState({
    schoolID: id,
    schoolMobileNo: "",
    schoolEmail: "",
    schoolWebsite: "",
    schoolAddress: "",
    latitude: null,
    longitude: null,
  });

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

      alert("Contact details saved!");
      setSubmitting(false);
    } catch (error) {
      console.error("Error updating contact details:", error);
      setSubmitting(false);
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
              <AddressAutocomplete
                schoolAddress={formik.values.schoolAddress}
                onChange={(value) =>
                  formik.setFieldValue("schoolAddress", value)
                }
                onCoordinatesChange={(coords) => {
                  console.log("Coordinates:", coords);
                  formik.setFieldValue("latitude", coords.lat);
                  formik.setFieldValue("longitude", coords.lng);
                }}
              />
              <ErrorMessage
                name="schoolAddress"
                component="div"
                className="text-red-500"
              />
            </div>

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
