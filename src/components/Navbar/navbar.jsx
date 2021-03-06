import { ReactComponent as HomeIcon } from '../../assets/icon-nav-home.svg'
import { ReactComponent as MoviesIcon } from '../../assets/icon-nav-movies.svg'
import { ReactComponent as TvSeriesIcon } from '../../assets/icon-nav-tv-series.svg'
import { ReactComponent as BookmarkIcon } from '../../assets/icon-nav-bookmark.svg'
import { ReactComponent as Logo } from '../../assets/logo.svg'

import styles from "./navbar.module.css"
import { setCurrentPage } from '../../features/globalState/globalStateSlice'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'


function Navbar() {

    const dispatch = useDispatch();
    let activeClasses = `${styles.icon} ${styles.active_category}`
    let inActiveClass = styles.icon

    return (
        <nav className={styles.container}>
            <Logo className={styles.logo} />
            <NavLink aria-label="go to Home" to="/" className={({ isActive }) => (isActive ? activeClasses : inActiveClass)} onClick={() => dispatch(setCurrentPage(0))}>  <HomeIcon /> </NavLink>
            <NavLink aria-label="go to movies" to="/movies" className={({ isActive }) => (isActive ? activeClasses : inActiveClass)} onClick={() => dispatch(setCurrentPage(1))}>  <MoviesIcon /> </NavLink>
            <NavLink aria-label="go to tvseries" to="/tvseries" className={({ isActive }) => (isActive ? activeClasses : inActiveClass)} onClick={() => dispatch(setCurrentPage(2))}>  <TvSeriesIcon /> </NavLink>
            <NavLink aria-label="go to bookmarks" to="/bookmarks" className={({ isActive }) => (isActive ? activeClasses : inActiveClass)} onClick={() => dispatch(setCurrentPage(3))}>  <BookmarkIcon /> </NavLink>
            <img className={styles.profileBox} src="../../assets/image-avatar.png" alt="profile-pic" />
        </nav >

    )
}

export default Navbar;