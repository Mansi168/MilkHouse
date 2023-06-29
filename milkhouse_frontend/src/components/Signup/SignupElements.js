import styled from "styled-components";

///////////////////////////// NEW UI ELEMENTS ////////////////////

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: var(--bg-clr);
`;

export const FormContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 20px #01bf71;
  position: relative;
  overflow: hidden;
  width: 900px;
  max-width: 100%;
  min-height: 550px;
  margin: 3rem auto;
  display: flex;
`;

export const SignUpContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

export const LeftContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(147.84deg, #01bf71 8.1%, #00492b 95.42%);
  min-height: 100%;
`;

export const LeftHeading = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  color: #ffffff;
`;

export const LeftPara = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1rem;
  color: #ffffff;
  margin-top: 0.4rem;
  width: 70%;
  text-align: center;
`;

export const SignUpForm = styled.form`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUph1 = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 2.3rem;
  line-height: 4rem;
  margin-bottom: 1rem;
  color: #01bf71;
`;

export const FormInput = styled.input`
  width: 70%;
  padding: 0.5rem;
  border-radius: 0;
  border: None;
  background: rgba(1, 191, 113, 0.3);
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 0.8rem;
  color: Black;
  margin-bottom: 1rem;
  outline: none;
  box-sizing: border-box;
  border: 1px solid transparent;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    border: 1px solid #01bf71;
  }

  &:focus {
    border-radius: 0;
    border: 2px solid #01bf71;
  }
`;

export const PhoneContainer = styled.div`
  display: flex;
  width: 70%;

  input {
    &:nth-of-type(1) {
      width: 20%;
      float: left;
      margin-right: 0.6rem;
    }

    &:nth-of-type(2) {
      width: 80%;
      float: right;
    }
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SignUpButton = styled.button`
  width: 9rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 50px;
  background-color: ${props => props.disabled ? 'gray' : '#01bf71'};
  white-space: nowrap;
  color: #fff;
  margin-top: 0.8rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #00492B;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.95);
  }
`;


export const Image = styled.img`
  height: auto;
  width: 90%;
  animation: scale 2.5s ease-in-out infinite;

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Error = styled.b`
  font-weight: bold;
  font-size: 0.8rem;
  color: #ff3300;
`;