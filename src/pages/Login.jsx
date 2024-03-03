import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginPageSideComponent from "../components/LoginPageSideComponent";
import { useAppContext } from "../state/ContextAPI";

function Login() {
  const { state, dispatch } = useAppContext();
  console.log("Login Page State", state);

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
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Response After Login : ", data);
      dispatch({ type: "SET_USER", payload: data.user });
      alert(data.message); // Show success message
      // Redirect to dashboard or another page
      if (data.user.type === "user") {
        navigate("/schools");
      } else if (data.user.type == "school") {
        navigate("/editschoolprofile");
      } else if (data.user.type == "admin") {
        navigate("/admin");
      } else {
        console.log("Error login page");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again."); // Show error message
    }
  };

  return (
    <div className="h-full w-full border-black border">
      <div className=" flex  h-[660px] ">
        <LoginPageSideComponent />
        <div className="flex flex-col justify-center items-center border w-full md:w-3/5  pt-10">
          <h1 className="text-3xl font-bold ">Sign In</h1>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="w-[300px] flex flex-col justify-center py-10">
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
                  placeholder="Password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
                <button
                  type="submit"
                  className="btn glass bg-yellow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </button>
                <div className="flex justify-between text-small text-gray-500">
                  <p>
                    <input className="mr-2" type="checkbox" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8 ">
                  <span className="text-gray-500">New to platform?</span>
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
