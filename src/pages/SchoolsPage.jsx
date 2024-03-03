import React from "react";
import SearchComponent from "../components/SearchComponent";
import SchoolsList from "../components/SchoolsList";
import AdvanceFilters from "../components/AdvanceFilters";
import { useAppContext } from "../state/ContextAPI";

function SchoolsPage() {
  const { state } = useAppContext();
  console.log(state);

  return (
    <>
      <SearchComponent />
      {state.type != "guest" ? <AdvanceFilters /> : null}
      <SchoolsList />
    </>
  );
}

export default SchoolsPage;
