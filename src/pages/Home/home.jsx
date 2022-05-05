import styles from "./home.module.css"
import React, { useEffect, useState } from 'react';
import GridLayout from '../../components/GridLayout/gridlayout';
import Layout from '../../components/Layout/layout';
import Navbar from '../../components/Navbar/navbar';
import SearchBox from '../../components/SearchBox/searchBox';
import ShowTile from '../../components/ShowTile/showtile';
import TrendingRow from '../../components/TrendingRow/trendingRow';
import getShows from "../../services/shows";

function Home(props) {

    let showDetails = {

        "title": "Beyond Earth",
        "thumbnail": {
            "trending": {
                "small": "./assets/thumbnails/beyond-earth/trending/small.jpg",
                "large": "./assets/thumbnails/beyond-earth/trending/large.jpg"
            },
            "regular": {
                "small": "./assets/thumbnails/beyond-earth/regular/small.jpg",
                "medium": "./assets/thumbnails/beyond-earth/regular/medium.jpg",
                "large": "./assets/thumbnails/beyond-earth/regular/large.jpg"
            }
        },
        "year": 2019,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": true
    }

    let showDetailsRegular = {

        "title": "Beyond Earth",
        "thumbnail": {
            "trending": {
                "small": "./assets/thumbnails/beyond-earth/trending/small.jpg",
                "large": "./assets/thumbnails/beyond-earth/trending/large.jpg"
            },
            "regular": {
                "small": "./assets/thumbnails/beyond-earth/regular/small.jpg",
                "medium": "./assets/thumbnails/beyond-earth/regular/medium.jpg",
                "large": "./assets/thumbnails/beyond-earth/regular/large.jpg"
            }
        },
        "year": 2019,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
    }

    const [trendingShows, setTrendingShows] = useState([])


    useEffect(() => {

        getShows().then(response => {
            let newTrendingShows = response.filter(x => x.isTrending).map((item) => {
                return <ShowTile key={item.id} data={item} />
            })

            setTrendingShows(newTrendingShows)
            console.log("Called once")

        })

    }, [])

    return (

        // <>{props.children}</>
        <>
            <Navbar />
            <Layout>
                <SearchBox />
                <TrendingRow>
                    {/* <ShowTile data={showDetails}></ShowTile>
                    <ShowTile data={showDetails}></ShowTile>
                    <ShowTile data={showDetails}></ShowTile>
                    <ShowTile data={showDetails}></ShowTile>
                    <ShowTile data={showDetails}></ShowTile> */}
                    {trendingShows}
                </TrendingRow>

                <GridLayout>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                    <ShowTile data={showDetailsRegular}></ShowTile>
                </GridLayout>
            </Layout >
        </>
    )
}

export default Home