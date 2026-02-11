import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { FaArrowRight, FaCalculator, FaBriefcase, FaLaptopCode, FaServer, FaNetworkWired } from 'react-icons/fa';

const Section = styled.section`
  padding: 80px 0;
  background: #f8fafc;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    color: #0f172a;
    margin-bottom: 15px;
  }

  p {
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Card = styled(Link)`
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.color || '#1e40af'};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  color: #0f172a;
  margin-bottom: 10px;
  font-size: 1.3rem;
`;

const CardDescription = styled.p`
  color: #64748b;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;

  span {
    color: #1e40af;
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

const LearnMore = styled.span`
  color: #1e40af;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
`;

const programIcons = {
  'accounting': { icon: FaCalculator, color: '#059669' },
  'business-services': { icon: FaBriefcase, color: '#d97706' },
  'software-development': { icon: FaLaptopCode, color: '#7c3aed' },
  'computer-systems-architecture': { icon: FaServer, color: '#dc2626' },
  'networking-internet-technologies': { icon: FaNetworkWired, color: '#0891b2' }
};

function ProgramCards() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    axios.get('/api/programs')
      .then(res => setPrograms(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Section>
      <div className="container">
        <SectionHeader>
          <h2>Our Training Programs</h2>
          <p>Choose from our accredited TVET programs designed to equip you with practical skills for the modern workforce.</p>
        </SectionHeader>

        <CardsGrid>
          {programs.map(program => {
            const IconComponent = programIcons[program.slug]?.icon || FaLaptopCode;
            const iconColor = programIcons[program.slug]?.color || '#1e40af';
            
            return (
              <Card to={`/programs/${program.slug}`} key={program.id}>
                <IconWrapper color={iconColor}>
                  <IconComponent />
                </IconWrapper>
                <CardTitle>{program.name}</CardTitle>
                <CardDescription>{program.description?.substring(0, 120)}...</CardDescription>
                <CardMeta>
                  <span>RTQF {program.levels}</span>
                  <LearnMore>Learn More <FaArrowRight /></LearnMore>
                </CardMeta>
              </Card>
            );
          })}
        </CardsGrid>
      </div>
    </Section>
  );
}

export default ProgramCards;