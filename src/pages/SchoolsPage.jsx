import React, { useEffect, useState } from "react";
import SearchComponent from "../components/SearchComponent";
import SchoolsList from "../components/SchoolsList";
import AdvanceFilters from "../components/AdvanceFilters";
import CurrentLocationFilter from "../components/CurrentLocationFilter";
import { useAppContext } from "../state/ContextAPI";

function SchoolsPage() {
  const { state } = useAppContext();
  console.log(state);
  const [allSchools, setAllSchools] = useState([]);
  const [searchSchoolByName, setSearchSchoolByName] = useState(null);
  const [filters, setFilters] = useState({
    selectedCity: "",
    selectedSchoolLevel: "",
    selectedSchoolType: "",
    selectedSchoolSize: "",
    selectedSchoolMedium: "",
    selectedCurriculum: "",
    selectedFeeRange: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/getAllSchools/allSchools"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schools data");
        }
        const data = await response.json();
        // console.log("Response : ", data);
        setAllSchools(data);
      } catch (error) {
        console.error("Error fetching schools data:", error);
      }
    };

    fetchData();
  }, [state]);

  console.log("Sate Schools :", allSchools);

  // Function to update filters state
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Apply filters to allSchools
  const applyFilters = (schools, filters) => {
    return schools.filter((school) => {
      // Example filter application, add conditions for each filter
      if (filters.selectedCity && school.schoolCity !== filters.selectedCity) {
        return false;
      }
      if (
        filters.selectedSchoolLevel &&
        school.schoolLevel !== filters.selectedSchoolLevel
      ) {
        return false;
      }
      // Add checks for other filters...
      return true; // School passes all filters
    });
  };

  const handleSearch = (search) => {
    setSearchSchoolByName(search);
    console.log(search);
  };

  // Filtered schools including search and advanced filters
  const filteredSchools = applyFilters(
    searchSchoolByName
      ? allSchools.filter((school) =>
          school.schoolName
            .toLowerCase()
            .includes(searchSchoolByName.toLowerCase())
        )
      : allSchools,
    filters
  );

  return (
    <>
      <SearchComponent onSearch={handleSearch} />
      {state.type !== "guest" ? (
        <>
          {/* <CurrentLocationFilter /> */}
          <AdvanceFilters onFilterChange={handleFilterChange} />
        </>
      ) : null}
      <SchoolsList schools={filteredSchools} />
    </>
  );
}

export default SchoolsPage;
