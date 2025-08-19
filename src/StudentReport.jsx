import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Report() {
  const [submittedAt, setSubmittedAt] = useState(null);
  const [evidence, setEvidence] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedAt(new Date());
  };

  const handleEvidenceChange = (e) => {
    const files = Array.from(e.target.files);
    setEvidence(files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    })));
  };

  return (
    <div
  className="bg-light"
  style={{ minHeight: '100vh', padding: '2rem' }}
>
  <div
    className="card shadow p-4 mx-auto"
    style={{
      width: '100%',
      maxWidth: '1100px',
    }}
  >
    <h3 className="mb-4 text-center">Report Form</h3>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Year & Section */}
          <div className="mb-3">
            <label htmlFor="yearSection" className="form-label">Year & Section</label>
            <input
              type="text"
              className="form-control"
              id="yearSection"
              placeholder="e.g. Grade 10"
              required
            />
          </div>

          {/* Age */}
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter your age"
              min="1"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Contact Number</label>
            <input
              type="tel"
              className="form-control"
              id="contact"
              placeholder="Enter your contact number"
              pattern="[0-9]{11}"
              required
            />
            <div className="form-text">Format: 11 digits (e.g., 09123456789)</div>
          </div>

          {/* Email Address */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Comments */}
          <div className="mb-3">
            <label htmlFor="comments" className="form-label">Comments</label>
            <textarea
              className="form-control"
              id="comments"
              rows="4"
              placeholder="Write your comments here..."
              required
            ></textarea>
          </div>

          {/* Evidence Upload */}
          <div className="mb-3">
            <label htmlFor="evidence" className="form-label">Evidence (Image)</label>
            <input
              type="file"
              className="form-control"
              id="evidence"
              accept="image/*"
              multiple
              onChange={handleEvidenceChange}
            />
          </div>

          {/* Preview */}
          {evidence.length > 0 && (
            <div className="mb-3">
              <p className="fw-bold">Preview:</p>
              <div className="d-flex flex-wrap gap-2">
                {evidence.map((item, index) => (
                  <img
                    key={index}
                    src={item.preview}
                    alt={`evidence-${index}`}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '5px',
                      border: '1px solid #ccc'
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </form>

        {/* Display submission date */}
        {submittedAt && (
          <div className="mt-4 text-center">
            <p className="fw-bold fs-5 text-success">
              Submitted on: {submittedAt.toLocaleDateString()} at {submittedAt.toLocaleTimeString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}