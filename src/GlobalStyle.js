// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */

@import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-size: 1.8rem;
  font-family: "Golos Text", sans-serif;
  color: var(--color-text-default);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-box-sizing: border-box;
  //border: 1px solid red;
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {

  &::-webkit-scrollbar {
    width: 1rem;
    background-color: var(--color-white);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-text-default);
  }
}

button,
a {
  background-color: transparent;
  cursor: pointer;
}
`;

export default GlobalStyle;