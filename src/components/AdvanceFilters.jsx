import React, { useState } from "react";

function AdvanceFilters() {
  const [educationBoard, setEducationBoard] = useState([]);
  const [curriculumFollowed, setCurriculumFollowed] = useState([]);
  const [schoolType, setSchoolType] = useState([]);
  const [schoolMedium, setSchoolMedium] = useState([]);
  const [schoolFeeRange, setSchoolFeeRange] = useState("");
  const [schoolSizeRange, setSchoolSizeRange] = useState("");

  const handleFilter = () => {
    // You can implement your filter logic here based on the state values
    // For demonstration purposes, let's just log the filter options
    console.log({
      educationBoard,
      curriculumFollowed,
      schoolType,
      schoolMedium,
      schoolFeeRange,
      schoolSizeRange,
    });
  };

  return (
    <div className="p-4 bg-gray-100 flex flex-wrap justify-center">
      {/* Education Board */}
      <div className="filter-group mr-4 mb-4">
        <label className="block mb-1">School Education Board</label>
        <div>
          <input
            type="checkbox"
            id="cbCBSE"
            checked={educationBoard.includes("CBSE")}
            onChange={() =>
              setEducationBoard((prev) =>
                prev.includes("CBSE")
                  ? prev.filter((item) => item !== "CBSE")
                  : [...prev, "CBSE"]
              )
            }
          />
          <label htmlFor="cbCBSE" className="ml-2">
            CBSE
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cbICSE"
            checked={educationBoard.includes("ICSE")}
            onChange={() =>
              setEducationBoard((prev) =>
                prev.includes("ICSE")
                  ? prev.filter((item) => item !== "ICSE")
                  : [...prev, "ICSE"]
              )
            }
          />
          <label htmlFor="cbICSE" className="ml-2">
            ICSE
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cbStateBoard"
            checked={educationBoard.includes("State Board")}
            onChange={() =>
              setEducationBoard((prev) =>
                prev.includes("State Board")
                  ? prev.filter((item) => item !== "State Board")
                  : [...prev, "State Board"]
              )
            }
          />
          <label htmlFor="cbStateBoard" className="ml-2">
            State Board
          </label>
        </div>
      </div>
      {/* Curriculum Followed */}
      <div className="filter-group mr-4 mb-4">
        <label className="block mb-1">Curriculum Followed</label>
        <div>
          <input
            type="checkbox"
            id="cbEnglishMedium"
            checked={curriculumFollowed.includes("English Medium")}
            onChange={() =>
              setCurriculumFollowed((prev) =>
                prev.includes("English Medium")
                  ? prev.filter((item) => item !== "English Medium")
                  : [...prev, "English Medium"]
              )
            }
          />
          <label htmlFor="cbEnglishMedium" className="ml-2">
            English Medium
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cbHindiMedium"
            checked={curriculumFollowed.includes("Hindi Medium")}
            onChange={() =>
              setCurriculumFollowed((prev) =>
                prev.includes("Hindi Medium")
                  ? prev.filter((item) => item !== "Hindi Medium")
                  : [...prev, "Hindi Medium"]
              )
            }
          />
          <label htmlFor="cbHindiMedium" className="ml-2">
            Hindi Medium
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cbBilingual"
            checked={curriculumFollowed.includes("Bilingual")}
            onChange={() =>
              setCurriculumFollowed((prev) =>
                prev.includes("Bilingual")
                  ? prev.filter((item) => item !== "Bilingual")
                  : [...prev, "Bilingual"]
              )
            }
          />
          <label htmlFor="cbBilingual" className="ml-2">
            Bilingual
          </label>
        </div>
      </div>
      {/* School Type */}
      <div className="filter-group mr-4 mb-4">
        <label className="block mb-1">School Type</label>
        <div>
          <input
            type="checkbox"
            id="cbPublic"
            checked={schoolType.includes("Public")}
            onChange={() =>
              setSchoolType((prev) =>
                prev.includes("Public")
                  ? prev.filter((item) => item !== "Public")
                  : [...prev, "Public"]
              )
            }
          />
          <label htmlFor="cbPublic" className="ml-2">
            Public
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cbPrivate"
            checked={schoolType.includes("Private")}
            onChange={() =>
              setSchoolType((prev) =>
                prev.includes("Private")
                  ? prev.filter((item) => item !== "Private")
                  : [...prev, "Private"]
              )
            }
          />
          <label htmlFor="cbPrivate" className="ml-2">
            Private
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cbInternational"
            checked={schoolType.includes("International")}
            onChange={() =>
              setSchoolType((prev) =>
                prev.includes("International")
                  ? prev.filter((item) => item !== "International")
                  : [...prev, "International"]
              )
            }
          />
          <label htmlFor="cbInternational" className="ml-2">
            International
          </label>
        </div>
      </div>
      {/* School Medium */}
      <div className="filter-group mr-4 mb-4">
        <label className="block mb-1">School Medium</label>
        <div>
          <input
            type="checkbox"
            id="cbEnglish"
            checked={schoolMedium.includes("English")}
            onChange={() =>
              setSchoolMedium((prev) =>
                prev.includes("English")
                  ? prev.filter((item) => item !== "English")
                  : [...prev, "English"]
              )
            }
          />
          <label htmlFor="cbEnglish" className="ml-2">
            English
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cbHindi"
            checked={schoolMedium.includes("Hindi")}
            onChange={() =>
              setSchoolMedium((prev) =>
                prev.includes("Hindi")
                  ? prev.filter((item) => item !== "Hindi")
                  : [...prev, "Hindi"]
              )
            }
          />
          <label htmlFor="cbHindi" className="ml-2">
            Hindi
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cbRegionalLanguage"
            checked={schoolMedium.includes("Regional Language")}
            onChange={() =>
              setSchoolMedium((prev) =>
                prev.includes("Regional Language")
                  ? prev.filter((item) => item !== "Regional Language")
                  : [...prev, "Regional Language"]
              )
            }
          />
          <label htmlFor="cbRegionalLanguage" className="ml-2">
            Regional Language
          </label>
        </div>
      </div>
      {/* School Fee Range */}
      <div className="filter-group mr-4 mb-4">
        <label className="block mb-1">School Fee Range</label>
        <div>
          <input
            type="checkbox"
            id="cb0to10"
            checked={schoolFeeRange === "0-10"}
            onChange={() => setSchoolFeeRange("0-10")}
          />
          <label htmlFor="cb0to10" className="ml-2">
            0 - 10
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cb10to20"
            checked={schoolFeeRange === "10-20"}
            onChange={() => setSchoolFeeRange("10-20")}
          />
          <label htmlFor="cb10to20" className="ml-2">
            10 - 20
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cb20to30"
            checked={schoolFeeRange === "20-30"}
            onChange={() => setSchoolFeeRange("20-30")}
          />
          <label htmlFor="cb20to30" className="ml-2">
            20 - 30
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cb30plus"
            checked={schoolFeeRange === "30+"}
            onChange={() => setSchoolFeeRange("30+")}
          />
          <label htmlFor="cb30plus" className="ml-2">
            30+
          </label>
        </div>
      </div>
      {/* School Size Range */}
      <div className="filter-group mb-4">
        <label className="block mb-1">School Size Range</label>
        <div>
          <input
            type="checkbox"
            id="cb0to100"
            checked={schoolSizeRange === "0-100"}
            onChange={() => setSchoolSizeRange("0-100")}
          />
          <label htmlFor="cb0to100" className="ml-2">
            0 - 100
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cb100to200"
            checked={schoolSizeRange === "100-200"}
            onChange={() => setSchoolSizeRange("100-200")}
          />
          <label htmlFor="cb100to200" className="ml-2">
            100 - 200
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cb200to300"
            checked={schoolSizeRange === "200-300"}
            onChange={() => setSchoolSizeRange("200-300")}
          />
          <label htmlFor="cb200to300" className="ml-2">
            200 - 300
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cb300plus"
            checked={schoolSizeRange === "300+"}
            onChange={() => setSchoolSizeRange("300+")}
          />
          <label htmlFor="cb300plus" className="ml-2">
            300+
          </label>
        </div>
      </div>
      {/* Filter Button */}
      <div className="w-full flex justify-center">
        <button
          onClick={handleFilter}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}

export default AdvanceFilters;
