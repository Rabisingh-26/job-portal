import React from 'react'
import jobs from "../data/jobs.js"

const FilterPanel = () => {
  const uniqueLocations =[
          ...new Set(jobs.map((job => {
            return job.location;
          })
        ))
        ];
       

  return (
    
    <>
  
     <h3>Job Type</h3>
     <div className="job-type-options" >
     
     <div className="filter-option">
     <input type ="checkbox" id="full-time" name="job-type" />
     <label htmlFor = "full-time">Full-time</label>
     </div>

     <div className="filter-option">
      
     <input type ="checkbox" id ="part-time" name="job-type"/>
     <label htmlFor="part-time">Part-time</label>
     </div>

     <div className="filter-option">
    <input type="checkbox" id="internship" name="job-type" />
     <label htmlFor="internship">Internship</label>
     </div>
     </div>
   

      <h3>Location Type</h3>

     <div className="location-type">

    <div className="filter-option">
    <input type="checkbox" id="remote" name="location-type" />
    <label htmlFor="remote">Remote</label>
    </div>

   <div className="filter-option">
    <input type="checkbox" id="on-site" name="location-type" />
    <label htmlFor="on-site">On-site</label>
   </div>

     <div className="filter-option">
    <input type="checkbox" id="hybrid" name="location-type" />
    <label htmlFor="hybrid">Hybrid</label>
     </div>

    </div>

     <h3>Location</h3>

     <div className="location">
       
    {uniqueLocations.map((location)=>{
      return(
        <div className="filter-option" key={location}>
         
        <input type="checkbox" id={location} name ="locations" />
        <label htmlFor ={location}>{location}</label>
        
        </div>
      );
      })}
      
     </div>

       <div className="filter-btn">
        <button type="submit">APPLY</button>
      <button type="submit">CLEAR</button>

     </div>
     
    </>
  )
}

export default FilterPanel 