import React from 'react'
import Herosection from "../assets/Herosection.jpeg";
import SearchBar from "../components/SearchBar.jsx"
import jobs from "../data/jobs.js"
import JobCard from '../components/JobCard.jsx';


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
         <div className="job-section-header">
             <h2>Find Jobs That Match Your Skills</h2>
             </div>

        {/* Job Cards */}
            <div className="job-container">
                 {jobs.slice(0,6).map((job) => {
                  return  <JobCard key={job.id} job={job} />
                          
                 })}
            </div>
        </section>
        
     {/* Why choose us --section */}
        <section className='selection'>
          <h2> Why Choose Us ?</h2>


          <div className="selection-container">

            <div className="selection-card">
              <h3>Easy Job Search</h3>
              <p>Find relevant job opportunities quickly using job titles, locations, experience levels, and other preferences. Spend less time searching and more time focusing on opportunities that match your skills.</p>
            </div>
            <div className="selection-card">
              <h3>Verified Job Listings</h3>
              <p>Explore reliable job opportunities with clear information about the company, role, salary, location, and experience requirements. Get the important details before deciding to apply.</p>
            </div>
            <div className="selection-card">
              <h3>Simple Application</h3>
              <p>Apply for suitable jobs without unnecessary hassle. Find important job details in one place and move through the application process with a simple and user-friendly experience.</p>
            </div>
          </div>
        </section>

    </main>

    {/* footer */}
     <footer>
      <section className ="footer">

        <div className="footer-container">
          <h2>Find relevant job opportunities, explore career options, and take the next step toward your career goals.</h2>

         <div className="footer-card-container"> <div className="footer-card">
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">Jobs</a>
            <a href="#">Save Jobs</a>
           
          </div>
          <div className="footer-card">
            <h3>For Job Seekers</h3>
            <a href="#">Browse Jobs</a>
            <a href="#">Search Jobs</a>
            <a href="#">Saved Jobs</a>
            <a href="#">Application</a>

          </div>

             <div className="footer-card">
      <h3>Compant</h3>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms</a>
    </div>
        </div>

         <div className="footer-contact">
        <h3>Contact:</h3>
        <a href="mailto:support@jobportal.com">
         support@jobportal.com
        </a>
        </div>

         <div className="footer-bottom">
        <p>© 2026 Job Portal. All rights reserved.</p>
       </div>

         
        </div>
      </section>


      </footer>
</>

    
  )
}

export default Home