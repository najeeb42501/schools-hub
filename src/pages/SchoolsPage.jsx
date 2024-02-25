import React from "react";
import SearchComponent from "../components/SearchComponent";
import SchoolsList from "../components/SchoolsList";
import AdvanceFilters from "../components/AdvanceFilters";

function SchoolsPage() {
  return (
    <>
      <SearchComponent />
      <AdvanceFilters />
      <SchoolsList />
    </>
  );
}

export default SchoolsPage;
