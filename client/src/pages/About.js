import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Page Header with Background Image */}
      <div className="page-header" style={{backgroundImage: 'linear-gradient(135deg, rgba(30,64,175,0.9) 0%, rgba(59,130,246,0.85) 100%), url(/image/school buildings.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container">
          <h1>About Bulinga T.S. School</h1>
          <p>Education for Peace - Building Rwanda's Future</p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Bulinga Technical Secondary School is a public TVET institution located in Mushishiro Sector, 
              Muhanga District, Southern Province of Rwanda. We are registered with the Rwanda TVET Board (RTB) 
              and operate under the Ministry of Education (MINEDUC).
            </p>
            <p>
              Our school provides quality technical and vocational education to Rwandan youth, preparing them 
              for successful careers in Accounting, Business Services, Software Development, Computer Systems, 
              and Networking.
            </p>
            
            <div className="about-image">
              <img src="/image/download.jpg" alt="Students at Bulinga TSS" />
            </div>

            <h2>Our Mission</h2>
            <p>
              To provide quality technical and vocational education that equips students with practical skills, 
              knowledge, and values necessary for self-reliance and national development.
            </p>
            
            <h2>Our Vision</h2>
            <p>
              To become a center of excellence in technical and vocational education, producing competent 
              graduates who meet the labor market demands and contribute to Rwanda's development.
            </p>
          </div>

          <div className="contact-info-box">
            <h3>Contact Information</h3>
            <p><strong>📍 Address:</strong><br/>
            Mushishiro Sector, Muhanga District<br/>
            Southern Province, Rwanda</p>
            
            <p><strong>📞 Phone:</strong><br/>
            +250 784 969 910</p>
            
            <p><strong>✉️ Email:</strong><br/>
            bulingatsschool@gmail.com</p>
            
            <p><strong>📘 Facebook:</strong><br/>
            <a href="https://www.facebook.com/groups/145419572215780/" target="_blank" rel="noopener noreferrer">
              Join our Facebook Group
            </a></p>
            
            <p><strong>💼 LinkedIn:</strong><br/>
            <a href="https://www.linkedin.com/in/bulinga-tss-80443b3a9/" target="_blank" rel="noopener noreferrer">
              Bulinga TSS Profile
            </a></p>

            <div className="about-small-image">
              <img src="/images/images(1).jpg" alt="Bulinga TSS Students" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;