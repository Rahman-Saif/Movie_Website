
import React from 'react'
import Navbar from '../components/Nav/Navbar'
import "./home.scss";
import Featured from '../components/featured/featured';
const Home = () => {
  return (
    <div className="home">
     <Navbar/>
     <Featured type="series"/>
    </div>
  )
}

export default Home
