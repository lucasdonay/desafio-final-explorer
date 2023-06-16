import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark_400};
    
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.light_300};
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }

  input, button, textarea {
    outline: none;
  }
`;
