// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    /* UPDATE THE FONT-FAMILY HERE */
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFFFFF;
    color: #242424;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p, a, span, div {
    margin: 0;
    padding: 0;
    line-height: 1.1;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;