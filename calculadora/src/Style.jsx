import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', sans-serif;
  }
`;

export const Main = styled.main`
  background-color: #000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  color: #e90303;
`;

export const Input = styled.input`
  width: 30vw;
  border: none;
  border-radius: 20px;
  padding: 10px;
  margin: 8px;
  background-color: #600000;
  color: #fff;

  &::placeholder {
    color: #666;
    text-align: center;
  }
`;

export const Btn = styled.button`
  border: none;
  padding: 10px 15px;
  color: #fff;
  border-radius: 5px;
  margin: 5px;
  background-color: #333;
  cursor: pointer;

  &:hover {
    background-color: #444;
    color: #fff;
  }
`;

export const Resultado = styled.h2`
  border-radius: 50%;
  padding: 10px;
  color: #fff;
  margin: 10px;
  background-color: #000;
`;
