import React, { useState } from 'react';
import axios from 'axios';
import './Application.css';

function Application() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    parentPhone: '',
    program: '',
    level: ''
  });
  const [resultSlip, setResultSlip] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB');
        return;
      }
      setResultSlip(file);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Create FormData object
      const data = new FormData();
      
      // Append all form fields
      data.append('firstName', formData.firstName);
      data.append('lastName', formData.lastName);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('parentPhone', formData.parentPhone || '');
      data.append('program', formData.program);
      data.append('level', formData.level);
      
      // Append file if exists
      if (resultSlip) {
        data.append('resultSlip', resultSlip);
      }

      console.log('Sending application...');

      const response = await axios.post('http://localhost:5002/api/applications', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response:', response.data);

      if (response.data.success) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data?.error || err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="success-page">
        <div className="container">
          <div className="success-box">
            <div className="success-icon">✅</div>
            <h1>Application Submitted!</h1>
            <p>Thank you for applying to Bulinga T.S. School.</p>
            <p>We have sent a confirmation email to <strong>{formData.email}</strong></p>
            <p>We will contact you and your parent at <strong>{formData.parentPhone}</strong> shortly.</p>
            <a href="/" className="btn-home">Return Home</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="application-page">
      <div className="page-header">
        <div className="container">
          <h1>Online Application</h1>
          <p>Apply to join Bulinga T.S. School</p>
        </div>
      </div>

      <div className="container">
        <div className="form-wrapper">
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required 
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required 
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    placeholder="+250 7XX XXX XXX"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Parent/Guardian Information</h3>
              <div className="form-group">
                <label>Parent/Guardian Phone Number *</label>
                <input 
                  type="tel" 
                  name="parentPhone" 
                  value={formData.parentPhone}
                  onChange={handleChange}
                  required 
                  placeholder="+250 7XX XXX XXX"
                />
                <small>We will send notifications to this number</small>
              </div>
            </div>

            <div className="form-section">
              <h3>Academic Information</h3>
              <div className="form-group">
                <label>Select Program *</label>
                <select 
                  name="program" 
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a program...</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Business Services">Business Services</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Computer Systems and Architecture">Computer Systems and Architecture</option>
                  <option value="Networking and Internet Technologies">Networking and Internet Technologies</option>
                </select>
              </div>

              <div className="form-group">
                <label>Preferred Level *</label>
                <select 
                  name="level" 
                  value={formData.level}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select level...</option>
                  <option value="L3">Level 3</option>
                  <option value="L4">Level 4</option>
                  <option value="L5">Level 5</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h3>Documents</h3>
              <div className="form-group file-upload">
                <label>Upload Result Slip / Report Card (PDF, JPG, PNG)</label>
                <div className="file-input-wrapper">
                  <input 
                    type="file" 
                    name="resultSlip"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <div className="file-input-button">
                    {resultSlip ? '📄 ' + resultSlip.name : '📎 Click to upload file'}
                  </div>
                </div>
                <small>Maximum file size: 5MB</small>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-submit"
              disabled={loading}
            >
              {loading ? '⏳ Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Application;