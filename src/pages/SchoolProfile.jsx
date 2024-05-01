import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SchoolAbout from "../components/schoolprofile_preview_components/SchoolAbout";
import SchoolFaculty from "../components/schoolprofile_preview_components/SchoolFaculty";
import SchoolGallery from "../components/schoolprofile_preview_components/SchoolGallery";
import SchoolContact from "../components/schoolprofile_preview_components/SchoolContact";
import SchoolCurriculum from "../components/schoolprofile_preview_components/SchoolCurriculum";
import SchoolFeeStructure from "../components/schoolprofile_preview_components/SchoolFeeStructure";
import SchoolAdmission from "../components/schoolprofile_preview_components/SchoolAdmission";
import SchoolFacilities from "../components/schoolprofile_preview_components/SchoolFacilities";
import SchoolOverview from "../components/schoolprofile_preview_components/SchoolOverview";
import SchoolReviews from "../components/schoolprofile_preview_components/SchoolReviews";

const base_url = "http://localhost:5000/images/";

function SchoolProfile() {
  const { schoolID } = useParams();
  const [component, setComponent] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("school id : ", schoolID);

  const [schoolOverviewData, setSchoolOverviewData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-overview/${schoolID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schools data");
        }
        const data = await response.json();
        console.log("School Overview Data Res: ", data);
        // console.log("Schools : ", data);
        setSchoolOverviewData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching schools data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  const facultyDetails = [
    {
      name: "Mr. Muhammad Kashif Mughal",
      image:
        "https://www.soe.edu.pk/profile_images/Mr.%20Muhammad%20Kashif%20Mughal.jpg",
      position: "Lecturer in English",
      description:
        "Mr. Muhammad Kashif Mughal. a veteran, dedicated, professional and debonair icon, hails from Sukkur. He did his MA in Englsih Literature from SALU khairpur with distinction. He is rendering his services as Head of Department of Englsih Faculty at School of Excellence. He is ambitious and eager to reform educational drawbacks with innovative strategies",
    },
    {
      name: "Mr.Abdul Haleem Gilal",
      image:
        "https://www.soe.edu.pk/profile_images/Mr.Abdul%20Haleem%20Gilal.jpg",
      position: "Math Teacher",
      description:
        "Abdul Haleem Gilal is a dedicated teacher at School of Excellence.He has done his BS(MATHEMATICS) and has teaching experience of three years.He is now rendering his services as a Teacher of Mathematics in our school.",
    },
    {
      name: "Mr. Arshad Ali Danwer",
      image:
        "https://www.soe.edu.pk/profile_images/Mr.%20Arshad%20Ali%20Danwer.jpg",
      position: "Lecturer in English",
      description:
        "Having done BSc Microbiology,Masters in English,Diploma in science of education. Diploma in Hotel Management and sixteen years working experience as a teacher.",
    },
    {
      name: "Mr. Muhammad Kashif Mughal",
      image:
        "https://www.soe.edu.pk/profile_images/Mr.%20Muhammad%20Kashif%20Mughal.jpg",
      position: "Lecturer in English",
      description:
        "Mr. Muhammad Kashif Mughal. a veteran, dedicated, professional and debonair icon, hails from Sukkur. He did his MA in Englsih Literature from SALU khairpur with distinction. He is rendering his services as Head of Department of Englsih Faculty at School of Excellence. He is ambitious and eager to reform educational drawbacks with innovative strategies",
    },
    {
      name: "Mr.Daim din Tanwari",
      image:
        "https://www.soe.edu.pk/profile_images/Mr.Daim%20din%20Tanwari.jpg",
      position: "Lecturer Sindhi/Urdu",
      description:
        "Mr. Daim din is an M.A Sindhi and M.A Islamiat.He is a dynamic,dedicated and hardworking teacher.He has a five years teaching experience.",
    },
  ];

  const schoolImages = [
    "https://www.soe.edu.pk/images/albums/School%20of%20Excellence/img%20(2).JPG",
    "https://www.soe.edu.pk/images/albums/School%20of%20Excellence/img%20(1).JPG",
    "https://www.soe.edu.pk/images/albums/School%20of%20Excellence/img%20(9).JPG",
    "https://www.soe.edu.pk/images/albums/School%20of%20Excellence/img%20(4).JPG",
  ];

  const buttonStyle = (value) =>
    `hover:bg-nightGreen text-white font-semibold p-4 w-full ${
      component === value ? "bg-nightGreen" : "bg-cariGreen"
    }`;

  const renderComponent = () => {
    switch (component) {
      case "about":
        return <SchoolAbout schoolID={schoolID} />;
      case "admission":
        return <SchoolAdmission schoolID={schoolID} />;
      case "faculty":
        return <SchoolFaculty data={facultyDetails} schoolID={schoolID} />;
      case "curriculum":
        return <SchoolCurriculum schoolID={schoolID} />;
      case "fee":
        return <SchoolFeeStructure schoolID={schoolID} />;
      case "gallery":
        return <SchoolGallery images={schoolImages} schoolID={schoolID} />;
      case "facilities":
        return <SchoolFacilities schoolID={schoolID} />;
      case "contact":
        return <SchoolContact schoolID={schoolID} />;
      case "reviews":
        return <SchoolReviews />;
      default:
        return <SchoolOverview data={schoolOverviewData} schoolID={schoolID} />;
    }
  };

  const toggleSidebar = () => setIsMenuOpen(!isMenuOpen);

  // Function to determine button style
  // const buttonStyle = (value) => {
  //   return `hover:bg-white p-4 border border-black ${
  //     component === value ? "bg-white" : ""
  //   }`;
  // };

  return (
    <>
      <div className="bg-gray-100">
        {/* Cover and Profile Photo */}
        <div className="relative">
          <img
            className="w-full h-64 z-[-1] object-fill"
            src={`${base_url}` + `${schoolOverviewData.coverPhoto}`}
            alt="School Cover"
          />
          <div className="absolute bottom-10 transform translate-y-1/2 left-1/2 -translate-x-1/2">
            <img
              className="rounded-full w-40 h-40 md:w-60 md:h-60 border-4 border-white"
              src={`${base_url}` + `${schoolOverviewData.schoolProfilePhoto}`}
              alt="School Logo"
            />
          </div>
        </div>
        <div className="bg-nightGreen">
          <h1 className="text-2xl pt-24 pb-4 md:text-5xl font-extrabold text-center text-white ">
            {schoolOverviewData.schoolName}
          </h1>
        </div>
        <div className="md:hidden fixed top-0 left-0 z-50">
          <button
            className="p-4 bg-nightGreen text-white"
            onClick={toggleSidebar}
          >
            Menu
          </button>
        </div>
        {/* Sidebar + Content */}
        <div className={`md:flex  md:items-start`}>
          {/* Updated Sidebar with dynamic classes for showing/hiding */}
          <div
            className={`bg-cariGreen text-blue-100 w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
            style={{ height: "" }}
          >
            {/* Navigation Buttons... */}
            <button
              className={buttonStyle("overview")}
              onClick={() => setComponent("overview")}
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

          {/* Main Content */}
          <div className="flex-1 text-2xl font-bold">{renderComponent()}</div>
        </div>
      </div>
    </>
  );
}

export default SchoolProfile;
