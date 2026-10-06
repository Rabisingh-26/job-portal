import React, { useState } from 'react'
import companyLogo from "../assets/company logo.png";
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";
import LoginModal from './LoginModal';



const Navbar = () => {

    const [showLogin, setShowLogin] = useState(false);
    
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
                
                 <Link to ='/'>Home</Link>
                 <Link to ='/jobs'>Jobs</Link>
                 <Link to ='/savedJobs'>SavedJobs</Link>
                </div>

                <div className="user">
                    <button onClick={() => setShowLogin(true)}>Login</button>
                    {showLogin && <LoginModal onClose ={setShowLogin} />}
                    

                </div>
            </div>
        </nav>
    </header>

  )
}

export default Navbar