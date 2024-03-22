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
    <div className="h-full w-full border-black border">
      <div className=" flex   h-[660px]">
        <LoginPageSideComponent />
        <div className="flex flex-col justify-center items-center border w-full md:w-3/5 pt-10 grow">
          <h1 className="text-2xl text-center md:text-3xl font-bold ">
            Register Yourself On Our Platform!
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-[300px] flex flex-col justify-center py-10">
              <Field
                className=" p-3 my-2 bg-gray-100 rounded "
                type="text"
                placeholder="Full Name"
                name="username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500"
              />
              <Field
                className=" p-3 my-2 bg-gray-100 rounded "
                type="text"
                placeholder="City"
                name="city"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500"
              />
              <Field
                className=" p-3 my-2 bg-gray-100 rounded "
                type="email"
                placeholder="Email"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
              <Field
                className=" p-3 my-2 bg-gray-100 rounded "
                type="password"
                placeholder="New Password"
                name="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
              <Field
                className=" p-3 my-2 bg-gray-100 rounded "
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500"
              />
              <button
                type="submit"
                className="bg-yellow hover:bg-black hover:text-yellow py-3 my-6 rounded font-bold"
              >
                Sign Up
              </button>
              <div className="flex justify-between text-small text-gray-500">
                <p>
                  <input className="mr-2" type="checkbox" /> Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8 ">
                <span className="text-gray-500">Already have an account?</span>
                <Link to="/login" className="text-yellow">
                  Sign In
                </Link>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Signup;
