import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
    max-width: 1280px;
    margin: 0 auto;
    --white: #FCFCFC;
    --black: #000;
    --rich-black: #02111B;
    --raisin-black: #30292F;
    --onyx: #3F4045;
    --gray: #9A9A9A;
    --payane-gray: #5D737E;
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
  
    /* form styles */
    form {
    max-width: 60%;
    margin: 0 auto;
  }
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
}
  label span {
    margin-bottom: 0.3em;
    font-weight: bold;
    text-align: left;
  }
  input,
  textarea {
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.8em 0em;
    background-color: transparent;
  }
  input::placeholder,
  textarea::placeholder {
    color: #aaa;
  }
  //buttons
  .btn {
    background-color: var(--rich-black);
    color: var(--white);
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    width: 120px;
    font-weight: bold;
    border: none;
    padding: 10px 15px;
    font-size: 1em;
  }
  .btn.btn-dark {
    background-color: #000;
    border-radius: 0;
  }
  .btn.btn-outline {
    background-color: transparent;
    border-radius: 0;
    color: #000;
    border: 1px solid #000;
    padding: 7px 30px;
  }
  .btn:hover {
    background-color: var(--onyx);
    color: #fff;
  }
  .btn.btn-outline:hover {
    background-color: #000;
  }
  .btn.btn-danger:hover {
    background-color: #dc3545;
  }
  button[disabled] {
    background-color: #aaa;
  }
`;
