import React from 'react'

const Apply = () => {
  return (
   <main className='apply-container'>
    <h2>Apply for Frontend Developer</h2>

    <form className='apply-form'>


        <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" />

        </div>

        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

        </div>

         
         <div className="form-group">
            <label htmlFor="number">Years of Experience</label>
            <input type="number" id="number" name="number" />

        </div>

         
         <div className="form-group">
            <label htmlFor="availability">Available to Join</label>

            <select id="availability" name="availability">
              <option value="">Select availability</option>
              <option value="immediately">Immediately</option>
              <option value="15-days">Within 15 days</option>
              <option value="30-days">Within 30 days</option>
              <option value="60-days">Within 60 days</option>
            </select>
         </div> 


        <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="number" id="phoneNumber" name="phoneNumber" />
         

        </div>

        <div className="form-group">
            <label htmlFor="resume">Resume</label>
            <input type="file" id="resume" name="resume" />

        </div>


        <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter</label>
            <input type="file" id="coverLetter" name="coverLetter" />

        </div>
        
        <button type="submit">Submit Application</button>

    </form>


    <footer>
      <section className ="footer">

        <div className="footer-container">
          <h2>Find relevant job opportunities, explore career options, and take the next step toward your career goals.</h2>

         <div className="footer-card-container"> <div className="footer-card">
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
      <h3>Compant</h3>
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
   </main>
  )
}

export default Apply