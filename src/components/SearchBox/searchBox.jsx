import styles from "./searchBox.module.css"
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { selectCurrentPage, setSearchTextFilter } from "../../features/globalState/globalStateSlice";
import { useDispatch, useSelector } from "react-redux";


function SearchBox() {

    const dispatch = useDispatch(setSearchTextFilter)
    const currentPage = useSelector(selectCurrentPage)

    let InputPlaceHolderPerPage = currentPage !== "home" ? `Search For ${currentPage}` : "Search For Movies, Tv Shows..."

    const handleSearchBoxClick = (event) => {
        event.currentTarget.children[1].focus()
        dispatch(setSearchTextFilter(""))
        event.stopPropagation()
    }

    const handleInputUpdate = (event) => {

        dispatch(setSearchTextFilter(event.target.value))
        event.stopPropagation()

    }

    return (
        <div role="search" className={styles.container} onClick={handleSearchBoxClick} >
            <SearchIcon className={styles.search_icon} viewBox="0 0 32 32" />
            <input title="Input" type="text" className={styles.inputbox} placeholder={InputPlaceHolderPerPage} onChange={handleInputUpdate} />
        </div >
    )
}


export default SearchBox;