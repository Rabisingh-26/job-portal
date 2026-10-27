import React from 'react'
import FilterPanel from '../components/FilterPanel'
import JobCard from '../components/JobCard'
import jobs from '../data/jobs'
import SortDropdown from '../components/SortDropdown'
import { useSearchParams } from "react-router-dom";
import EmptyState from "../components/EmptyState.jsx"



const Jobs = ({ savedJobIds, setSavedJobIds }) => {

  const [searchParams] = useSearchParams();

const searchTitle = searchParams.get("title") || "";
const searchLocation = searchParams.get("location") || "";

  const filterJobs = jobs.filter((job)=>{
    
      const titleMatches =
      searchTitle.trim() === "" ||
      job.title.toLowerCase().includes(searchTitle.toLowerCase());
  
  
      const locationMatches =
      searchLocation.trim() === "" ||
      job.location.toLowerCase().includes(searchLocation.toLowerCase());
  
      return titleMatches && locationMatches;
  })

  return (
    <>
     
      <main>
        <h1>Find Your Next Opportunity</h1>
       
         
           
    <div className="job-content">
              
      <aside className ="filter-panel">
          
          <FilterPanel />
      </aside>

 
      <section class ="job-listings-container">
        <div className="sortdropdown-container">
           <SortDropdown />
        </div>
       
            <div className="job-listing">
             {filterJobs.length > 0 ? (
              filterJobs.slice(0, 15).map((job) => (
              <JobCard
                key={job.id}
                  job={job}
                   savedJobIds={savedJobIds}
                   setSavedJobIds={setSavedJobIds}
                   />
                 ))
             ) : (
            <EmptyState />
               )}
          </div>
     
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

export default Jobs;