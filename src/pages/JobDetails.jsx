import React from 'react'
import jobs from '../data/jobs'

const JobDetails = () => {
  return (
    <>

      <div className="job-header">
          <div className="job-header-upper">
            <h2>Microsoft</h2>
           <h3>Software Enginner Intern</h3>
          </div>


          <div className="job-header-middle">
           <h4>Internship</h4>
           <p>Hybrid</p>
           <p>Hyderabad, India</p>
         
          </div>

          <div className="job-header-btn">
           <button>APPLY NOW</button>
           <button>SAVE JOB</button>
          </div>

  
      </div>

      <div className="job-description">
        <h3>Job Description</h3>
        <p>Work with engineering teams to develop software
         features, solve technical problems, and gain
        experience with large-scale systems.</p>


        <div className="job-skills">
        <h3> Required Skills:</h3>
        <span>C++</span>
        <span>Java</span>
        <span>Data Structures & Algorithm</span>

      </div>

      </div>

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

export default JobDetails