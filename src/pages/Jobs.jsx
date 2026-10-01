import React from 'react'
import FilterPanel from '../components/FilterPanel'
import JobCard from '../components/JobCard'
import jobs from '../data/jobs'


const Jobs = () => {
  
  return (
    <>
     
      <main>
        <h1>Find Your Next Opportunity</h1>

      
       <div className="job-content">
        
      <aside className ="filter-panel">
          <FilterPanel />
      </aside>


      <section class ="job-listings">
        {
          jobs.slice(0,15).map((job)=>{
            return <JobCard key={job.id} job={job} />
          }) 
        }

      </section>
       </div>
      

      </main>

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

export default Jobs