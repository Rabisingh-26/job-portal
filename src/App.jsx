import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetails from './pages/JobDetails'
import SavedJobs from './pages/SavedJobs'
import Apply from './pages/Apply'
import LoginModal from './components/LoginModal'
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path = '/' element = {<Home />} />
        <Route path ='/jobs' element ={<Jobs />} />
        <Route path ='/savedJobs' element ={<SavedJobs />} />
      </Routes> 
      </BrowserRouter>
      
      
    
     
      
      
    </div>
  )
}

export default App