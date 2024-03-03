import React from "react";

function SchoolAbout({ data }) {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold py-4">ABOUT SCHOOL</h1>
        <p>
          The Education has been destroyed by many well known factors in our
          society. It has changed the mental approach of students and parents
          that there is no way to success without following the all existing
          malpractices. Keeping above facts in view, It was thought by well
          wishers and senior educationist of Sukkur city to develop School
          system where quality education on affording cost should be provided
          and students/parents understanding should be changed that success can
          only be achieved by getting quality education with innovative ways
          without malpractices.
        </p>
      </div>
      <div class="card card-side bg-base-100 shadow-xl my-5">
        <figure>
          <img
            className=""
            src="https://www.soe.edu.pk/profile_images/principal.jpg"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Mr.Jamal Uddin Unar </h2>
          <h2 class="font-bold  ">Principal</h2>
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
    </>
  );
}

export default SchoolAbout;
