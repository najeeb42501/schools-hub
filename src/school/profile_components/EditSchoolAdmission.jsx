import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditSchoolAdmission({ id }) {
  const [initialData, setInitialData] = useState({
    openingDate: "",
    closingDate: "",
    criteria: "",
    process: "",
    requiredDocuments: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-admission/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        setInitialData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const validationSchema = Yup.object({
    openingDate: Yup.date().required("Opening Date is required"),
    closingDate: Yup.date().required("Closing Date is required"),
    criteria: Yup.string().required("Admission Criteria is required"),
    process: Yup.string().required("Admission Process is required"),
    requiredDocuments: Yup.string().required("Required Documents are required"),
  });

  const handleSubmit = async (values) => {
    try {
      // Process form data or update state as needed
      console.log("Admission details Form data:", values);

      // Send a PUT request to your backend API to update the data
      const response = await fetch(
        `http://localhost:5000/editSchoolProfile/save-sa-data/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      // Simulate an API call to update the data
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating a delay of 1 second
      console.log("Form data updated successfully");
    } catch (error) {
      console.error("Error processing form data:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg min-h-screen shadow-md px-10">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
        Admission Details
      </h2>
      <Formik
        enableReinitialize={true}
        initialValues={initialData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="openingDate"
                  className="font-semibold block mb-1"
                >
                  Admission Opening Dates:
                </label>
                <Field
                  type="date"
                  id="openingDate"
                  name="openingDate"
                  className="text-lg p-2 border border-gray-300 rounded-md w-full"
                />
                <ErrorMessage
                  name="openingDate"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="closingDate"
                  className="font-semibold block mb-1"
                >
                  Admission Closing Dates:
                </label>
                <Field
                  type="date"
                  id="closingDate"
                  name="closingDate"
                  className="text-lg p-2 border border-gray-300 rounded-md w-full"
                />
                <ErrorMessage
                  name="closingDate"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 ">
              <div className="grid grid-cols-1 pb-10 gap-10">
                <div className="mb-4">
                  <label htmlFor="process" className="font-semibold block mb-1">
                    Admission Process:
                  </label>
                  <ReactQuill
                    id="process"
                    name="process"
                    value={formik.values.process}
                    onChange={formik.handleChange("process")}
                  />
                  <ErrorMessage
                    name="process"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="criteria"
                    className="font-semibold block mb-1"
                  >
                    Admission Criteria:
                  </label>
                  <ReactQuill
                    id="criteria"
                    name="criteria"
                    value={formik.values.criteria}
                    onChange={formik.handleChange("criteria")}
                  />
                  <ErrorMessage
                    name="criteria"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="requiredDocuments"
                    className="font-semibold block mb-1"
                  >
                    Documents Required:
                  </label>
                  <ReactQuill
                    id="requiredDocuments"
                    name="requiredDocuments"
                    value={formik.values.requiredDocuments}
                    onChange={formik.handleChange("requiredDocuments")}
                  />
                  <ErrorMessage
                    name="requiredDocuments"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200 col-span-2"
            >
              Save Admission Details
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditSchoolAdmission;
