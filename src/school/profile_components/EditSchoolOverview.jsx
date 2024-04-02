import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  schoolProfilePhoto: Yup.mixed().required("Profile Photo is required"),
  coverPhoto: Yup.mixed().required("Cover Photo is required"),
  schoolLevel: Yup.string().required("School Level is required"),
  schoolSystem: Yup.string().required("School System is required"),
  schoolMedium: Yup.string().required("School Medium is required"),
  schoolingType: Yup.string().required("Schooling Type is required"),
  accreditations: Yup.string().required("Accreditations is required"),
  enrolledStudents: Yup.number()
    .required("Enrolled Students is required")
    .positive("Enrolled Students must be a positive number"),
  numberOfTeachers: Yup.number()
    .required("Number of Teachers is required")
    .positive("Number of Teachers must be a positive number"),
  averageClassSize: Yup.number()
    .required("Average Class Size is required")
    .positive("Average Class Size must be a positive number"),
  studentTeacherRatio: Yup.number()
    .required("Student Teacher Ratio is required")
    .positive("Student Teacher Ratio must be a positive number"),
});

function EditSchoolOverview({ id }) {
  // console.log("school id : " + id);

  //const [schoolData, setSchoolData] = useState({ schoolID: id });
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [initialData, setInitialData] = useState({
    _id: "",
    schoolId: id,
    schoolName: "",
    schoolProfilePhoto: null,
    coverPhoto: null,
    schoolLevel: "",
    schoolSystem: "",
    schoolMedium: "",
    schoolingType: "",
    accreditations: "",
    enrolledStudents: "",
    numberOfTeachers: "",
    averageClassSize: "",
    studentTeacherRatio: "",
  });

  useEffect(() => {
    const fetchSchoolData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-overview/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Response DATA SO : ", data); // Log the data to verify it's a JavaScript object

        setIsDataFetched(true);
        setInitialData({
          _id: data._id || "",
          schoolId: id,
          schoolName: data.schoolName || "",
          schoolProfilePhoto: null,
          coverPhoto: null,
          schoolLevel: data.schoolLevel || "",
          schoolSystem: data.schoolSystem || "",
          schoolMedium: data.schoolMedium || "",
          schoolingType: data.schoolingType || "",
          accreditations: data.accreditations || "",
          enrolledStudents: data.enrolledStudents || "",
          numberOfTeachers: data.numberOfTeachers || "",
          averageClassSize: data.averageClassSize || "",
          studentTeacherRatio: data.studentTeacherRatio || "",
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSchoolData();
  }, [isDataFetched]);

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Submitting form", values);
    console.log("Handle Submit Call");
    const formData = new FormData();
    Object.entries(values).map(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.put(
        `http://localhost:5000/editSchoolProfile/save-so-data/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response) {
        alert("School profile updated successfully");
      } else {
        alert("Failed to update school profile");
      }

      // Simulate an API call to save or update the data
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating a delay of 1 second
      console.log("Form data updated successfully");

      // Reset form after submission
      setSubmitting(false);
    } catch (error) {
      console.error("Error processing form data:", error);
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">School Basic Details</h1>
      {
        <Formik
          enableReinitialize={true}
          initialValues={initialData}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="schoolName" className="block mb-1">
                  School Name:
                </label>
                <Field
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="schoolName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label htmlFor="schoolProfilePhoto" className="block mb-1">
                  Profile Photo:
                </label>

                <input
                  type="file"
                  id="schoolProfilePhoto"
                  name="schoolProfilePhoto"
                  className=""
                  onChange={(e) =>
                    formik.setFieldValue(
                      "schoolProfilePhoto",
                      e.currentTarget.files[0]
                    )
                  }
                />
                <img
                  src={`http://localhost:5000/images/${initialData.schoolProfilePhoto}`}
                  alt=""
                  srcset=""
                />
                <ErrorMessage
                  name="schoolProfilePhoto"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label htmlFor="coverPhoto" className="block mb-1">
                  Cover Photo:
                </label>

                <input
                  type="file"
                  id="coverPhoto"
                  name="coverPhoto"
                  className="input w-full"
                  onChange={(e) =>
                    formik.setFieldValue("coverPhoto", e.currentTarget.files[0])
                  }
                />
                <ErrorMessage
                  name="coverPhoto"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="schoolLevel" className="block mb-1">
                  School Level:
                </label>
                <Field
                  type="text"
                  id="schoolLevel"
                  name="schoolLevel"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="schoolLevel"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="schoolSystem" className="block mb-1">
                  School System:
                </label>
                <Field
                  type="text"
                  id="schoolSystem"
                  name="schoolSystem"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="schoolSystem"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="schoolMedium" className="block mb-1">
                  School Medium:
                </label>
                <Field
                  type="text"
                  id="schoolMedium"
                  name="schoolMedium"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="schoolMedium"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="schoolingType" className="block mb-1">
                  Schooling Type:
                </label>
                <Field
                  type="text"
                  id="schoolingType"
                  name="schoolingType"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="schoolingType"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="accreditations" className="block mb-1">
                  Accreditations:
                </label>
                <Field
                  type="text"
                  id="accreditations"
                  name="accreditations"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="accreditations"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="enrolledStudents" className="block mb-1">
                  Enrolled Students:
                </label>
                <Field
                  type="text"
                  id="enrolledStudents"
                  name="enrolledStudents"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="enrolledStudents"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="numberOfTeachers" className="block mb-1">
                  Number of Teachers:
                </label>
                <Field
                  type="text"
                  id="numberOfTeachers"
                  name="numberOfTeachers"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="numberOfTeachers"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="averageClassSize" className="block mb-1">
                  Average Class Size:
                </label>
                <Field
                  type="text"
                  id="averageClassSize"
                  name="averageClassSize"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="averageClassSize"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="studentTeacherRatio" className="block mb-1">
                  Student Teacher Ratio:
                </label>
                <Field
                  type="text"
                  id="studentTeacherRatio"
                  name="studentTeacherRatio"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="studentTeacherRatio"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="col-span-2 px-80">
                <button
                  type="submit"
                  className="btn bg-blue-500 text-white border-blue-700 hover:bg-blue-700 w-full"
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      }
    </div>
  );
}

export default EditSchoolOverview;
