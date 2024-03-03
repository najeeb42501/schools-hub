import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

function EditSchoolContact() {
  const initialValues = {
    phoneNumber: "",
    email: "",
    websiteLink: "",
    address: "",
  };

  const validationSchema = Yup.object({
    phoneNumber: Yup.string().required("Phone Number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    websiteLink: Yup.string()
      .url("Invalid URL")
      .required("Website Link is required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    // Here you would typically save the contact details to the server
    alert("Contact details saved! (simulated)");
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-6">
        Edit School Contact
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4 flex items-center">
            <FaPhone className="text-gray-400 mr-2" />
            <Field
              type="tel"
              name="phoneNumber"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Phone Number"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope className="text-gray-400 mr-2" />
            <Field
              type="email"
              name="email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaGlobe className="text-gray-400 mr-2" />
            <Field
              type="url"
              name="websiteLink"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Website Link"
            />
            <ErrorMessage
              name="websiteLink"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <Field
              type="text"
              name="address"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Address"
            />
            <ErrorMessage
              name="address"
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
      </Formik>
    </div>
  );
}

export default EditSchoolContact;
