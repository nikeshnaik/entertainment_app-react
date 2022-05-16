import React, { useEffect, useState } from 'react';
import GridLayout from '../../components/GridLayout/gridlayout';
import Layout from '../../components/Layout/layout';
import Navbar from '../../components/Navbar/navbar';
import SearchBox from '../../components/SearchBox/searchBox';
import ShowTile from '../../components/ShowTile/showtile';
import TrendingRow from '../../components/TrendingRow/trendingRow';
import getShows from "../../services/shows";
import { useDispatch, useSelector } from "react-redux";
import { isLogin, selectCurrentPage, selectSearchFilterText, setSearchTextFilter } from "../../features/globalState/globalStateSlice";

import { compareTwoStrings } from "string-similarity";

function Home(props) {

    const [trendingShows, setTrendingShows] = useState([])
    const [gridShows, setGridShows] = useState([])
    const [searchMode, setSearchMode] = useState(false)

    const currentPage = useSelector(selectCurrentPage)
    const searchFilterText = useSelector(selectSearchFilterText)
    const dispatch = useDispatch()


    useEffect(() => {

        getShows().then(response => {
            let newTrendingShows = response.filter(x => x.isTrending).map((item) => {
                return <ShowTile key={item.id} data={item} />
            })

            let newGridShows = response.filter((item) => {

                if (currentPage === 'Home' && !item.isTrending) return item

                else if (item.category === currentPage && !item.isTrending) return item

                else if (currentPage === "Bookmark" && item.isBookmarked) return item

                return false

            }).map((item) => {

                // setting flase will trigger regular icons
                item.isTrending = false
                return <ShowTile key={item.id} data={item} />

            })

            setTrendingShows(newTrendingShows)
            setGridShows(newGridShows)
        })

    }, [currentPage, searchMode])



    const handleSearch = (event) => {

        dispatch(setSearchTextFilter(event.target.value))
        event.target.value === "" ? setSearchMode(false) : setSearchMode(true)

        getShows().then(response => {

            let newGridShows = response.filter((item) => {

                let score = compareTwoStrings(item.title.toLowerCase(), event.target.value.toLowerCase()) > 0.3

                if (score && currentPage !== "Home" && item.category === currentPage) return item
                else if (score && currentPage === "Home") return item
                else if (score && currentPage === "Bookmark" && item.isBookmarked) return item

                return false
            }).map((item) => {

                // setting flase will trigger regular icons
                item.isTrending = false
                return <ShowTile key={item.id} data={item} />

            })

            setGridShows(newGridShows)
        })

    }



    const BookMarkSplitSection = (sectionName, category) => {

        return (<GridLayout section={`Bookmarked ${sectionName}`}>
            {gridShows.filter(x => x.props.data.category === category)}
        </GridLayout>)
    }



    if (!searchMode) {
        return (
            <>
                <Navbar />
                <Layout>
                    <SearchBox handleSearch={handleSearch} />
                    {currentPage === "Home" || searchMode ? <TrendingRow>{trendingShows}</TrendingRow> : null}
                    {currentPage === "Bookmark" || searchMode ?
                        <>{BookMarkSplitSection("Movies", "Movie")} {BookMarkSplitSection("TV Series", "TV Series")}</> :
                        <> <GridLayout section={currentPage === "Movie" ? "Movies" : currentPage === "Home" ? "Recommended" : currentPage}>
                            {gridShows}
                        </GridLayout> </>}
                </Layout >
            </>
        )
    }
    else {

        return (
            <>
                <Navbar />
                <Layout>
                    <SearchBox handleSearch={handleSearch} />
                    <GridLayout section={gridShows.length > 0 ? `Found ${gridShows.length} results for '${searchFilterText}'` : null}>
                        {gridShows}
                    </GridLayout>
                </Layout >

            </>
        )
    }
}



export default Home