import { useState, useEffect } from "react";
import { FilterButton } from "./FilterButton";
import { useIdea } from "../context/IdeaProvider";
import { filtersArray, biggerFiltersArray } from "../constants/data";

export const FilterGroup = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const { setFilter } = useIdea();
  const [activeFilters, setActiveFilters] = useState(filtersArray);

  const handleResize = () => {
    if (window.innerWidth >= 768 && activeFilters !== biggerFiltersArray) {
      setActiveFilters(biggerFiltersArray);
    } else if (window.innerWidth < 768 && activeFilters !== filtersArray) {
      setActiveFilters(filtersArray);
    }
  };

  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, [activeFilters]); 

  const handleClick = (filterKey) => {
    setSelectedFilter(filterKey);
    setFilter(filterKey);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 md:grid md:grid-cols-4 md:gap-4 md:justify-center md:place-items-center mb-24">
      {activeFilters.map((filter, index) => (
        <FilterButton
          key={filter.key}
          content={filter.value}
          onClick={() => handleClick(filter.key)}
          isActive={selectedFilter === filter.key}
          inheritClass={`mb-4 md:mb-0 md:w-auto ${index >= 4 ? "md:col-span-2" : ""}`}
        />
      ))}
    </div>
  );
};
