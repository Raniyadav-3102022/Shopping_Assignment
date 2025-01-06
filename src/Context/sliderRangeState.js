import React, { useState } from "react";
import sliderRangeContext from "./sliderRangeContext";

const sliderRangeState = ({ children }) => {
    const [Rangedata, setRangedata] = useState([100, 1000]); // Assuming the range is an array

    return (
        <sliderRangeContext.Provider value={{ Rangedata, setRangedata }}>
            {children}
        </sliderRangeContext.Provider>
    );
}

export default sliderRangeState;
