import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function StudentLogin() {
  // Set website tab title
  useEffect(() => {
    document.title = "E-Guidance Connect Web Portal";
  }, []);

  return (
    <div 
      className="d-flex flex-column justify-content-center align-items-center vh-100" 
      style={{ 
        background: 'linear-gradient(135deg, #3b29ddff 0%, #25fc7fff 100%)'
      }}
    >
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
          Student Login
        </h2>
        
        <form>
          <div className="mb-3">
            <label htmlFor="studentName" className="form-label">Student Name</label>
            <input 
              type="text" 
              className="form-control bg-transparent text-white border-light" 
              id="studentName" 
              placeholder="Enter your name"
              style={{ borderRadius: '10px' }}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="studentId" className="form-label">Student ID</label>
            <input 
              type="text"
              className="form-control bg-transparent text-white border-light" 
              id="studentId" 
              placeholder="e.g. 12-HS-0001"
              pattern="^\d{2}-[A-Z]{2}-\d{4}$"
              title="Format: 12-HS-0001"
              style={{ borderRadius: '10px', textTransform: 'uppercase' }}
              required
            />
          </div>

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
        </form>
      </div>
    </div>
  )
}
