import React, { useEffect, useState } from "react";
import SearchComponent from "../components/SearchComponent";
import SchoolsList from "../components/SchoolsList";
import AdvanceFilters from "../components/AdvanceFilters";
import { useAppContext } from "../state/ContextAPI";

function SchoolsPage() {
  const { state } = useAppContext();
  console.log(state);
  const [allSchools, setAllSchools] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/getAllSchools/schools"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schools data");
        }
        const data = await response.json();
        // console.log("Schools : ", data);
        setAllSchools(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching schools data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  console.log("Sate Schools :", allSchools);

  return (
    <>
      <SearchComponent />
      {state.type !== "guest" ? <AdvanceFilters /> : null}
      <SchoolsList schools={allSchools} />
    </>
  );
}

export default SchoolsPage;
