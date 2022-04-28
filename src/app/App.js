import React from 'react';
import BookMark from '../components/BookMark/bookMark';
import Layout from '../components/Layout/layout';
import Navbar from '../components/Navbar/navbar';
import PlayButton from '../components/PlayButton/playbutton';
import SearchBox from '../components/SearchBox/searchBox';
import ShowDescription from '../components/ShowDescription/showdescription';
import Home from '../pages/Home/home';

function App() {
  return (
    <Layout>
      <Navbar />
      <Home>
        <SearchBox />

        <BookMark />
        <PlayButton />
        <ShowDescription isTrending={true} yearOfRelease='2020' category="Movie" rating='PG' title="Beyond Earth" />
      </Home>
    </Layout>
  );
}

export default App;
