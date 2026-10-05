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
   </main>
  )
}

export default Apply