import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
