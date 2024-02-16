import React, { useState } from "react";

function EditSchoolFeeStructure({ onSubmit }) {
  const [classData, setClassData] = useState({
    className: "",
    depositFee: "",
    admissionFee: "",
    tuitionFee: "",
    examFee: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(classData);
    setClassData({
      className: "",
      depositFee: "",
      admissionFee: "",
      tuitionFee: "",
      examFee: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <h1 className="text-3xl font-bold py-4">Enter Fee Structure</h1>
      <input
        type="text"
        name="className"
        placeholder="Class Name"
        value={classData.className}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="text"
        name="depositFee"
        placeholder="Deposit Fee"
        value={classData.depositFee}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="text"
        name="admissionFee"
        placeholder="Admission Fee"
        value={classData.admissionFee}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="text"
        name="tuitionFee"
        placeholder="Tuition Fee"
        value={classData.tuitionFee}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="text"
        name="examFee"
        placeholder="Exam Fee"
        value={classData.examFee}
        onChange={handleChange}
        className="input-field"
      />
      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
}

export default EditSchoolFeeStructure;
