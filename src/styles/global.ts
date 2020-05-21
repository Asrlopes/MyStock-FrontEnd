import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(180deg, #3892FF 0%, rgba(255, 255, 255, 0) 100%), #52A0FF;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
