import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";


const SearchBar = ({variant}) => {


  const navigate = useNavigate();

  const handleSearch = () => {
     console.log("Search button clicked");
    const params = new URLSearchParams({
      title: searchTitle,
      location: searchLocation
    });
    
      navigate(`/jobs?${params.toString()}`);
    };
  
  
  const[searchTitle,setSearchTitle] = useState("");
  const[searchLocation,setSearchLocation] = useState("");

  return (
   
    <>

            {/* search-area  */}
             <div className={`search-area ${variant}`}>
                
                <div className="search-field">
                    <label htmlFor="job-title"></label>
                    <input type ="text" id ="job-title" placeholder="Enter job title"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)} />
                   
                </div>

                <div className="search-field-location">
                    <label htmlFor="job-location"></label>
                    <input type="text" id="job-location" placeholder="Enter Location"
                    value={searchLocation}
                    onChange={(e) =>setSearchLocation(e.target.value)}/>
                </div>

                <button type="button"
                onClick ={handleSearch}>
                <Search />
                </button>

        
            </div>
     </>
    
        
       
  )
}

export default SearchBar