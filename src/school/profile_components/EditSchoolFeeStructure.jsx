import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditSchoolFeeStructure = ({ id }) => {
  const [feeStructureList, setFeeStructureList] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/getSchoolData/school-fee-structure/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Res Data Fee : ", data);
        setFeeStructureList(data.feeList);
        setIsDataFetched(true);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const validationSchema = Yup.object().shape({
    className: Yup.string().required("Class name is required"),
    depositFee: Yup.number()
      .typeError("Deposit fee must be a number")
      .positive("Deposit fee must be a positive number")
      .required("Deposit fee is required"),
    admissionFee: Yup.number()
      .typeError("Admission fee must be a number")
      .positive("Admission fee must be a positive number")
      .required("Admission fee is required"),
    tuitionFee: Yup.number()
      .typeError("Tuition fee must be a number")
      .positive("Tuition fee must be a positive number")
      .required("Tuition fee is required"),
    examFee: Yup.number()
      .typeError("Exam fee must be a number")
      .positive("Exam fee must be a positive number")
      .required("Exam fee is required"),
  });

  const handleAddFee = (values, { resetForm, setSubmitting }) => {
    console.log("add data");
    setFeeStructureList([...feeStructureList, values]);
    resetForm();
    setSubmitting(false);
  };

  const handleSubmit = async () => {
    console.log("handle submit data call", feeStructureList);
    try {
      const response = await fetch(
        `http://localhost:5000/editSchoolProfile/save-school-fee-structure/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feeStructureList),
        }
      );
      if (response.ok) {
        console.log("Data saved successfully");
        // fetchData();
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleSort = () => {
    const sortedList = [...feeStructureList].sort((a, b) =>
      a.className.localeCompare(b.className)
    );
    setFeeStructureList(sortedList);
  };

  const handleDelete = (index) => {
    const updatedList = [...feeStructureList];
    updatedList.splice(index, 1);
    setFeeStructureList(updatedList);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">School Fee Structure</h1>
      <p className="text-gray-600 mb-8">
        Please add data for the school fee structure below:
      </p>
      <Formik
        initialValues={{
          className: "",
          depositFee: "",
          admissionFee: "",
          tuitionFee: "",
          examFee: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleAddFee}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-wrap mb-8">
            <Field
              type="text"
              name="className"
              placeholder="Class Name"
              className="input-field mr-2 mb-4"
            />
            <ErrorMessage
              name="className"
              component="div"
              className="text-red-500 text-xs italic"
            />

            <Field
              type="text"
              name="depositFee"
              placeholder="Deposit Fee"
              className="input-field mr-2 mb-4"
            />
            <ErrorMessage
              name="depositFee"
              component="div"
              className="text-red-500 text-xs italic"
            />

            <Field
              type="text"
              name="admissionFee"
              placeholder="Admission Fee"
              className="input-field mr-2 mb-4"
            />
            <ErrorMessage
              name="admissionFee"
              component="div"
              className="text-red-500 text-xs italic"
            />

            <Field
              type="text"
              name="tuitionFee"
              placeholder="Tuition Fee"
              className="input-field mr-2 mb-4"
            />
            <ErrorMessage
              name="tuitionFee"
              component="div"
              className="text-red-500 text-xs italic"
            />

            <Field
              type="text"
              name="examFee"
              placeholder="Exam Fee"
              className="input-field mr-2 mb-4"
            />
            <ErrorMessage
              name="examFee"
              component="div"
              className="text-red-500 text-xs italic"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Add"}
            </button>
          </Form>
        )}
      </Formik>

      <hr className="my-8" />

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Fee Structure Table</h2>
        <button onClick={handleSort} className="btn-submit">
          Sort by Class Name
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Class Name</th>
            <th className="border border-gray-300 px-4 py-2">Deposit Fee</th>
            <th className="border border-gray-300 px-4 py-2">Admission Fee</th>
            <th className="border border-gray-300 px-4 py-2">Tuition Fee</th>
            <th className="border border-gray-300 px-4 py-2">Exam Fee</th>
          </tr>
        </thead>
        <tbody>
          {isDataFetched &&
            feeStructureList &&
            feeStructureList.map((feeStructure, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border border-gray-300 px-4 py-2">
                  {feeStructure.className}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {feeStructure.depositFee}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {feeStructure.admissionFee}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {feeStructure.tuitionFee}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {feeStructure.examFee}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn-submit"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        type="submit"
        onClick={handleSubmit}
      >
        Save
      </button>
    </div>
  );
};

export default EditSchoolFeeStructure;
