
import React from 'react';
import jobs from '../data/jobs';
import JobCard from '../components/JobCard';

const SavedJobs = ({ savedJobIds, setSavedJobIds }) => {
  const savedJobCards = jobs
    .filter((job) =>
      savedJobIds.includes(Number(job.id))
    )
    .map((job) => (
      <JobCard
        key={job.id}
        job={job}
        savedJobIds={savedJobIds}
        setSavedJobIds={setSavedJobIds}
      />
    ));

  return (
    <>
      <main className="savedjobs-container">
        <h1>Saved Jobs</h1>

        <div className="saved-jobs">
          {savedJobCards.length > 0 ? (
            savedJobCards
          ) : (
            <p>You haven't saved any jobs yet.</p>
          )}
        </div>
      </main>

      <footer>
        <section className="footer">
          <div className="footer-container">
            <h2>
              Find relevant job opportunities, explore career options, and
              take the next step toward your career goals.
            </h2>

            <div className="footer-card-container">
              <div className="footer-card">
                <h3>Quick Links</h3>
                <a href="#">Home</a>
                <a href="#">Jobs</a>
                <a href="#">Save Jobs</a>
              </div>

              <div className="footer-card">
                <h3>For Job Seekers</h3>
                <a href="#">Browse Jobs</a>
                <a href="#">Search Jobs</a>
                <a href="#">Saved Jobs</a>
                <a href="#">Application</a>
              </div>

              <div className="footer-card">
                <h3>Company</h3>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
              </div>
            </div>

            <div className="footer-contact">
              <h3>Contact:</h3>
              <a href="mailto:support@jobportal.com">
                support@jobportal.com
              </a>
            </div>

            <div className="footer-bottom">
              <p>© 2026 Job Portal. All rights reserved.</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default SavedJobs;
