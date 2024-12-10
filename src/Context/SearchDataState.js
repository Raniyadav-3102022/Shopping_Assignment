import SearchDataContext from "./SearchDataContext";

const SearchDataState = (props) => {
    const state = {
        data: props.searchdata
    }
    return (
        <SearchDataContext.Provider value={state}>
            {props.children}
        </SearchDataContext.Provider>
    )
}
export default SearchDataState;