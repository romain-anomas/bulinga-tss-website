import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <span>📞 +250 784 969 910</span>
          <span>✉️ bulingatsschool@gmail.com</span>
          <div className="social-links">
            <a href="https://www.facebook.com/groups/145419572215780/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/in/bulinga-tss-80443b3a9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="container nav-container">
          <Link to="/" className="logo">
            <img src="/image/logo.JPG" alt="Bulinga TSS Logo" className="logo-img" />
            <div className="logo-text">
              <h1>BULINGA T.S. SCHOOL</h1>
              <small>Education for Peace</small>
            </div>
          </Link>
          
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
          
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/programs" onClick={() => setMenuOpen(false)}>Programs</Link></li>
            <li><Link to="/news" onClick={() => setMenuOpen(false)}>News</Link></li>
            <li><Link to="/tenders" onClick={() => setMenuOpen(false)}>Tenders</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/apply" className="btn-apply" onClick={() => setMenuOpen(false)}>Apply Now</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;