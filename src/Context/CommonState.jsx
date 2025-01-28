
import { useState } from "react";
import CommonContext from "./CommonContext";
const CommonState = ({ children }) => {
    const [filtervalue, setfiltervalue] = useState();
    const [filterType, setfilterType] = useState();
    const [filterdataType, setfilterdataType] = useState();
  
    return (
      <CommonContext.Provider value={{ filtervalue, setfiltervalue,filterType ,setfilterType,filterdataType, setfilterdataType}}>
        {children}
      </CommonContext.Provider>
    );
  };
  export default CommonState;
  