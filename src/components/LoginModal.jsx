import React , {useState} from 'react'


    const LoginModal = ({onClose ,loginSuccess}) => {

      
    const[error,setError] = useState("");

      const handlelogin = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const email = formData.get("email");
        const password = formData.get("password");

        if(email === "" && password === ""){
          setError("Email and password are required");
        }
        else if (email === "" ) {
          setError("Email is required");
        }
        else if(password === ""){
          setError("Password is required");
        }
        else{
          setError("");
          onClose(false);
          loginSuccess(true);
        }

      };

      

  return (
    <div className="login-overlay">

      <div className="login-modal">

        <button 
        className="close-btn"
        onClick={() => onClose(false)}
        >Close</button>

        <h2>Welcome Back</h2>
        <p className="login-subtitle">
          Login to continue to Job Portal
        </p>

     
       {error && <p className="login-error">{error}</p>}

        <form className="login-form" onSubmit={handlelogin}>


          <div className="form-group">
            
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              id="login-email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form >

        <p className="signup-text">
          Don't have an account? <a href="#">Sign Up</a>
        </p>

      </div>

    </div>
  );

    }
export default LoginModal;
