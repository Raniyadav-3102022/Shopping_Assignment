
import FilterContext from "./FilterContext"
const FilterState = (props) => {
    const state = {
        data: props.filtdata
    }
    return (
        <FilterContext.Provider value={state}>
            {props.children}
        </FilterContext.Provider>
    )
}
export default FilterState;