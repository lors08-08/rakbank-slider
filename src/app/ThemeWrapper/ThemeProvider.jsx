import {
  createGlobalStyle,
  ThemeProvider as BaseThemeProvider,
} from 'styled-components';
import { Normalize } from 'styled-normalize';

import { CssFontFamily } from '../styled/CssFontFamily';
import { CssFontFaces } from '../styled/CssFontFaces';

const defaultTheme = {
  font: {
    body: {
      lead: 'font: 800 58px "Exo", sans-serif; line-height: 64.3px',
      body: 'font: 500 16px "Exo", sans-serif; line-height: 24px',
      small: 'font: 500 14px "Exo", sans-serif; line-height: 23.1px',
    }
  },
  transition: '20ms',
  colors: {
    base: '#546bfd',
    text: '#FFFFFF',
  },
  shadows: {
    common: 'box-shadow: 0px 16px 15px -13px rgba(0, 41, 121, 0.08)',
  },
};


const GlobalStyle = createGlobalStyle`
  ${CssFontFaces}
  
  * {
    box-sizing: border-box;
  }
  html {
    ${CssFontFamily};
    height: 100%;
  }
  body {
    height: 100%
  }
  #root {
    height: 100%;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    -webkit-box-shadow: none;
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: none;
  }
`;

export const ThemeProvider = ({ children }) => (
  <BaseThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Normalize />
    {children}
  </BaseThemeProvider>
);
