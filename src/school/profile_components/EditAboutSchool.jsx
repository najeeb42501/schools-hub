import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function EditAboutSchool() {
  const initialValues = {
    description: "",
  };

  const validationSchema = Yup.object({
    description: Yup.string()
      .required("Description is required")
      .test("word-count", "Description must be at least 100 words", (value) => {
        if (!value) return false;
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount >= 100;
      }),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("handle submit about");
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
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
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            as="textarea"
            name="description"
            className="block w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:border-blue-500 focus:ring"
            rows="5"
            placeholder="Enter description..."
          />
          <ErrorMessage
            name="description"
            component="div"
            className="text-red-500"
          />
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
