import styles from "./home.module.css"
import React, { useEffect, useState } from 'react';
import GridLayout from '../../components/GridLayout/gridlayout';
import Layout from '../../components/Layout/layout';
import Navbar from '../../components/Navbar/navbar';
import SearchBox from '../../components/SearchBox/searchBox';
import ShowTile from '../../components/ShowTile/showtile';
import TrendingRow from '../../components/TrendingRow/trendingRow';
import getShows from "../../services/shows";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage } from "../../features/globalState/globalStateSlice";
import { isCompositeComponent } from "react-dom/test-utils";

function Home(props) {

    const [trendingShows, setTrendingShows] = useState([])
    const [gridShows, setGridShows] = useState([])

    const currentPage = useSelector(selectCurrentPage)


    useEffect(() => {

        getShows().then(response => {
            let newTrendingShows = response.filter(x => x.isTrending).map((item) => {
                return <ShowTile key={item.id} data={item} />
            })

            let newGridShows = response.filter((item) => {

                if (currentPage === 'Home' && !item.isTrending) return item

                else if (item.category === currentPage && !item.isTrending) return item

                else if (currentPage === "Bookmark" && item.isBookmarked) return item

            }).map((item) => {

                // setting flase will trigger regular icons
                item.isTrending = false
                return <ShowTile key={item.id} data={item} />

            })

            setTrendingShows(newTrendingShows)
            setGridShows(newGridShows)
        })

    }, [currentPage])

    return (

        <>
            <Navbar />
            <Layout>
                <SearchBox />
                {currentPage === "Home" ? <TrendingRow>{trendingShows}</TrendingRow> : console.log("currentPage", currentPage)}
                <GridLayout>
                    {gridShows}
                </GridLayout>
            </Layout >
        </>
    )
}

export default Home