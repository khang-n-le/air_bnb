import { createGlobalStyle } from 'styled-components';

import { device } from './device';
import { theme } from './theme/theme';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-weight: ${p => theme.font.weight.regular};
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
