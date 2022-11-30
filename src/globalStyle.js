import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  input ,button ,textarea, label {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  a, a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  
  body {
    background-color: #DADADA;
    overflow-y: scroll;
  }

  html {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyle;