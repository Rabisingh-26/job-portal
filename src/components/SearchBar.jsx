import React from 'react'
import { Search } from "lucide-react";

const SearchBar = ({variant}) => {
  return (
   
    <>

            {/* search-area  */}
             <div className={`search-area ${variant}`}>
                
                <div className="search-field">
                    <label htmlFor="job-title"></label>
                    <input type ="text" id ="job-title" placeholder="Enter job title" />
                   
                </div>

                <div className="search-field-location">
                    <label htmlFor="job-location"></label>
                    <input type="text" id="job-location" placeholder="Enter Location"/>
                </div>

                <button type="submit">
                <Search />
                </button>

        
            </div>
     </>
    
        
       
  )
}

export default SearchBar