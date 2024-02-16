import React, { useState } from "react";

function EditSchoolOverview() {
  // State variables to store input values
  const [schoolProfilePhoto, setProfilePhoto] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [schoolLevel, setSchoolLevel] = useState("");
  const [schoolSystem, setSchoolSystem] = useState("");
  const [schoolMedium, setSchoolMedium] = useState("");
  const [schoolingType, setSchoolingType] = useState("");
  const [accreditations, setAccreditations] = useState("");
  const [enrolledStudents, setEnrolledStudents] = useState("");
  const [numberOfTeachers, setNumberOfTeachers] = useState("");
  const [averageClassSize, setAverageClassSize] = useState("");
  const [studentTeacherRatio, setStudentTeacherRatio] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data or update state as needed
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">School Basic Details</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="profilePhoto" className="block mb-1">
            Profile Photo:
          </label>
          <input
            type="file"
            id="profilePhoto"
            onChange={(e) => setProfilePhoto(e.target.files[0])}
            className="input w-full"
          />
        </div>

        <div>
          <label htmlFor="coverPhoto" className="block mb-1">
            Cover Photo:
          </label>
          <input
            type="file"
            id="coverPhoto"
            onChange={(e) => setCoverPhoto(e.target.files[0])}
            className="input w-full"
          />
        </div>

        <div className="col-span-2">
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </div>
        <div className="col-span-1">
          <label htmlFor="schoolLevel" className="block mb-1">
            School Level:
          </label>
          <input
            type="text"
            id="schoolLevel"
            value={schoolLevel}
            onChange={(e) => setSchoolLevel(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="schoolSystem" className="block mb-1">
            School System:
          </label>
          <input
            type="text"
            id="schoolSystem"
            value={schoolSystem}
            onChange={(e) => setSchoolSystem(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="schoolMedium" className="block mb-1">
            School Medium:
          </label>
          <input
            type="text"
            id="schoolMedium"
            value={schoolMedium}
            onChange={(e) => setSchoolMedium(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="schoolingType" className="block mb-1">
            Schooling Type:
          </label>
          <input
            type="text"
            id="schoolingType"
            value={schoolingType}
            onChange={(e) => setSchoolingType(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="accreditations" className="block mb-1">
            Accreditations:
          </label>
          <input
            type="text"
            id="accreditations"
            value={accreditations}
            onChange={(e) => setAccreditations(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="enrolledStudents" className="block mb-1">
            Enrolled Students:
          </label>
          <input
            type="text"
            id="enrolledStudents"
            value={enrolledStudents}
            onChange={(e) => setEnrolledStudents(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="numberOfTeachers" className="block mb-1">
            Number of Teachers:
          </label>
          <input
            type="text"
            id="numberOfTeachers"
            value={numberOfTeachers}
            onChange={(e) => setNumberOfTeachers(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="averageClassSize" className="block mb-1">
            Average Class Size:
          </label>
          <input
            type="text"
            id="averageClassSize"
            value={averageClassSize}
            onChange={(e) => setAverageClassSize(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="studentTeacherRatio" className="block mb-1">
            Student Teacher Ratio:
          </label>
          <input
            type="text"
            id="studentTeacherRatio"
            value={studentTeacherRatio}
            onChange={(e) => setStudentTeacherRatio(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="col-span-2">
          <button type="submit" className="btn btn-primary w-full">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditSchoolOverview;
