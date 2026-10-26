
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import SavedJobs from './pages/SavedJobs';
import Apply from './pages/Apply';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [savedJobIds, setSavedJobIds] = useState(() => {
    try {
      const saved = localStorage.getItem('savedJobs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('savedJobs', JSON.stringify(savedJobIds));
  }, [savedJobIds]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <Home savedJobIds={savedJobIds} setSavedJobIds={setSavedJobIds} />
        } />

        <Route path="/jobs" element={
          <Jobs savedJobIds={savedJobIds} setSavedJobIds={setSavedJobIds} />
        } />

        <Route path="/savedJobs" element={
          <SavedJobs savedJobIds={savedJobIds} setSavedJobIds={setSavedJobIds} />
        } />

        <Route path="/jobs/:id" element={
          <JobDetails savedJobIds={savedJobIds} setSavedJobIds={setSavedJobIds} />
        } />

        <Route path="/apply/:id" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
