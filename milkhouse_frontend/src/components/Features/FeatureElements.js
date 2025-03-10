import styled from 'styled-components';

export const Container = styled.div`
    position:static;
    max-width:1200px;
    padding: 0 15px;
    margin: 0 auto;
    box-sizing: border-box;
    background-color:white; 
`;

export const Containertitle = styled.h1`
    font-weight: bold;
    ${'' /* align-items: center; */}
    text-align:center;
    justify-content: center;
    position: relative;
    margin-bottom: 50px;
    margin-top: 50px;
    font-size: 45px;
    font-weight: 600;
`;
export const FeaturesCard = styled.div`
  position: relative;
  margin-bottom: 25px;
  border-radius: 50%;
  padding: 5px;
  border: 2px dashed #cdcdcd;
  display: inline-block;
  
  &:hover {
    visibility: visible;
    transform: rotate(3deg);
  }

  /* Define keyframes animations outside of :hover */
`;


export const FeaturesWrapper = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 15px 30px;
  ${'' /* color: white; */}
  ${'' /* background-color: white; */}

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const FeaturesIcon = styled.img`
  height: 208px;
  width: 208px;
  border-radius: 50%;
  transition: transform 0.2s ease; /* Add a smooth transition effect */
  &:hover {
    transform: rotate(15deg);
  }
`;

export const FeaturesH1 = styled.h1`
  margin-bottom: 64px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-clr);

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const FeaturesH2 = styled.h2`
  margin-bottom: 15px;
 
    font-size: 26px;
    font-weight: 700;
`;

export const FeaturesP = styled.p`
    position: relative;
    margin-bottom: 30px;
    text-align: center;
   
  
  &:hover {
    /* -webkit-animation-name: rotate; */
    visibility: visible;
    animation-name:"rotate";
    animation-duration: 1500ms;
    
  }
  
`;