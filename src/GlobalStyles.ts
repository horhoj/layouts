import { createGlobalStyle } from 'styled-components';

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
  
  body {
    min-width: 400px;
  }
`;
