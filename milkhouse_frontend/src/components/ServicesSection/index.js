import React from "react";
import {
  ServicesContainer,
  ServicesContent,
  ServicesText,
  ServicesH1,
  ServicesP,
  ServicesImageGrid,
  ServicesIcon,
  ServicesImageWrapper,
  ServicesMainImage,
  BenefitsTitle,
  BenefitItem,
  ServicesBenefits
} from "./ServicesElements";

const url1 =
  "https://res.cloudinary.com/dv6yivx37/image/upload/v1690471828/milkhouse/kfwjcpdgayndphlure4j.png";
const url2 =
  "https://res.cloudinary.com/dv6yivx37/image/upload/v1690472973/milkhouse/lqlhhvvryfd5hdvs7dij.png";
const url3 =
  "https://res.cloudinary.com/dv6yivx37/image/upload/v1690472807/milkhouse/apqbx3euquv7rl8fwdc3.png";
const MainImage =
  "https://res.cloudinary.com/dengnzxkd/image/upload/f_auto,q_auto/v1/Milkdelights_Images/cowimage";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesContent>
        {/* Left Section - Text */}
        <ServicesText>
          <ServicesH1>Experience Our Organic Dairy Farm</ServicesH1>
          <ServicesP>
            Our farm has been delivering **100% natural A2 milk** for over
            20 years. We prioritize **organic, fresh, and chemical-free dairy**
            for your health and well-being.
          </ServicesP>
          <ServicesBenefits>
  <BenefitsTitle>Why Choose Us? 🌿</BenefitsTitle>
  <BenefitItem>
    ✅ <span>No Preservatives, 100% Pure A2 Milk</span>
  </BenefitItem>
  <BenefitItem>
    🐄 <span>Ethically Raised Cows</span>
  </BenefitItem>
  <BenefitItem>
    🚚 <span>Locally Sourced & Freshly Delivered</span>
  </BenefitItem>
</ServicesBenefits>

        </ServicesText>

        {/* Right Section - Main Image */}
        <ServicesImageWrapper>
          <ServicesMainImage src={MainImage} />
        </ServicesImageWrapper>
      </ServicesContent>

      {/* Image Grid
      <ServicesImageGrid>
        <ServicesIcon src={url1} />
        <ServicesIcon src={url2} />
        <ServicesIcon src={url3} />
      </ServicesImageGrid> */}
    </ServicesContainer>
  );
};

export default Services;
