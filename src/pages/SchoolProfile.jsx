import React, { useState } from "react";
import SchoolAbout from "../components/SchoolAbout";
import SchoolFaculty from "../components/SchoolFaculty";
import SchoolGallery from "../components/SchoolGallery";
import SchoolContact from "../components/SchoolContact";
import SchoolCurriculum from "../components/SchoolCurriculum";
import SchoolFeeStructure from "../components/SchoolFeeStructure";
import SchoolAdmission from "../components/SchoolAdmission";
import SchoolFacilities from "../components/SchoolFacilities";
import SchoolOverview from "../components/SchoolOverview";
import SchoolReviews from "../components/SchoolReviews";

function SchoolProfile() {
  const [component, setComponent] = useState("overview");

  const schoolGenInfo = {
    level: "Secondary/Primary",
    system: "Sindh Board Matriculation",
    medium: "English",
    schoolingType: "Boys / Girls",
    accreditations: ["Sindh board"],
    averageClassSize: "20x24",
    enrolledStudents: 650,
    numberOfTeachers: 40,
    studentTeacherRatio: "65/4",
  };

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

  const curriculumData = [
    {
      class: "Class 1",
      subjects: ["Math", "Science", "History", "English", "Urdu"],
    },
    {
      class: "Class 2",
      subjects: ["Geography", "Physics", "Biology"],
    },
    {
      class: "Class 3",
      subjects: ["Geography", "Physics", "Biology"],
    },
    {
      class: "Class 4",
      subjects: ["Geography", "Physics", "Biology"],
    },
    {
      class: "Class 5",
      subjects: ["Geography", "Physics", "Biology"],
    },
  ];

  const schoolFeeStructure = [
    {
      className: "PG - Nursery - KG",
      depositFee: 10000,
      admissionFee: 5000,
      tuitionFee: 3800,
      examFee: 2000,
    },
    {
      className: "1 - 5",
      depositFee: 10000,
      admissionFee: 5000,
      tuitionFee: 3900,
      examFee: 2000,
    },
    {
      className: "6 - 8",
      depositFee: 10000,
      admissionFee: 5000,
      tuitionFee: 4300,
      examFee: 2000,
    },
    {
      className: "9 - 10",
      depositFee: 15000,
      admissionFee: 8000,
      tuitionFee: 5400,
      examFee: 2000,
    },
  ];

  const schoolImages = [
    "https://www.soe.edu.pk/images/albums/School%20of%20Excellence/img%20(2).JPG",
    "https://www.soe.edu.pk/images/albums/School%20of%20Excellence/img%20(1).JPG",
    "https://www.soe.edu.pk/images/albums/School%20of%20Excellence/img%20(9).JPG",
    "https://www.soe.edu.pk/images/albums/School%20of%20Excellence/img%20(4).JPG",
  ];

  const schoolFacilities = [
    {
      name: "Library",
      description:
        "A well-stocked library with a wide range of books for all ages.",
      availability:
        "Specific class timing for reading class for students weekly.",
    },
    {
      name: "Science Laboratory",
      description:
        "Fully equipped science laboratory for practical experiments.",
      availability:
        "Used for science classes and experiments under supervision.",
    },
    {
      name: "Computer",
      description:
        "Personal computer with required software for student to learn how to use them for their purpose.",
      availability: "Weeky classes ",
    },
    {
      name: "Auditorium",
      description:
        "A spacious auditorium for school events, performances, and presentations.",
      availability:
        "Available for school events and activities upon reservation.",
    },
    {
      name: "Shop",
      description:
        "A cafeteria providing healthy and hygienic meals for students and staff.",
      availability: "Open during break times for snacks and lunch.",
    },
  ];

  // Sample data for school activities (as an array of objects)
  const schoolActivities = [
    {
      name: "Sport events",
      description: "We organize sport event for student enjoyments",
      schedule: "Most probably we do it yearly.",
    },
  ];

  const schoolReviews = [
    {
      reviewerName: "Najeeb",
      date: "November 15, 2023",
      comment: "Great school with amazing facilities. My child loves it here!",
      rating: 5,
      avatar: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      reviewerName: "Qasim",
      date: "October 20, 2023",
      comment: "Good teachers and a supportive environment for students.",
      rating: 4,
      avatar: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    // Add more reviews as needed
  ];

  const renderComponent = () => {
    switch (component) {
      case "about":
        return <SchoolAbout />;
      case "admission":
        return <SchoolAdmission />;
      case "faculty":
        return <SchoolFaculty data={facultyDetails} />;
      case "curriculum":
        return <SchoolCurriculum data={curriculumData} />;
      case "fee":
        return <SchoolFeeStructure data={schoolFeeStructure} />;
      case "gallery":
        return <SchoolGallery images={schoolImages} />;
      case "facilities":
        return (
          <SchoolFacilities
            facilities={schoolFacilities}
            activities={schoolActivities}
          />
        );
      case "contact":
        return <SchoolContact />;
      case "reviews":
        return <SchoolReviews reviews={schoolReviews} />;
      default:
        return <SchoolOverview data={schoolGenInfo} />;
    }
  };

  // Function to determine button style
  const buttonStyle = (value) => {
    return `hover:bg-white p-4 border border-black ${
      component === value ? "bg-white" : ""
    }`;
  };

  return (
    <>
      <div className="relative text-center justify-center mb-24">
        <img
          className="w-full h-[10rem] md:h-[20rem] object-cover"
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute bottom-[-30%] left-1/2 transform -translate-x-1/2">
          <img
            className="rounded-full border border-black w-52 md:w-80"
            src="https://png.pngtree.com/template/20190515/ourmid/pngtree-one-word-school-logo-image_149831.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 m-10">
        <h1 className="text-5xl font-bold">The City School</h1>
        <h1>Seconday School / Primary | Boys & Girls</h1>
        {/* <i> Founded: SINCE 1999 </i> */}
        <h1 className="font-xl font-bold"> Mission:</h1>
        <p className="text-center">
          Mission of SOE is to establish, sustain and enhance itself as a
          quality-centric educational institution that provides excellent
          academic environment and opportunities for creating educated,
          productive, and responsible citizens of Pakistan through intellectual,
          and personal growth
        </p>
      </div>
      <div className="grid grid-cols-6">
        <div className="flex flex-col col-span-1 bg-gray-400  h-full">
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
          <button
            className={buttonStyle("faculty")}
            onClick={(e) => setComponent(e.target.value)}
            value="faculty"
          >
            FACULTY
          </button>
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
    </>
  );
}

export default SchoolProfile;
