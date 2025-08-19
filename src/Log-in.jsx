import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {
  // Set website tab title
  useEffect(() => {
    document.title = "E-Guidance Connect Web Portal";
  }, []);

  return (
    <div 
      className="d-flex flex-column vh-100" 
      style={{ 
        background: 'linear-gradient(135deg, #3b29ddff 0%, #25fc7fff 100%)'
      }}
    >
      {/* Centered Content (Title + Login Form) */}
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
        {/* Website Title */}
        <h1 
          className="text-white fw-bold mb-4 text-center" 
          style={{ letterSpacing: '1px', textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}
        >
          E-Guidance Connect Web Portal
        </h1>

        <div 
          className="p-4 shadow-lg" 
          style={{ 
            width: '380px', 
            borderRadius: '20px', 
            background: 'rgba(255, 255, 255, 0.15)', 
            backdropFilter: 'blur(10px)', 
            WebkitBackdropFilter: 'blur(10px)', 
            border: '1px solid rgba(255, 255, 255, 0.3)', 
            color: 'white'
          }}
        >
          <h2 className="text-center mb-4 fw-bold" style={{ letterSpacing: '1px' }}>
            Login
          </h2>
          
          <form>
            {/* Username or Email */}
            <div className="mb-3">
              <label htmlFor="usernameOrEmail" className="form-label">Username or Email Address</label>
              <input 
                type="text" 
                className="form-control bg-transparent text-white border-light" 
                id="usernameOrEmail" 
                placeholder="Enter your username or email"
                style={{ borderRadius: '10px' }}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password"
                className="form-control bg-transparent text-white border-light" 
                id="password" 
                placeholder="Enter your password"
                style={{ borderRadius: '10px' }}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button 
                type="submit" 
                className="btn w-100 mt-3 fw-bold" 
                style={{ 
                  background: 'linear-gradient(90deg, #1af688ff, #09922fff)', 
                  border: 'none', 
                  borderRadius: '12px', 
                  color: 'white', 
                  padding: '10px' 
                }}
              >
                Login
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-center mt-3">
              <small>
                Forgot password? <span className="fw-bold text-warning">Contact Admin</span>
              </small>
            </div>
          </form>
        </div>
      </div>

      {/* About Section at bottom */}
      <div className="text-white p-3 w-100 text-center" style={{ background: "rgba(0,0,0,0.8)" }}>
        <h5 className="fw-bold">ABOUT:</h5>
        <p style={{ fontSize: "14px" }}>
          The E Guidance Connect in Filamer Christian University is a first website 
          with a built-in reporting system for high school students who experience 
          getting bullied.
        </p>
      </div>
    </div>
  )
}
