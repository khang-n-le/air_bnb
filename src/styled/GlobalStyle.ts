import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1120px;
    --home-max-width: 2520px;
  }

  * {
    box-sizing: border-box;
  }
  
  h2,p {
    margin: 0px;
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-weight: ${p => theme.font.weight.normal};
    font-weight: ${p => theme.font.size.xs};
    font-family: ${p => theme.font.family};
    margin: 0px;
    

  }
  

  svg { vertical-align: baseline; }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  /* Let's get this party started */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    cursor: pointer;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #FAFAFA; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #CCCCCC; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #8C8C8C;
    width: 12px;
    height: 12px;
  }
`;
