import React from 'react';
import Layout from '../components/Layout/layout';
import Navbar from '../components/Navbar/navbar';
import SearchBox from '../components/SearchBox/searchBox';
import Home from '../pages/Home/home';

function App() {
  return (
    <Layout>
      <Navbar />
      <Home>
        <SearchBox />
      </Home>
    </Layout>
  );
}

export default App;
