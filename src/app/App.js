import React from 'react';
import BookMark from '../components/BookMark/bookMark';
import Layout from '../components/Layout/layout';
import Navbar from '../components/Navbar/navbar';
import PlayButton from '../components/PlayButton/playbutton';
import SearchBox from '../components/SearchBox/searchBox';
import Home from '../pages/Home/home';

function App() {
  return (
    <Layout>
      <Navbar />
      <Home>
        <SearchBox />

        <BookMark />
        <PlayButton />
      </Home>
    </Layout>
  );
}

export default App;
