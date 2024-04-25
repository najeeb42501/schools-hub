import React from "react";
import { useState } from "react";
import EditAboutSchool from "./profile_components/EditAboutSchool";
import EditSchoolAdmission from "./profile_components/EditSchoolAdmission";
import EditSchoolFaculty from "./profile_components/EditSchoolFaculty";
import EditSchoolContact from "./profile_components/EditSchoolContact";
import EditSchoolCurriculum from "./profile_components/EditSchoolCurriculum";
import EditSchoolFacilities from "./profile_components/EditSchoolFacilities";
import EditSchoolGallery from "./profile_components/EditSchoolGallery";
import EditSchoolFeeStructure from "./profile_components/EditSchoolFeeStructure";
import EditSchoolOverview from "./profile_components/EditSchoolOverview";
import SchoolReviews from "../components/schoolprofile_preview_components/SchoolReviews";
import { useAppContext } from "../state/ContextAPI";

function EditSchoolProfile() {
  const { state } = useAppContext();
  const school_id = state._id;
  const [component, setComponent] = useState("overview");

  const renderComponent = () => {
    switch (component) {
      case "about":
        return <EditAboutSchool id={school_id} />;
      case "admission":
        return <EditSchoolAdmission id={school_id} />;
      case "faculty":
        return <EditSchoolFaculty id={school_id} />;
      case "curriculum":
        return <EditSchoolCurriculum id={school_id} />;
      case "fee":
        return <EditSchoolFeeStructure id={school_id} />;
      case "gallery":
        return <EditSchoolGallery id={school_id} />;
      case "facilities":
        return <EditSchoolFacilities id={school_id} />;
      case "contact":
        return <EditSchoolContact id={school_id} />;
      case "reviews":
        return <SchoolReviews />;
      default:
        return <EditSchoolOverview id={school_id} />;
    }
  };

  // Function to determine button style
  const buttonStyle = (value) => {
    return `hover:bg-gray-700 p-4 border border-black ${
      component === value ? "bg-yellow" : ""
    }`;
  };
  return (
    <div>
      <div className="grid grid-cols-6">
        <div className="flex flex-col col-span-1 bg-gray-800 text-white h-full">
          <button
            className={buttonStyle("overview")}
            onClick={(e) => setComponent(e.target.value)}
            value="overview"
          >
            OVERVIEW
          </button>
          <button
            className={buttonStyle("admission")}
            onClick={(e) => setComponent(e.target.value)}
            value="admission"
          >
            ADMISSION DETAILS
          </button>
          {/* <button
            className={buttonStyle("faculty")}
            onClick={(e) => setComponent(e.target.value)}
            value="faculty"
          >
            FACULTY
          </button> */}
          <button
            className={buttonStyle("curriculum")}
            onClick={(e) => setComponent(e.target.value)}
            value="curriculum"
          >
            CURRICULUM
          </button>

          <button
            className={buttonStyle("fee")}
            onClick={(e) => setComponent(e.target.value)}
            value="fee"
          >
            FEE STRUCTURE
          </button>
          <button
            className={buttonStyle("gallery")}
            onClick={(e) => setComponent(e.target.value)}
            value="gallery"
          >
            GALLERY
          </button>
          <button
            className={buttonStyle("facilities")}
            onClick={(e) => setComponent(e.target.value)}
            value="facilities"
          >
            Facilities & Activities
          </button>
          <button
            className={buttonStyle("about")}
            onClick={(e) => setComponent(e.target.value)}
            value="about"
          >
            ABOUT
          </button>
          <button
            className={buttonStyle("contact")}
            onClick={(e) => setComponent(e.target.value)}
            value="contact"
          >
            CONTACT
          </button>
          <button
            className={buttonStyle("reviews")}
            onClick={(e) => setComponent(e.target.value)}
            value="reviews"
          >
            Reviews & Testimonials
          </button>
        </div>
        <div className="col-span-5 px-4 py-2 md:px-24 md:py-10 ">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default EditSchoolProfile;
