import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Schools() {
  const [schools, setSchools] = React.useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/schools");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("School : " + data);
        setSchools(data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };
    fetchSchools();
  }, []);

  const initialValues = {
    school_name: "",
    email: "",
    password: "",
    city: "",
    type: "school",
  };

  const validationSchema = Yup.object({
    school_name: Yup.string().required("School Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    city: Yup.string().required("City is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch(
        "http://localhost:5000/admin/createSchoolProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();
      alert(data.message);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }

      const newSchool = await response.json();
      setSchools([...schools, newSchool]);
      resetForm();
    } catch (error) {
      console.error("Error creating school profile:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/admin/deleteSchool/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      alert("School deleted successfully");
      const updatedSchools = schools.filter((school) => school._id !== id);
      setSchools(updatedSchools);
    } catch (error) {
      console.error("Error deleting school:", error);
    }
  };

  return (
    <div className="p-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-medium">
                School Name:
              </label>
              <Field
                type="text"
                id="school_name"
                name="school_name"
                className="form-input mt-1 rounded-md w-full"
                placeholder="Enter school name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">
                Email:
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                className="form-input mt-1 rounded-md w-full"
                placeholder="Enter email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Password:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="form-input mt-1 rounded-md w-full"
                placeholder="Enter password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label htmlFor="city" className="block font-medium">
                City:
              </label>
              <Field
                type="text"
                id="city"
                name="city"
                className="form-input mt-1 rounded-md w-full"
                placeholder="Enter city"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Create School Profile
          </button>
        </Form>
      </Formik>

      {/* Table of schools */}
      <div className="overflow-y-auto max-h-96">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">School Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Password</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school) => (
              <tr key={school._id}>
                <td className="border px-4 py-2">{school.school_name}</td>
                <td className="border px-4 py-2">{school.email}</td>
                <td className="border px-4 py-2">{school.password}</td>
                <td className="border px-4 py-2">{school.city}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(school._id)}
                    className="btn btn-secondary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schools;
