import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap'); */

    * {
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: sans-serif;
        margin: 0;
    }
`;