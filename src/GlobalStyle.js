// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* CSS Variables */
  :root {
// Text Default Collor
--color-text-default: #18264A;

/* Color's Pallet Others*/
--color-white: #ffffff;
--color-black: #000000;
--color-danger: #ff0000;
--color-success: #01D318;
--color-primary: #2B5DE5;
--color-gray: #A8AAAE;

/* Color's Pallet Yellow*/
--color-yellow-100: #FFEAAE;
--color-yellow: #FBC52C;

/* Color's Pallet Red*/
--color-red-100: #FFEAEA;
--color-red-200: #F0ADAD;
--color-red-300: #FCAEB8;
--color-red-400: #FA8989;
--color-red-500: #ED6D7E;
--color-red-600: #EC664A;
--color-red-700: #CC4F4F;
--color-red: #FF0000;

/* Color's Pallet Blue*/
--color-blue-100: #F6FFFF;
--color-blue-200: #DEFDFD;
--color-blue-300: #ADE8F0;
--color-blue-400: #95F2FF;
--color-blue-450: #00C2FF;
--color-blue-500: #00A3FF;
--color-blue-600: #4F88CC;
--color-blue-650: #161d47;
--color-blue-675: #18264A;
--color-blue-700: #6D71B3;
--color-blue-800: #4E229C;
--color-blue: #4F88CC;

/* Color's Pallet Green*/
--color-green-100: #E8FDDE;
--color-green-200: #B6F0AD;
--color-green-300: #95FF9F;
--color-green-400: #00FF1A;
--color-green-500: #05FD00;
--color-green-600: #61CC4F;
--color-green-650: #8DC044;
--color-green-700: #1D7749;
--color-green: #2CAC6B;

/* Color's Pallet Gray*/
--color-gray-100: #D9D9D9;
--color-gray-150: #888888;
--color-gray-175: #676767;
--color-gray-200: #565656;
--color-gray-300: #504A4A;
--color-gray-400: #3E3939;
--color-gray-500: #3C3838;
--color-gray-600: #2B2828;
--color-gray-700: #1E1E1E;
}

/* CSS Font */
@import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap');

/* CSS Reset */
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

/* CSS IMG Preset */
img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

/* CSS Text Preset */
html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* CSS ScrollBar Preset */
body {

  &::-webkit-scrollbar {
    width: 1rem;
    background-color: var(--color-white);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-text-default);
  }
}

/* CSS Button Preset */
button,
a {
  background-color: transparent;
  cursor: pointer;
}

/* CSS Container Preset */
.container {
  width: 100%;
  max-width: 132rem;
  margin: 0 auto;
  padding: 0 1.6rem;
}

.container-full {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}
`;

export default GlobalStyle;