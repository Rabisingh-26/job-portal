import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetails from './pages/JobDetails'
import SavedJobs from './pages/SavedJobs'
import Apply from './pages/Apply'
import LoginModal from './components/LoginModal'


const App = () => {
  return (
    <div>
     
      
      <Navbar />
      <LoginModal />
     
      
      
    </div>
  )
}

export default App