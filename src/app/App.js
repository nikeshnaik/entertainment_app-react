import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/home';
import Login from '../pages/Login/login';
import RequireAuth from '../pages/requireAuth';
import SignUp from '../pages/SignUp/signup';



function App() {


  return (

    <Routes path="/">


      <Route path="login" element={<Login key={0} />} />

      <Route path="signup" element={<SignUp key={1} />} />

      {/* <Route element={<RequireAuth />}> */}

      <Route path="" element={<Home subPage="Home" key={2} />} />

      <Route path="movies" element={<Home subPage="Movie" key={3} />} />

      <Route path="tvseries" element={<Home subPage="TV Series" key={4} />} />

      <Route path="bookmarks" element={<Home subPage="Bookmark" key={5} />} />

      {/* </Route> */}

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
