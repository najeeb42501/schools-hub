import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginPageSideComponent from "../components/LoginPageSideComponent";

function Signup() {
  const initialValues = {
    username: "",
    email: "",
    city: "",
    password: "",
    confirmPassword: "",
    type: "user",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    city: Yup.string().required("Please enter your city name"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch(
        "http://localhost:5000/auth/createUserProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      alert(data.message); // Show success message
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again."); // Show error message
    }
  };
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-no-repeat bg-cover bg-center md:bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-cariGreen bg-opacity-70 p-8 md:max-w-md w-full rounded-lg">
        <h1 className="text-white text-3xl font-bold text-center mb-3">
          Register Yourself On Our Platform!
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-3">
              <Field
                className="w-full p-4 bg-nightGreen rounded text-white outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                name="username"
                placeholder="Full Name"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-600 font-bold text-lg"
              />
              <Field
                className="w-full p-4 bg-nightGreen rounded text-white outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                name="city"
                placeholder="City"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-600 font-bold text-lg"
              />
              <Field
                className="w-full p-4 bg-nightGreen rounded text-white outline-none focus:ring-2 focus:ring-yellow-500"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 font-bold text-lg"
              />
              <Field
                className="w-full p-4 bg-nightGreen rounded text-white outline-none focus:ring-2 focus:ring-yellow-500"
                type="password"
                name="password"
                placeholder="New Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 font-bold text-lg"
              />
              <Field
                className="w-full p-4 bg-nightGreen rounded text-white outline-none focus:ring-2 focus:ring-yellow-500"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-600 font-bold text-lg"
              />
              <button
                type="submit"
                className="w-full p-4 bg-white hover:bg-nightGreen hover:text-white rounded text-nightGreen font-bold transition duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Sign Up"}
              </button>
              <p className="pt-2 text-center text-white text-lg">
                Already have an account?{" "}
                <Link to="/login" className="font-bold hover:underline">
                  Sign In
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
