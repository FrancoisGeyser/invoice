import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap&subset=cyrillic,cyrillic-ext,latin-ext');

:root {font-size:16px}

body {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif
}
 a {
     text-decoration:none;
     color:unset;
 }
`;

export default GlobalStyles;
