import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import Login from '../pages/Login/login';
import SignUp from '../pages/SignUp/signup';



function App() {


  return (

    <Routes path="/">

      <Route path="" element={<Home subPage="Home" key={2} />} />

      <Route path="login" element={<Login key={0} />} />

      <Route path="signup" element={<SignUp key={1} />} />

      <Route path="movies" element={<Home subPage="Movie" key={3} />} />

      <Route path="tvseries" element={<Home subPage="TV Series" key={4} />} />

      <Route path="bookmarks" element={<Home subPage="Bookmark" key={5} />} />

      <Route path="*" element={
        <main style={{
          padding: "1rem",
          color: 'white',
          display: "grid",
          placeItems: "center"
        }}>
          <h1> There's nothing here</h1>
        </main>
      } />

    </Routes >

  );
}

export default App;
