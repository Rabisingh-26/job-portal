import React from 'react'
import Herosection from "../assets/Herosection.jpeg";
import SearchBar from "../components/SearchBar.jsx"

const Home = () => {
  return (
   <>
    <main>
        {/* hero-section */}
        <section className='hero-section'>
     
        <div className="hero-container">
            {/* hero-content */}
               <div className="hero-content">
                <h2>Welcome to the Job Portal</h2>
                <p>Platform which lists best and real jobs according to your perefernces.Help people to get their jobs.</p>
           
              <a href="/jobs" className="hero-link">FIND JOBS</a>
            </div>
            {/* hero-image */}
             <div className="hero-image">
                <img src={Herosection} alt="hero-section photo"></img>
             </div>

        </div>
        </section>
       
        <SearchBar variant="home" />

        
        {/* Featured jobs Section */}
        <section className='featured-jobs'>
       
       {/*Featured jobs section content */}
         <div className="section-header">
             <h2>Find Jobs That Match Your Skills</h2>
             </div>

        {/* Job Cards */}
            <div className="job-container">
                <div className="job-card"></div>
            </div>
        </section>


        <section className='selection'>
          <h3>Easy Job Search</h3>
          <h3>Verified Jobs</h3>
          <h3>Easy Application</h3>
        </section>

    </main>
     <footer>

      </footer>
</>

    
  )
}

export default Home