
import { useState } from "react";
import FilterContext from "./FilterContext"
const FilterState = ({ children }) => {
    const [filter, setFilter] = useState();
  
    return (
      <FilterContext.Provider value={{ filter, setFilter }}>
        {children}
      </FilterContext.Provider>
    );
  };
  export default FilterState;
  