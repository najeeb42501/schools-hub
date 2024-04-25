import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditAboutSchool({ id }) {
  const [initialData, setInitialData] = useState({
    aboutSchoolDescription: "",
    foundedDate: "",
  });

  useEffect(() => {
    const fetchSchoolData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-about/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Response DATA SO : ", data);
        setInitialData({
          aboutSchoolDescription: data.aboutSchoolDescription,
          foundedDate: data.foundedDate,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSchoolData();
  }, []);

  const validationSchema = Yup.object({
    aboutSchoolDescription: Yup.string()
      .required("Description is required")
      .test("word-count", "Description must be at least 100 words", (value) => {
        if (!value) return false;
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount >= 100;
      }),
    foundedDate: Yup.string().required("School Founded Date is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("handle submit call");
    try {
      const response = await fetch(
        `http://localhost:5000/editSchoolProfile/save-school-about-data/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        alert("School profile updated successfully");
      } else {
        alert("Failed to update school profile");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update school profile");
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-6">
        Edit About School Details
      </h2>
      <p className="text-gray-600 text-sm mb-4">
        Write brief description about your school goals and objectives:
      </p>
      <Formik
        enableReinitialize={true}
        initialValues={initialData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            name="aboutSchoolDescription"
            render={({ field }) => (
              <ReactQuill
                value={field.value}
                onChange={field.onChange(field.name)}
                modules={{
                  toolbar: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                    ["link", "image", "video"],
                    ["clean"],
                  ],
                }}
                style={{ minHeight: "200px", height: "auto" }}
              />
            )}
          />
          <ErrorMessage
            name="aboutSchoolDescription"
            component="div"
            className="text-red-500"
          />
          <div className="mt-4">
            <label
              htmlFor="foundedDate"
              className="block text-sm font-medium text-gray-700"
            >
              School Founded Date:
            </label>
            <Field
              type="text"
              id="foundedDate"
              name="foundedDate"
              className="block w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:border-blue-500 focus:ring"
              placeholder="Enter founded date..."
            />
            <ErrorMessage
              name="foundedDate"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            >
              Save Description
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default EditAboutSchool;
