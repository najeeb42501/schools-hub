import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../state/ContextAPI";

function Login() {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      dispatch({ type: "SET_USER", payload: data.user });
      navigate(
        data.user.type === "user"
          ? "/schools"
          : data.user.type === "school"
          ? "/editschoolprofile"
          : "/admin"
      );
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-no-repeat bg-cover bg-center md:bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588075592405-d3d4f0846961?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-cariGreen bg-opacity-70 p-8 md:max-w-md w-full rounded-lg">
        <h1 className="text-white text-3xl font-bold text-center mb-6">
          Sign In
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
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
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 font-bold text-lg"
              />
              <button
                type="submit"
                className="w-full p-4 bg-gray-100 hover:bg-nightGreen hover:text-white rounded text-nightGreen font-bold text-lg transition duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
              <div className="flex justify-between items-center text-sm text-white">
                <label className="flex items-center font-bold ">
                  <input type="checkbox" className="mr-2 " /> Remember me
                </label>
                <Link to="/help" className="hover:underline font-bold">
                  Need Help?
                </Link>
              </div>
              <p className="pt-8 text-center text-white text-lg">
                New to platform?{" "}
                <Link to="/signup" className="font-bold hover:underline">
                  Sign Up
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
