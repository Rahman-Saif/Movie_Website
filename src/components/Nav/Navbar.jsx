import React, { useState } from 'react'
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';


const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false);

    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0?false:true);
        return ()=>(window.onscroll=null);
    }
    
  return (
    <div className={isScrolled ?"navBar scrolled":"navBar"}>
      <div className="container">
        <div className="left">
        <img src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1000&h=563&crop=1"/>
        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and Popular</span>
        <span>My List</span>
        </div>
        <div className="right">
            <Search className='icon'/>
            <span>Kid</span>
            <Notifications className='icon'/>
            <div className="profile">
                <ArrowDropDown className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout </span>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
