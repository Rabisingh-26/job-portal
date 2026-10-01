import React from 'react'
import jobs from"../data/jobs.js"

const JobCard = ({job}) => {
  return (


    <article className="job-card">
      <h3>{job.company}</h3>        
      <h2>{job.title}</h2>  
      <h3>{job.location}</h3>
      <p>{job.type}</p>
      <p>{job.experience}</p> 
      <p>{job.salary}</p>
      <button>APPLY</button>
    </article>
  )
}

export default JobCard