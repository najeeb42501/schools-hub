import React, { useState } from "react";

function AdvanceFilters({ onFilterChange, onResetFilter }) {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSchoolLevel, setSelectedSchoolLevel] = useState("");
  const [selectedSchoolType, setSelectedSchoolType] = useState("");
  const [selectedSchoolSize, setSelectedSchoolSize] = useState("");
  const [selectedSchoolMedium, setSelectedSchoolMedium] = useState("");
  const [selectedCurriculum, setSelectedCurriculum] = useState("");
  const [selectedFeeRange, setSelectedFeeRange] = useState("");

  const cities = ["Karachi", "Hyderabad", "Sukkur", "Khairpur"];
  const schoolLevels = ["Primary", "Secondary", "Nursery/KG"];
  const schoolTypes = ["Co-education", "Boys", "Girls"];
  const schoolSizes = ["100 - 200", "200 - 300", "300+"];
  const schoolMediums = ["English", "Urdu", "Sindhi"];
  const curriculums = [
    "Sindh Text Board",
    "Federal Board",
    "Oxford O Level",
    "Agha Khan Board",
  ];
  const feeRanges = ["1000 - 2000", "2000 - 3000", "3000 - 4000", "5000+"];

  // Function to be called when "Apply Filter" button is clicked
  const handleApplyFilters = () => {
    onFilterChange({
      selectedCity,
      selectedSchoolLevel,
      selectedSchoolType,
      selectedSchoolSize,
      selectedSchoolMedium,
      selectedCurriculum,
      selectedFeeRange,
    });
    console.log("handle filter called");
  };

  return (
    <div className="p-4 bg-gray-100 flex flex-wrap justify-center">
      <div className="filter-group mr-4 mb-4">
        <label className="block mb-1">City</label>
        <select
          className="border p-1 w-full"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group mr-4 mb-4">
        <label className="block mb-1">School Level</label>
        <select
          className="border p-1 w-full"
          value={selectedSchoolLevel}
          onChange={(e) => setSelectedSchoolLevel(e.target.value)}
        >
          <option value="">Select School Level</option>
          {schoolLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group mr-4 mb-4">
        <label className="block mb-1">School Type</label>
        <select
          className="border p-1 w-full"
          value={selectedSchoolType}
          onChange={(e) => setSelectedSchoolType(e.target.value)}
        >
          <option value="">Select School Type</option>
          {schoolTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group mr-4 mb-4">
        <label className="block mb-1">School Size</label>
        <select
          className="border p-1 w-full"
          value={selectedSchoolSize}
          onChange={(e) => setSelectedSchoolSize(e.target.value)}
        >
          <option value="">Select School Size</option>
          {schoolSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group mr-4 mb-4">
        <label className="block mb-1">School Medium</label>
        <select
          className="border p-1 w-full"
          value={selectedSchoolMedium}
          onChange={(e) => setSelectedSchoolMedium(e.target.value)}
        >
          <option value="">Select School Medium</option>
          {schoolMediums.map((medium) => (
            <option key={medium} value={medium}>
              {medium}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group mr-4 mb-4">
        <label className="block mb-1">Curriculum Followed</label>
        <select
          className="border p-1 w-full"
          value={selectedCurriculum}
          onChange={(e) => setSelectedCurriculum(e.target.value)}
        >
          <option value="">Select Curriculum</option>
          {curriculums.map((curriculum) => (
            <option key={curriculum} value={curriculum}>
              {curriculum}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group mr-4 mb-4">
        <label className="block mb-1">Fee Range</label>
        <select
          className="border p-1 w-full"
          value={selectedFeeRange}
          onChange={(e) => setSelectedFeeRange(e.target.value)}
        >
          <option value="">Select Fee Range</option>
          {feeRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
      {/* Apply Filter Button */}
      <div className="w-full flex justify-center gap-4">
        <button
          onClick={handleApplyFilters}
          className="bg-cariGreen text-white px-4 py-2 rounded mt-4 hover:bg-nightGreen"
        >
          Apply Filter
        </button>
        <button
          onClick={onResetFilter}
          className="bg-cariGreen text-white px-4 py-2 rounded mt-4 hover:bg-nightGreen"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default AdvanceFilters;
