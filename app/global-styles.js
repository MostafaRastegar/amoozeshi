import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size:14px;
    color: #666666;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

`;

export default GlobalStyle;
