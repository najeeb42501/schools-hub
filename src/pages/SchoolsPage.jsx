import React, { useEffect, useState } from "react";
import SearchComponent from "../components/SearchComponent";
import SchoolsList from "../components/SchoolsList";
import AdvanceFilters from "../components/AdvanceFilters";
import AdvancedSearchUsingLocation from "../components/AdvancedSearchUsingLocation";

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

  const [userLocation, setUserLocation] = useState(null);

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

  const handleSetUserLocation = (location) => {
    setUserLocation(location);
    console.log("User Location Set:", location);
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const handleSearchNearbySchools = (userLoc) => {
    const nearbySchools = allSchools.filter((school) => {
      if (!school.latitude || !school.longitude) return false;
      const distance = calculateDistance(
        userLoc.latitude,
        userLoc.longitude,
        school.latitude,
        school.longitude
      );
      return distance <= 20;
    });
    setAllSchools(nearbySchools);
    console.log("Nearby Schools:", nearbySchools);
  };

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

  const resetFilters = async () => {
    // Reset local filter states
    setFilters({
      selectedCity: "",
      selectedSchoolLevel: "",
      selectedSchoolType: "",
      selectedSchoolSize: "",
      selectedSchoolMedium: "",
      selectedCurriculum: "",
      selectedFeeRange: "",
    });
    setSearchSchoolByName(null);
    setUserLocation(null);

    // Fetch all schools again or set to original fetched data if cached
    try {
      const response = await fetch(
        "http://localhost:5000/getAllSchools/allSchools"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch schools data");
      }
      const data = await response.json();
      setAllSchools(data);
    } catch (error) {
      console.error("Error refetching schools data:", error);
    }
  };

  return (
    <>
      <SearchComponent onSearch={handleSearch} />
      {state.type !== "guest" ? (
        <>
          <AdvancedSearchUsingLocation
            onSetUserLocation={handleSetUserLocation}
            onSearchNearby={handleSearchNearbySchools}
          />
          <AdvanceFilters
            onFilterChange={handleFilterChange}
            onResetFilter={resetFilters}
          />
        </>
      ) : null}
      <SchoolsList schools={filteredSchools} />
    </>
  );
}

export default SchoolsPage;
