import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowRight, FaGraduationCap } from 'react-icons/fa';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 100px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="80" cy="20" r="40" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="80" r="30" fill="rgba(255,255,255,0.05)"/></svg>');
    background-size: cover;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  background: white;
  color: #1e40af;
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
`;

const SecondaryButton = styled(Link)`
  background: transparent;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: 600;
  border: 2px solid white;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s;

  &:hover {
    background: white;
    color: #1e40af;
  }
`;

const StatsBar = styled.div`
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding: 30px 0;
  margin-top: 60px;

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
  }
`;

const StatItem = styled.div`
  text-align: center;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 5px;
  }

  p {
    opacity: 0.8;
    font-size: 0.95rem;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <div className="container">
        <HeroContent>
          <h1>Education for Peace, Skills for the Future</h1>
          <p>Join Bulinga Technical Secondary School and unlock your potential with quality TVET education in Accounting, Business, Software Development, and ICT.</p>
          <ButtonGroup>
            <PrimaryButton to="/apply">
              Apply Now <FaArrowRight />
            </PrimaryButton>
            <SecondaryButton to="/programs">
              <FaGraduationCap /> Explore Programs
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </div>

      <StatsBar>
        <div className="container">
          <StatItem>
            <h3>5+</h3>
            <p>Accredited Programs</p>
          </StatItem>
          <StatItem>
            <h3>1000+</h3>
            <p>Students Enrolled</p>
          </StatItem>
          <StatItem>
            <h3>50+</h3>
            <p>Expert Teachers</p>
          </StatItem>
          <StatItem>
            <h3>95%</h3>
            <p>Employment Rate</p>
          </StatItem>
        </div>
      </StatsBar>
    </HeroContainer>
  );
}

export default Hero;