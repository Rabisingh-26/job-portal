import React from 'react'
import jobs from "../data/jobs.js"
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterPanel = () => {

 const [selectedTypes, setSelectedTypes] = useState([]);
 const [workMode, setWorkMode] = useState([]);
 const [selectedLocations, setSelectedLocations] = useState([]);


 const handleTypeChange = (type) => {
  if (selectedTypes.includes(type)) {
    setSelectedTypes(
      selectedTypes.filter((item) => item !== type)
    )
  } else {
    setSelectedTypes([...selectedTypes, type]);
  }
};

const handleWorkMode = (work) => {
  if (workMode.includes(work)) {
    setWorkMode(
      workMode.filter((modeItem) => modeItem !== work)
    );
  } else {
    setWorkMode([...workMode, work]);
  }
};

const handleLocationChange = (location) => {
  if (selectedLocations.includes(location)) {
    setSelectedLocations(
      selectedLocations.filter((item) => item !== location)
    );
  } else {
    setSelectedLocations([...selectedLocations, location]);
  }
};

const [searchParams, setSearchParams] = useSearchParams();

const handleApplyFilters = () => {
  const params = new URLSearchParams(searchParams);

  params.delete("type");
  selectedTypes.forEach((type) => {
    params.append("type", type);
  });

  params.delete("work");
  workMode.forEach((work) => {
    params.append("work", work);
  });

  params.delete("locations");
  selectedLocations.forEach((location) => {
    params.append("locations", location);
  });

  setSearchParams(params);
};

//Clear functionality
const handleClearFilters = () => {
  setSelectedTypes([]);
setWorkMode([]);
setSelectedLocations([]);

const params = new URLSearchParams(searchParams);

params.delete("type");
params.delete("work");
params.delete("locations");

setSearchParams(params);

}

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
     <input type ="checkbox" id="full-time" name="job-type" checked={selectedTypes.includes("Full-time")}
     onChange={() => handleTypeChange("Full-time")} />
     <label htmlFor = "full-time">Full-time</label>
     </div>

     <div className="filter-option">
      
     <input type ="checkbox" id ="part-time" name="job-type" checked={selectedTypes.includes("Part-time")}
     onChange={() => handleTypeChange("Part-time")} />
     <label htmlFor="part-time">Part-time</label>
     </div>

     <div className="filter-option">
    <input type="checkbox" id="internship" name="job-type" checked={selectedTypes.includes("Internship")}
     onChange={() => handleTypeChange("Internship")} />
     <label htmlFor="internship">Internship</label>
     </div>
     </div>
   

      <h3>Location Type</h3>

     <div className="location-type">

    <div className="filter-option">
    <input type="checkbox" id="remote" name="location-type" checked={workMode.includes("Remote")} 
    onChange ={() => handleWorkMode("Remote")}/>
    <label htmlFor="remote">Remote</label>
    </div>

   <div className="filter-option">
    <input type="checkbox" id="on-site" name="location-type" checked={workMode.includes("On-site")}
    onChange = {()=> handleWorkMode("On-site")} />
    <label htmlFor="on-site">On-site</label>
   </div>

     <div className="filter-option">
    <input type="checkbox" id="hybrid" name="location-type"
    checked={workMode.includes("Hybrid")} 
    onChange ={() => handleWorkMode("Hybrid")} />
    <label htmlFor="hybrid">Hybrid</label>
     </div>

    </div>

     <h3>Location</h3>

     <div className="location">
       
    {uniqueLocations.map((location)=>{
      return(
        <div className="filter-option" key={location}>
         
        <input type="checkbox" id={location} name ="locations" 
        checked={selectedLocations.includes(location)}
        onChange = {() => handleLocationChange(location)}/>
        <label htmlFor ={location}>{location}</label>
        
        </div>
      );
      })}
      
     </div>

       <div className="filter-btn">
        <button type="button" 
        onClick = {handleApplyFilters}>APPLY</button>


      <button type="button" onClick={handleClearFilters}>
          CLEAR
      </button>

     </div>
     
    </>
  )
}

export default FilterPanel 