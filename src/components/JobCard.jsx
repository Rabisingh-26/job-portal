import React from 'react'
import jobs from"../data/jobs.js"
import { Link } from 'react-router-dom'

const JobCard = ({job}) => {
  return (


    <article className="job-card">
    <Link to={`/jobs/${job.id}`}
    className = "job-card-link" >
      <h3>{job.company}</h3>        
      <h2>{job.title}</h2>  
      <h3>{job.location}</h3>
      <p>{job.type}</p>
      <p>{job.experience}</p> 
      <p>{job.salary}</p>
    
    </Link>
 
      <div className="job-card-btn">
        
        <Link to={`/apply/${job.id}`} className="apply-link">
          APPLY 
        </Link>

      <button>SAVE JOB</button>
      </div>
    </article>
  )
}

export default JobCard