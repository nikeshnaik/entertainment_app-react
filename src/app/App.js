import React from 'react';
import BookMark from '../components/BookMark/bookMark';
import GridLayout from '../components/GridLayout/gridlayout';
import Layout from '../components/Layout/layout';
import Navbar from '../components/Navbar/navbar';
import PlayButton from '../components/PlayButton/playbutton';
import SearchBox from '../components/SearchBox/searchBox';
import ShowDescription from '../components/ShowDescription/showdescription';
import ShowTile from '../components/ShowTile/showtile';
import TrendingRow from '../components/TrendingRow/trendingRow';
import Home from '../pages/Home/home';



function App() {

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

  return (
    <Layout>
      <Navbar />
      <Home>
        <SearchBox />

        {/* <BookMark />
        <PlayButton />
        <ShowDescription isTrending={true} yearOfRelease='2020' category="Movie" rating='PG' title="Beyond Earth" /> */}

        <TrendingRow>
          <ShowTile data={showDetails}></ShowTile>
          <ShowTile data={showDetails}></ShowTile>
          <ShowTile data={showDetails}></ShowTile>
          <ShowTile data={showDetails}></ShowTile>
          <ShowTile data={showDetails}></ShowTile>
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

      </Home>
    </Layout>
  );
}

export default App;
