import { createGlobalStyle } from "styled-components";

interface ThemeType {
  body: string;
  main: string;
  mainColor: string;
  accent: string;
  accentColor: string;
  secondary: string;
  secondaryColor: string;
  dullColor: string;
  ternary: string;
  codeColor: string;
  text: string;
}

export const lightTheme = {
  body: "#fffff",
  main: "#fffff",
  mainColor: "#000000",
  accent: "#011ad8",
  accentColor: "#011ad8",
  secondary: "#FFFFFF",
  secondaryColor: "#FFFFFF",
  ternary: "#322c37",
};

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
* {
   box-sizing: border-box;
}
body {
   margin: 0;
   padding: 0;
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
   font-family: 'Montserrat', sans-serif !important;
   font-weight: 400;
   font-style: normal;
   transition: all 0.50s linear;
}

input, textarea, button { font-family: inherit }`;
