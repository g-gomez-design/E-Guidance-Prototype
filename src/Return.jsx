import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Return() {
  const pageStyle = {
    backgroundImage: `url('https://i.ibb.co/68038Yg/image-eab724.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    position: "relative",
    flexDirection: "column",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
  };

  const contentStyle = {
    zIndex: 2,
    width: "100%",
    padding: "2rem",
  };

  const bottomSectionStyle = {
    background: "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.1))",
    borderRadius: "10px",
    padding: "1.5rem",
    marginTop: "2rem",
  };

  const floatingButton = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 3,
    backgroundColor: "#28a745",
    border: "none",
    padding: "0.75rem 1.5rem",
  };

  return (
    <div style={pageStyle}>
      {/* Dark overlay */}
      <div style={overlayStyle}></div>

      {/* Centered content */}
      <div style={contentStyle}>
        <h1 className="fw-bold mb-4 display-5">Thank you for submitting!</h1>
        <button className="btn btn-info btn-lg">Return</button>

        {/* Bottom Section with lighter gradient */}
        <div
          className="container mt-5 text-start text-white"
          style={bottomSectionStyle}
        >
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <h5 className="fw-bold">ABOUT US</h5>
              <p>
                The E Guidance Connect is a reporting system for high school
                students who experience bullying.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <h5 className="fw-bold">CONTACT US</h5>
              <p>
                After sending your report, the guidance office will notify you
                when you’re available.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <h5 className="fw-bold">CHAT HERE</h5>
              <p>
                A chat model is available after you submit your report. Try
                chatting if you have any concerns!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating green chat button */}
      <button
        className="btn btn-success btn-lg rounded-pill shadow"
        style={floatingButton}
      >
        Chat in here
      </button>
    </div>
  );
}
