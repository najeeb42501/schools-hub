import React from "react";

function SchoolOverview({ data }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">OVERVIEW:</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="sm:w-1/2 card card-side bg-base-100 shadow-xl my-5 p-6">
          <ul>
            <li>• School Level: {data.level}</li>
            <li>• School System: {data.system}</li>
            <li>• School Medium: {data.medium}</li>
            <li>• Schooling Type: {data.schoolingType}</li>
            <li>• Accreditations: {data.accreditations}</li>
          </ul>
        </div>
        <div className="sm:w-1/2 card card-side bg-base-100 shadow-xl my-5 p-6">
          <ul>
            <li>• Enrolled Students: {data.enrolledStudents} </li>
            <li>• Number of Teachers: {data.numberOfTeachers}</li>
            <li>• Average Class Size: {data.averageClassSize}</li>
            <li>• Student Teacher Ratio: {data.studentTeacherRatio}</li>
          </ul>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl my-5">
        <figure>
          <img src="https://www.soe.edu.pk/profile_images/principal.jpg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Mr.Jamal Uddin Unar </h2>
          <h2 className="font-bold  ">Principal</h2>
          <p>
            I visualize a terrific and excellent future of School of Excellence
            which would gratify the needs of thousands of young students whose
            rich intellectual potentialities would be allowed to explore
            properly in SOE. The dynamic minds of the region will certainly
            contribute to make SOE a true seat of learning and sanctuary of
            peace, serenity and harmony.
          </p>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl my-5">
        <figure>
          <img src="https://www.soe.edu.pk/profile_images/servech.jpg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Mr.Jamal Uddin Unar </h2>
          <h2 className="font-bold  ">Vice Pricipal</h2>
          <p>
            The quest of purposeful knowledge symbolizes the only object of
            education that can’t be substituted by any other aim. As a student
            here, you are a member of a privileged and distinguished cluster.
            Learning at our school is based on the fundamental principles of
            life. Teaching the children to be courageous, confident,
            disciplined, responsible and loyal one is the first precedence at
            SOE. Education at our school provides a foundation for a lifetime
            learning to become radiant stars of future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SchoolOverview;
