// import React, { useState } from "react";
// import sliderRangeContext from "./sliderRangeContext";

// const sliderRangeState = ({ children }) => {
//     const [Rangedata, setRangedata] = useState([100, 1000]);

//     return (
//         <sliderRangeContext.Provider value={{ Rangedata, setRangedata }}>
//             {children}
//         </sliderRangeContext.Provider>
//     );
// }

// export default sliderRangeState;
import React, { useState } from "react";
import sliderRangeContext from "./sliderRangeContext";

const SliderRangeState = ({ children }) => {
  const [Rangedata, setRangedata] = useState(); // Initial range values

  return (
    <sliderRangeContext.Provider value={{ Rangedata, setRangedata }}>
      {children}
    </sliderRangeContext.Provider>
  );
};

export default SliderRangeState;
