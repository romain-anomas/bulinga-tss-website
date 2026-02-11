import React from 'react';
import { Link } from 'react-router-dom';
import './Programs.css';

function Programs() {
  const programs = [
    {
      name: 'Accounting',
      slug: 'accounting',
      levels: 'L3, L4 & L5',
      duration: '3 years',
      description: 'Comprehensive accounting program covering financial reporting, taxation, auditing, and management accounting. Prepares students for professional accounting careers.',
      careers: ['Accountant', 'Auditor', 'Financial Analyst', 'Tax Consultant', 'Bookkeeper']
    },
    {
      name: 'Business Services',
      slug: 'business-services',
      levels: 'L3, L4 & L5',
      duration: '3 years',
      description: 'Training in business administration, customer service, marketing, and entrepreneurship. Develops skills for modern business environments.',
      careers: ['Business Administrator', 'Customer Service Manager', 'Marketing Officer', 'Entrepreneur']
    },
    {
      name: 'Software Development',
      slug: 'software-development',
      levels: 'L4 & L5',
      duration: '2-3 years',
      description: 'Intensive training in programming, software engineering, database management, and application development.',
      careers: ['Software Developer', 'Web Developer', 'Mobile App Developer', 'Database Administrator']
    },
    {
      name: 'Computer Systems and Architecture',
      slug: 'computer-systems',
      levels: 'L5',
      duration: '2 years',
      description: 'Advanced training in computer hardware, system design, network architecture, and infrastructure management.',
      careers: ['System Administrator', 'Network Architect', 'IT Infrastructure Manager', 'Hardware Specialist']
    },
    {
      name: 'Networking and Internet Technologies',
      slug: 'networking',
      levels: 'L5',
      duration: '2 years',
      description: 'Specialized program in network design, configuration, security, and internet technologies including cloud computing.',
      careers: ['Network Engineer', 'Cybersecurity Specialist', 'Cloud Administrator', 'IT Support Specialist']
    }
  ];

  return (
    <div className="programs-page">
      {/* Page Header */}
      <div className="page-header" style={{backgroundImage: 'linear-gradient(135deg, rgba(30,64,175,0.9) 0%, rgba(59,130,246,0.85) 100%), url(/images/student in all levels.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container">
          <h1>Our Training Programs</h1>
          <p>Accredited TVET programs designed for your success</p>
        </div>
      </div>

      {/* Programs List */}
      <div className="container">
        <div className="programs-list">
          {programs.map((program, idx) => (
            <div className="program-detail-card" key={idx}>
              <div className="program-info">
                <h2>{program.name}</h2>
                <div className="program-meta">
                  <span>📚 RTQF {program.levels}</span>
                  <span>⏱️ {program.duration}</span>
                </div>
                <p>{program.description}</p>
                <div className="career-tags">
                  {program.careers.map((career, cidx) => (
                    <span key={cidx} className="career-tag">{career}</span>
                  ))}
                </div>
                <Link to={`/programs/${program.slug}`} className="btn-view">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Not Sure Which Program to Choose?</h2>
          <p>Contact our admissions team for guidance on selecting the right program for your career goals.</p>
          <Link to="/contact" className="btn-primary">Contact Admissions</Link>
        </div>
      </section>
    </div>
  );
}

export default Programs;