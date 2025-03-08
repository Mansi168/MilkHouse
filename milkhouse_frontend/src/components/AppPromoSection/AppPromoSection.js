import React from "react";
import styled from "styled-components";
// import googlePlay from "../assets/google-play.png"; // Add your image
// import appStore from "../assets/app-store.png"; // Add your image
import phoness1 from "../../assets/phoness1.png"; // Add phone screenshots
import phoness2 from "../../assets/phoness2.png";
// import phone3 from "../assets/phone3.png";
import {Container, Content, Title, Description, SubText, Steps , Step, PhoneImage, ImageWrapper, StoreButtons, DownloadSection, StepDesc, StepTitle, StepNumber, MilkSplash} from "./styles.js"

const AppPromoSection = () => {
  return (
    <Container>
      <Content>
        <Title>Manage Your Orders Effortlessly!</Title>
        <Description>
          Download the <span>Milkdelights</span> app, track deliveries, and get a
          legen-dairy experience. Hassle-free with a single click.
        </Description>
        <SubText>Farm-fresh desi cow milk delivered right to your door!</SubText>

        <Steps>
          <Step>
            <StepNumber>01</StepNumber>
            <StepTitle>Install App</StepTitle>
            <StepDesc>Get real-time delivery updates</StepDesc>
          </Step>
          <Step>
            <StepNumber>02</StepNumber>
            <StepTitle>Add Amount in Wallet</StepTitle>
            <StepDesc>Get Your Milk and Dairy Products</StepDesc>
          </Step>
          <Step>
            <StepNumber>03</StepNumber>
            <StepTitle>Place Your Order</StepTitle>
            <StepDesc>Seamless Experience</StepDesc>
          </Step>
        </Steps>

        <DownloadSection>
          <p>Get The App</p>
          {/* <StoreButtons>
            <img src={googlePlay} alt="Google Play" />
            <img src={appStore} alt="App Store" />
          </StoreButtons> */}
        </DownloadSection>
      </Content>

      <ImageWrapper>
        <PhoneImage src={phoness1} alt="App Screenshot" />
        <PhoneImage src={phoness2} alt="App Screenshot" />
        <PhoneImage src={phoness2} alt="App Screenshot" />
      </ImageWrapper>

      <MilkSplash />
    </Container>
  );
};

export default AppPromoSection;
