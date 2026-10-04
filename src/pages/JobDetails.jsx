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

      


    </>
  )
}

export default JobDetails