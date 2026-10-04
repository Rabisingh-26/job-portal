import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetails from './pages/JobDetails'
import SavedJobs from './pages/SavedJobs'


const App = () => {
  return (
    <div>
     
      
      <Navbar />
      <SavedJobs />
     
      
      
    </div>
  )
}

export default App