import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const programs = [
    { name: 'Accounting', icon: '📊', desc: 'Financial reporting, taxation & auditing', levels: 'L3, L4 & L5' },
    { name: 'Business Services', icon: '💼', desc: 'Business administration & management', levels: 'L3, L4 & L5' },
    { name: 'Software Development', icon: '💻', desc: 'Programming & application development', levels: 'L4 & L5' },
    { name: 'Computer Systems', icon: '🖥️', desc: 'Hardware & system architecture', levels: 'L5' },
    { name: 'Networking', icon: '🌐', desc: 'Network design & internet technologies', levels: 'L5' },
  ];

  const features = [
    { icon: '🏆', title: 'Accredited Programs', desc: 'All programs certified by Rwanda TVET Board' },
    { icon: '👨‍🏫', title: 'Expert Teachers', desc: 'Qualified instructors with industry experience' },
    { icon: '🏫', title: 'Modern Facilities', desc: 'Well-equipped labs and learning resources' },
    { icon: '💼', title: 'Job Placement', desc: 'Strong industry connections for graduates' },
  ];

  const testimonials = [
    { 
      image: '/image/what1.jpg',
      text: "Bulinga TSS gave me the skills to start my own business. The practical training was invaluable.", 
      author: "Niyogisubizo Tion, Graduate 2026" 
    },
    { 
      image: '/image/what2.jpg',
      text: "The software development program prepared me perfectly for my current job in tech.", 
      author: "Ozzeh Murirwa, Alumni" 
    },
    { 
      image: '/image/what.jpg',
      text: "Quality education with supportive teachers. I highly recommend this school.", 
      author: "Fredy Mugisha, Current Student" 
    },
  ];

  return (
    <div className="home">
      {/* Hero Section with Background Image */}
      <section className="hero" >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <h1>Education for Peace,<br/>Skills for the Future</h1>
            <p>Join Bulinga Technical Secondary School and unlock your potential with quality TVET education in Rwanda</p>
            <div className="hero-buttons">
              <Link to="/apply" className="btn-primary">Apply Now</Link>
              <Link to="/programs" className="btn-secondary">Explore Programs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>5+</h3>
            <p>Accredited Programs</p>
          </div>
          <div className="stat-item">
            <h3>591+</h3>
            <p>Students Enrolled</p>
          </div>
          <div className="stat-item">
            <h3>38+</h3>
            <p>Expert Teachers</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Employment Rate</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <h2 className="section-title">Our Training Programs</h2>
          <p className="section-subtitle">Choose from our accredited TVET programs designed to equip you with practical skills for the modern workforce</p>
          
          <div className="programs-grid">
            {programs.map((prog, idx) => (
              <div className="program-card" key={idx}>
                <span className="program-icon">{prog.icon}</span>
                <h3>{prog.name}</h3>
                <p>{prog.desc}</p>
                <span className="level-badge">RTQF {prog.levels}</span>
                <Link to={`/programs/${prog.name.toLowerCase().replace(/\s+/g, '-')}`} className="learn-more">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Students Showcase Section */}
      <section className="students-showcase">
        <div className="container">
          <div className="showcase-content">
            <div className="showcase-text">
              <h2>Our Students</h2>
              <p>Join over 591 students who are building their futures at Bulinga TSS. Our diverse student body comes from all over Rwanda to receive quality technical education.</p>
              <Link to="/apply" className="btn-primary">Join Us Today</Link>
            </div>
            <div className="showcase-image">
              <img src="/image/student1.jpg" alt="Bulinga TSS Students" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Bulinga TSS?</h2>
          <p className="section-subtitle">We provide quality technical education that prepares students for successful careers</p>
          
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div className="feature-item" key={idx}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">Hear from our graduates and current students</p>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.author} />
                </div>
                <p>"{testimonial.text}"</p>
                <span className="testimonial-author">— {testimonial.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Showcase Section */}
      <section className="event-showcase">
        <div className="container">
          <div className="event-content">
            <div className="event-image">
              <img src="/image/student.jpg" alt="School Assembly" />
            </div>
            <div className="event-text">
              <h2>Community & Events</h2>
              <p>At Bulinga TSS, we believe in holistic education. Our students participate in various events, workshops, and community activities that build character and leadership skills.</p>
              <Link to="/news" className="btn-primary">View Events</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Applications are now open for the upcoming academic year. Join thousands of successful graduates who have built their careers with Bulinga TSS.</p>
          <Link to="/apply" className="btn-primary">Apply Online Now</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;