import React from 'react'
import companyLogo from "../assets/company logo.png";
import SearchBar from './SearchBar';
const Navbar = () => {
  return (
   
    <header>
        <nav>
            <div className="nav-container">

                <div className="logo">
                    <img src={companyLogo} alt="logo"></img>
                    <h3>JOB PORTAL</h3>
                </div>
                <SearchBar variant="navbar" />

                <div className="link-container">
                
                 <a href="#">Home</a>
                 <a href="#">Jobs</a>
                <a href="#">Saved Jobs</a>
                </div>

                <div className="user">
                    <a href="#">Login</a>
                    <a href="#">Profile</a>

                </div>
            </div>
        </nav>
    </header>

  )
}

export default Navbar