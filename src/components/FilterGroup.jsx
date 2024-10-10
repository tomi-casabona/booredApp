
import { FilterButton } from "./FilterButton";
import { useState } from "react";
import { useIdea } from "../context/IdeaProvider";
import { filtersArray } from "../constants/data";

export const FilterGroup = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const { setFilter } = useIdea();

  function handleClick(filterKey) {
    setSelectedFilter(filterKey);
    setFilter(filterKey); 
  }

  return (
    <div className="flex justify-evenly">
      {filtersArray.map((filter) => (
        <FilterButton
          key={filter.key} 
          content={filter.value}
          onClick={() => handleClick(filter.key)}
          isActive={selectedFilter === filter.key}
        />
      ))}
    </div>
  );
};
