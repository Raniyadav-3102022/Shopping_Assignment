import { useState } from "react";
import SearchDataContext from "./SearchDataContext";

const SearchDataState = ({ children }) => {
       const [searchData, setsearchData] = useState();
   
    return (
        <SearchDataContext.Provider value={{ searchData, setsearchData }}>
            {children}
        </SearchDataContext.Provider>
    )
}
export default SearchDataState;