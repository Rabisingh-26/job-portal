import React from 'react'
import jobs from '../data/jobs'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const JobDetails = () => {
  const {id} = useParams();


  const job = jobs.find((item)=> item.id === Number(id));

  if(!job){
    return <p>Job not found</p>;
  }

  return (
    <>

       <div className="job-details">
      <div className="job-header">
        <div className="job-header-upper">
          <h2>{job.company}</h2>
          <h3>{job.title}</h3>
          <p>{job.experience}</p>
        </div>

        <div className="job-header-middle">
          <h4>{job.type}</h4>
          <p>{job.locationType}</p>
          <p>{job.location}</p>
          <p>{job.salary}</p>
          <p>{job.category}</p>
        </div>

        <div className="job-header-btn">
          <Link to={`/apply/${job.id}`} className="apply-link">
          APPLY NOW

        </Link>
        
          <button>SAVE JOB</button>
        </div>
      </div>

      <div className="job-description">
        <p>Posted Date: {job.postedDate}</p>

        <h3>Job Description</h3>
        <p>{job.description}</p>

        <h3>Responsibilities</h3>
        <ul>
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="job-skills">
          <h3>Required Skills</h3>
          {job.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="job-requirements">
          <h3>Requirements</h3>
          <ul>
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>

        <div className="job-benefits">
          <h3>Benefits</h3>
          <ul>
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="company-description">
          <h3>About the Company</h3>
          <p>{job.companyDescription}</p>
        </div>
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