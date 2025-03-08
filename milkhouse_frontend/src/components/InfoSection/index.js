import React from 'react';
import Icon1 from "../../image/svg-1.svg";
import Icon2 from "../../image/svg-2.svg";
import Icon3 from "../../image/svg-3.svg";
import styled from 'styled-components';

const InfoContainer = styled.div`
  background: rgb(47, 141, 47);
  color: white;
  padding: 80px 20px;
  text-align: center;
`;

const InfoWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #f8f8f8;
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ServicesCard = styled.div`
  background: white;
  color: rgb(47, 141, 47);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ServicesIcon = styled.img`
  width: 60px;
  margin-bottom: 10px;
`;

const ServicesH1 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ServicesH2 = styled.p`
  font-size: 1rem;
  color: #333;
`;

const About = () => {
  return (
    <InfoContainer id="aboutSection">
      <InfoWrapper>
        <Heading>Freshness from farm to your home – Quality dairy, naturally</Heading>
        <Subtitle>We provide fresh and healthy dairy products directly from our farm.</Subtitle>
        <ServicesContainer>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH1>Serves Dual Purpose</ServicesH1>
            <ServicesH2>
              A unified platform simplifying dairy shopping for customers and supporting dairy owners.
            </ServicesH2>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH1>Customer Support</ServicesH1>
            <ServicesH2>
              Dedicated support for inquiries and feedback to enhance customer satisfaction.
            </ServicesH2>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH1>E-Shopping</ServicesH1>
            <ServicesH2>
              Buy fresh dairy products online and enjoy the benefits of healthy living.
            </ServicesH2>
          </ServicesCard>
        </ServicesContainer>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default About;
