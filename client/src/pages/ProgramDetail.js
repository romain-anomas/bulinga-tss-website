import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProgramDetail.css';

function ProgramDetail() {
  const { slug } = useParams();
  
  const programData = {
    'accounting': {
      name: 'Accounting',
      levels: 'L3, L4 & L5',
      duration: '3 years',
      description: 'Comprehensive accounting program covering financial reporting, taxation, auditing, and management accounting.',
      careers: ['Accountant', 'Auditor', 'Financial Analyst', 'Tax Consultant', 'Bookkeeper'],
      requirements: 'O-Level certificate with passes in Mathematics and English'
    },
    'business-services': {
      name: 'Business Services',
      levels: 'L3, L4 & L5',
      duration: '3 years',
      description: 'Training in business administration, customer service, marketing, and entrepreneurship.',
      careers: ['Business Administrator', 'Customer Service Manager', 'Marketing Officer', 'Entrepreneur'],
      requirements: 'O-Level certificate with passes in English and any business subject'
    },
    'software-development': {
      name: 'Software Development',
      levels: 'L4 & L5',
      duration: '2-3 years',
      description: 'Intensive training in programming, software engineering, database management, and application development.',
      careers: ['Software Developer', 'Web Developer', 'Mobile App Developer', 'Database Administrator'],
      requirements: 'O-Level with Mathematics and English, or Level 3 in Computer Applications'
    },
    'computer-systems': {
      name: 'Computer Systems and Architecture',
      levels: 'L5',
      duration: '2 years',
      description: 'Advanced training in computer hardware, system design, network architecture, and infrastructure management.',
      careers: ['System Administrator', 'Network Architect', 'IT Infrastructure Manager', 'Hardware Specialist'],
      requirements: 'A-Level with Mathematics or Computer Studies, or Level 4 in IT'
    },
    'networking': {
      name: 'Networking and Internet Technologies',
      levels: 'L5',
      duration: '2 years',
      description: 'Specialized program in network design, configuration, security, and internet technologies.',
      careers: ['Network Engineer', 'Cybersecurity Specialist', 'Cloud Administrator', 'IT Support Specialist'],
      requirements: 'A-Level with Mathematics or Physics, or Level 4 in IT'
    }
  };

  const program = programData[slug] || programData['accounting'];

  return (
    <div className="program-detail-page">
      <div className="page-header">
        <div className="container">
          <Link to="/programs" className="back-link">← Back to Programs</Link>
          <h1>{program.name}</h1>
        </div>
      </div>

      <div className="container">
        <div className="detail-grid">
          <div className="main-content">
            <h2>Program Overview</h2>
            <p>{program.description}</p>

            <h2>Career Opportunities</h2>
            <div className="careers-list">
              {program.careers.map((career, idx) => (
                <span key={idx} className="career-item">{career}</span>
              ))}
            </div>

            <h2>Entry Requirements</h2>
            <p>{program.requirements}</p>
          </div>

          <div className="sidebar">
            <div className="info-box">
              <h3>📚 Qualification Level</h3>
              <p>RTQF {program.levels}</p>
            </div>
            
            <div className="info-box">
              <h3>⏱️ Duration</h3>
              <p>{program.duration}</p>
            </div>
            
            <div className="info-box">
              <h3>💼 Career Paths</h3>
              <p>{program.careers.length}+ options</p>
            </div>

            <div className="cta-box">
              <h3>Ready to Enroll?</h3>
              <p>Applications are open for the upcoming intake</p>
              <Link to="/apply" className="btn-apply">Apply Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetail;