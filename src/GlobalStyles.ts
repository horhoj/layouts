import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  margin: 200px auto 0;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
