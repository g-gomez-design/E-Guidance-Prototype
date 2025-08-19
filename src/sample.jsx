import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function StudentHome() {
  return (
    <div className="d-flex flex-column flex-lg-row vh-100">
      
      {/* Left Side with Image & About */}
      <div className="w-100 w-lg-50 d-flex flex-column">
        {/* Image at the top */}
        <div 
          style={{ 
            backgroundImage: "url('https://via.placeholder.com/600x400')", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            height: "80vh"   // fixed height so it stays at the top
          }}
        />
        {/* About Section at bottom */}
        <div className="mt-auto text-white p-3" style={{ background: "rgba(0,0,0,0.8)" }}>
          <h5 className="fw-bold">ABOUT:</h5>
          <p style={{ fontSize: "14px" }}>
            The E Guidance Connect in Filamer Christian University is a first website 
            with a built-in reporting system for high school students who experience 
            getting bullied.
          </p>
        </div>
      </div>

      {/* Right Side with Title & Button */}
      <div 
        className="d-flex flex-column justify-content-center align-items-center w-100 w-lg-50 text-center p-4 p-lg-5" 
        style={{ 
          backgroundColor: "#4ad7c9",
          borderTopLeftRadius: "40px"
        }}
      >
        <h1 className="fw-bold display-5 display-lg-3">E Guidance Connect</h1>
        <h3 className="mb-3">Bullying Report</h3>
        <p className="mb-4 fw-semibold">FCU</p>

        <button 
          className="btn fw-bold px-4 py-2" 
          style={{ 
            backgroundColor: "#1a4d7a", 
            color: "white", 
            borderRadius: "15px",
            fontSize: "18px"
          }}
        >
          Report Now
        </button>
      </div>
    </div>
  )
}
