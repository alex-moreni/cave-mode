import styled from "styled-components";

export const AuthContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    max-width: 20rem;
  }
`;

export const AuthFormContainer = styled.div`
  width: 50%;
  text-align: center;
  padding-top: 2rem;
  p {
    color: #aaa;
  }
  form {
    padding-top: 2rem;
  }
  input {
    padding-left: 15px;
  }
`;

export const OptionUserAccount = styled.p`
  padding-top: 1rem;
  span {
    color: #000;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const MessageError = styled.h4`
  max-width: 30%;
  padding: 1rem;
  color: #ff2424;
  background-color: #ff9393;
  margin: 1rem auto 0 auto;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
