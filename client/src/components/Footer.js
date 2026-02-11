import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Bulinga T.S. School</h3>
            <p>Education for Peace. Providing quality technical and vocational education in Rwanda.</p>
            <p>📞 +250 784 969 910</p>
            <p>✉️ bulingatsschool@gmail.com</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/tenders">Tenders</Link></li>
              <li><Link to="/apply">Apply Online</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Programs</h3>
            <ul>
              <li><Link to="/programs/accounting">Accounting</Link></li>
              <li><Link to="/programs/business-services">Business Services</Link></li>
              <li><Link to="/programs/software-development">Software Development</Link></li>
              <li><Link to="/programs/computer-systems">Computer Systems</Link></li>
              <li><Link to="/programs/networking">Networking</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <p>Follow us on LinkedIn for updates</p>
            <a href="https://www.linkedin.com/in/bulinga-tss-80443b3a9/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
              LinkedIn Profile
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bulinga Technical Secondary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;