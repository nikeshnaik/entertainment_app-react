import { ReactComponent as HomeIcon } from '../../assets/icon-nav-home.svg'
import { ReactComponent as MoviesIcon } from '../../assets/icon-nav-movies.svg'
import { ReactComponent as TvSeriesIcon } from '../../assets/icon-nav-tv-series.svg'
import { ReactComponent as BookmarkIcon } from '../../assets/icon-nav-bookmark.svg'
import { ReactComponent as Logo } from '../../assets/logo.svg'

import styles from "./navbar.module.css"
import { useState } from 'react'
import { setCurrentPage } from '../../features/globalState/globalStateSlice'
import { useDispatch } from 'react-redux'



function Navbar() {


    const dispatch = useDispatch();

    const [activeNavItem, setActiveNavItem] = useState([styles.active_category, '', '', ''])

    const handleNavItemClick = (event, id) => {

        let newState = new Array(3).fill('')
        newState[id] = styles.active_category
        setActiveNavItem(newState)
        dispatch(setCurrentPage(id))

    }

    return (
        <nav className={styles.container}>
            <Logo alt="logo" className={styles.logo} />
            <button title="Home" className={`${styles.icon} ${activeNavItem[0]}`} onClick={(event) => handleNavItemClick(event, 0)}> <HomeIcon /> </button>
            <button title="Movies" className={`${styles.icon} ${activeNavItem[1]}`} onClick={(event) => handleNavItemClick(event, 1)}> <MoviesIcon /> </button>
            <button title="TvShows" className={`${styles.icon} ${activeNavItem[2]}`} onClick={(event) => handleNavItemClick(event, 2)}><TvSeriesIcon /> </button>
            <button title="Bookmarks" className={`${styles.icon} ${activeNavItem[3]}`} onClick={(event) => handleNavItemClick(event, 3)}> <BookmarkIcon /> </button>
        </nav >
    )
}

export default Navbar;