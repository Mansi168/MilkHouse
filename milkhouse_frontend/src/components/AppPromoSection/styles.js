import styled from "styled-components";

export const Container = styled.div`
  background:rgb(47, 141, 47);
  color: white;
  padding: 60px 10%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  max-width: 50%;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-top: 10px;
  span {
    font-weight: bold;
  }
`;

export const SubText = styled.p`
  font-size: 16px;
  margin-top: 10px;
  opacity: 0.8;
`;

export const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  border: 1px dashed white;
`;

export const Step = styled.div`
  text-align: center;
`;

export const StepNumber = styled.span`
  font-size: 20px;
  font-weight: bold;
  opacity: 0.8;
`;

export const StepTitle = styled.h3`
  font-size: 18px;
  margin-top: 5px;
`;

export const StepDesc = styled.p`
  font-size: 14px;
  opacity: 0.7;
`;

export const DownloadSection = styled.div`
  margin-top: 20px;
`;

export const StoreButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  img {
    width: 140px;
    cursor: pointer;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const PhoneImage = styled.img`
  width: 120px;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;

export const MilkSplash = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 50px;
  background: url("/path-to-milk-splash.png") no-repeat bottom center;
  background-size: cover;
`;
