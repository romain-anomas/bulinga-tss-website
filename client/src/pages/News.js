import React from 'react';
import './News.css';

function News() {
  const newsItems = [
    {
      image: '/image/student1.jpg',
      title: 'Guest Speaker Session',
      date: 'January 15, 2024',
      category: 'Events',
      excerpt: 'We hosted industry professionals who shared valuable insights with our students about career opportunities in the tech sector.'
    },
    {
      image: '/image/student.jpg',
      title: 'Annual General Assembly',
      date: 'February 10, 2024',
      category: 'Events',
      excerpt: 'Students gathered for the annual general assembly to discuss academic progress and plan for the upcoming year.'
    },
    {
      image: '/image/download1.jpg',
      title: 'ICT Awareness Campaign',
      date: 'March 5, 2024',
      category: 'Community',
      excerpt: 'Our students participated in an ICT awareness campaign to promote digital literacy in the local community.'
    }
  ];

  return (
    <div className="news-page">
      {/* Page Header */}
      <div className="page-header" style={{backgroundImage: 'linear-gradient(135deg, rgba(30,64,175,0.9) 0%, rgba(59,130,246,0.85) 100%), url(/images/student.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container">
          <h1>News & Events</h1>
          <p>Stay updated with the latest from Bulinga TSS</p>
        </div>
      </div>

      {/* News Grid */}
      <div className="container">
        <div className="news-grid">
          {newsItems.map((item, idx) => (
            <div className="news-card" key={idx}>
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <span className="category">{item.category}</span>
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <span className="date">📅 {item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest news and events</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default News;