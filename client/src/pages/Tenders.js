import React from 'react';
import './Tenders.css';

function Tenders() {
  const tenders = [
    {
      title: 'Supply of Computer Equipment',
      description: 'Tender for supply and installation of 50 desktop computers for Computer Systems and Architecture department.',
      deadline: 'March 15, 2024',
      status: 'open'
    },
    {
      title: 'Catering Services',
      description: 'Provision of catering services for boarding students for the academic year 2024.',
      deadline: 'February 28, 2024',
      status: 'closed'
    },
    {
      title: 'School Bus Maintenance',
      description: 'Annual maintenance contract for school transportation vehicles.',
      deadline: 'April 10, 2024',
      status: 'open'
    }
  ];

  return (
    <div className="tenders-page">
      <div className="page-header">
        <div className="container">
          <h1>Tenders & Procurement</h1>
          <p>Current procurement opportunities at Bulinga TSS</p>
        </div>
      </div>

      <div className="container">
        <div className="tenders-list">
          {tenders.map((tender, idx) => (
            <div className={`tender-card ${tender.status}`} key={idx}>
              <div className="tender-header">
                <h3>{tender.title}</h3>
                <span className={`status-badge ${tender.status}`}>
                  {tender.status.toUpperCase()}
                </span>
              </div>
              <p>{tender.description}</p>
              <div className="tender-footer">
                <span>📅 Deadline: {tender.deadline}</span>
                {tender.status === 'open' && (
                  <button className="btn-download">Download Tender Doc</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tenders;