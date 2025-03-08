import styled from "styled-components";

export const ServicesContainer = styled.div`
  background: linear-gradient(135deg, #eaf7e1, #d4ebc2); /* Soft green gradient */
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServicesContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  gap: 50px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ServicesText = styled.div`
  flex: 1;
`;

export const ServicesH1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #2a5d2e; /* Dark Green */
  margin-bottom: 20px;
`;

export const ServicesP = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #3d7041; /* Slightly muted green */
  margin-bottom: 15px;
`;

export const ServicesImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const ServicesMainImage = styled.img`
  width: 90%;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const ServicesImageGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 800px;
`;

export const ServicesIcon = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;


export const ServicesBenefits = styled.div`
  background: #f0f9eb; /* Light green background */
  border-radius: 12px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const BenefitsTitle = styled.h2`
  font-size: 22px;
  color: #2a5d2e;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #3d7041;
  margin-bottom: 10px;
  gap: 10px; /* Space between emoji and text */
  font-weight: 500;

  span {
    flex: 1;
  }
`;
