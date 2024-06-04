import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
    max-width: 1280px;
    margin: 0 auto;
    --white: #fff;
    --black: #000;
    --gray: #9a9a9a;
    --background: #f0f8ff;
    --text: "ABeeZee", sans-serif;
    --title: "Poppins", sans-serif;
  }
  * {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background-color: var(--background);
    --webkit-font-smoothing: antialiased;
    font-family: var(--text);
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
